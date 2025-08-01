import { NextResponse } from "next/server";

const baseUrl = "https://mithrabyte.com";

const staticPages = [
  "",
  "/",
  "services",
  "packages",
    "aboutus",
    "contact",
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;
    })
    .join("")}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
