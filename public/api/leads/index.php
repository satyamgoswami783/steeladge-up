<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    http_response_code(200);
    echo json_encode([
        "status" => "active",
        "service" => "SteeLage Commercial Leads API",
        "timestamp" => date('c')
    ]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data && !empty($_POST)) {
    $data = $_POST;
}

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid payload"]);
    exit;
}

$fullName = trim($data['fullName'] ?? ($data['firstName'] ?? '') . ' ' . ($data['lastName'] ?? ''));
$companyName = trim($data['companyName'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$projectLocation = trim($data['projectLocation'] ?? '');
$projectDescription = trim($data['projectDescription'] ?? ($data['notes'] ?? ''));

if (empty($fullName) || empty($email) || empty($phone) || empty($projectDescription)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Please complete all required fields."]);
    exit;
}

$referenceId = !empty($data['referenceId']) ? trim($data['referenceId']) : ('STL-' . strtoupper(substr(uniqid(), -6)));
$to = "info@steelage.ca";
$subject = "New Commercial Quote Request - " . $fullName . " (" . $referenceId . ")";

$message = "=== NEW COMMERCIAL QUOTE REQUEST ===\n\n";
$message .= "Reference ID: " . $referenceId . "\n";
$message .= "Full Name:    " . $fullName . "\n";
$message .= "Company:      " . ($companyName ?: "N/A") . "\n";
$message .= "Email:        " . $email . "\n";
$message .= "Phone:        " . $phone . "\n";
$message .= "Location:     " . ($projectLocation ?: "N/A") . "\n\n";
$message .= "Project Scope / Description:\n" . $projectDescription . "\n\n";
$message .= "Submitted:    " . date("Y-m-d H:i:s") . " UTC\n";

$headers = "From: SteeLage Web <noreply@steelage.ca>\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Send email to SteeLage estimating inbox
@mail($to, $subject, $message, $headers);

// Append to log file
$logEntry = date('c') . " | " . $referenceId . " | " . $fullName . " | " . $email . " | " . $phone . "\n";
@file_put_contents(__DIR__ . '/leads.log', $logEntry, FILE_APPEND);

// Also persist JSON array for easy cPanel viewing
try {
    $jsonFile = __DIR__ . '/leads.json';
    $leadsArray = [];
    if (file_exists($jsonFile)) {
        $existing = @file_get_contents($jsonFile);
        $leadsArray = json_decode($existing, true) ?: [];
    }
    array_unshift($leadsArray, [
        "referenceId" => $referenceId,
        "timestamp" => date('c'),
        "fullName" => $fullName,
        "companyName" => $companyName ?: null,
        "email" => $email,
        "phone" => $phone,
        "projectLocation" => $projectLocation ?: null,
        "projectDescription" => $projectDescription
    ]);
    @file_put_contents($jsonFile, json_encode(array_slice($leadsArray, 0, 100), JSON_PRETTY_PRINT));
} catch (Exception $e) {
    // Non-fatal
}

http_response_code(200);
echo json_encode([
    "success" => true,
    "message" => "Quote request received successfully.",
    "referenceId" => $referenceId,
    "lead" => [
        "fullName" => $fullName,
        "email" => $email,
        "phone" => $phone
    ]
]);
