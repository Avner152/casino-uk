const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { resolve } = require("path");

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/terms-and-conditions", changefreq: "monthly", priority: 0.8 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
  { url: "/cookie-consent-policy", changefreq: "monthly", priority: 0.8 },
  // Add more routes here if necessary
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({
    hostname: "https://casino-uk.pages.dev",
  });
  const path = resolve(__dirname, "public", "sitemap.xml");
  const writeStream = createWriteStream(path);

  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write(route);
  });

  sitemap.end();

  try {
    await streamToPromise(sitemap);
    console.log("Sitemap generated successfully!");
  } catch (err) {
    console.error("Error generating sitemap:", err);
  }
};

generateSitemap();
