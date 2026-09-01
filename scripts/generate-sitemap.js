import fs from "fs";
import path from "path";

const BASE_URL = "https://yokartik.bozapps.com";

const newsDirectory = path.resolve("src/data/news");
const outputDirectory = path.resolve("public");
const outputFile = path.join(outputDirectory, "sitemap.xml");

function getNewsFiles(directory) {
    return fs
        .readdirSync(directory)
        .filter((file) => file.endsWith(".json"));
}

function loadNews(file) {
    const filePath = path.join(newsDirectory, file);
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

const newsFiles = getNewsFiles(newsDirectory);
const articles = newsFiles.map(loadNews);

const urls = [
    {
        loc: `${BASE_URL}/`,
        lastmod: new Date().toISOString().split("T")[0],
    },

    ...articles.map((article) => ({
        loc: `${BASE_URL}/${article.id}`,
        lastmod: new Date().toISOString().split("T")[0],
    })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map(
            (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`
        )
        .join("\n")}
</urlset>
`;

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(outputFile, xml, "utf-8");

console.log(`Sitemap generated: ${outputFile}`);
console.log(`URLs included: ${urls.length}`);