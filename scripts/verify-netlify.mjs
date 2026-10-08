async function main() {
  console.log("Testing https://steelage-live.netlify.app/ ...");
  const res = await fetch("https://steelage-live.netlify.app/");
  const html = await res.text();
  console.log("HTML status:", res.status, "HTML bytes:", html.length);
  
  const jsFiles = [...new Set(html.match(/\/_next\/static\/[^\"]+\.js/g) || [])];
  console.log("Found JS files:", jsFiles);
  
  for (const f of jsFiles) {
    const r = await fetch("https://steelage-live.netlify.app" + f);
    console.log(`[STATUS ${r.status}] ${f} -> Type: ${r.headers.get("content-type")}`);
  }
}

main();
