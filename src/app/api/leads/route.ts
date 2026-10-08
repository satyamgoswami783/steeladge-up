import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface LeadPayload {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  projectLocation?: string;
  projectDescription?: string;
  serviceType?: string;
  notes?: string;
  source?: string;
}

export async function POST(request: Request) {
  try {
    let body: LeadPayload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const fullName = (body.fullName || `${body.firstName || ""} ${body.lastName || ""}`).trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const companyName = (body.companyName || "").trim();
    const projectLocation = (body.projectLocation || "").trim();
    const projectDescription = (body.projectDescription || body.notes || "").trim();
    const serviceType = (body.serviceType || "Commercial Tenant Improvements").trim();
    const source = (body.source || "Website Quote Form").trim();

    // Field Validations
    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid Email Address is required." },
        { status: 400 }
      );
    }

    if (!phone || phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { success: false, error: "A valid Phone Number is required." },
        { status: 400 }
      );
    }

    if (!projectDescription) {
      return NextResponse.json(
        { success: false, error: "Project Description is required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const referenceId = `STL-${Date.now().toString(36).toUpperCase()}`;

    const leadRecord = {
      referenceId,
      timestamp,
      fullName,
      companyName: companyName || null,
      email,
      phone,
      projectLocation: projectLocation || null,
      projectDescription,
      serviceType,
      source,
      status: "new",
    };

    // Server log
    console.log("==========================================");
    console.log(`[NEW QUOTE LEAD RECEIVED] Ref: ${referenceId}`);
    console.log(`Date:        ${timestamp}`);
    console.log(`Name:        ${fullName}`);
    console.log(`Company:     ${companyName || "N/A"}`);
    console.log(`Email:       ${email}`);
    console.log(`Phone:       ${phone}`);
    console.log(`Location:    ${projectLocation || "N/A"}`);
    console.log(`Scope:       ${projectDescription}`);
    console.log("==========================================");

    // Persist to local JSON file audit log (graceful fallback if readonly FS)
    try {
      const logDir = path.join(process.cwd(), "data");
      await fs.mkdir(logDir, { recursive: true });
      const filePath = path.join(logDir, "leads.json");
      let existingLeads: unknown[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existingLeads = JSON.parse(fileContent);
        if (!Array.isArray(existingLeads)) existingLeads = [];
      } catch {
        existingLeads = [];
      }
      existingLeads.unshift(leadRecord);
      await fs.writeFile(filePath, JSON.stringify(existingLeads, null, 2), "utf-8");
    } catch (fsError) {
      console.warn("[LEAD STORAGE] Unable to append to data/leads.json (non-fatal):", fsError);
    }

    // Optional external CRM / Webhook forwarding (graceful fallback)
    const externalWebhook =
      process.env.CRM_WEBHOOK_URL ||
      process.env.CRM_API_URL ||
      process.env.LEADS_WEBHOOK_URL;

    if (externalWebhook) {
      try {
        await fetch(externalWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
          signal: AbortSignal.timeout(4000),
        });
      } catch (crmError) {
        console.warn("[CRM FORWARDING] Failed to forward lead to external CRM (non-fatal):", crmError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Quote request received successfully.",
        referenceId,
        lead: {
          fullName,
          email,
          phone,
          companyName,
          projectLocation,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LEAD API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error while processing your request. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
