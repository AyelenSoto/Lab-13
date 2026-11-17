export default async function handler(req, res) {
  // Detecta automáticamente si estás en localhost o en producción (Vercel/Render)
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const BASE_URL = `${protocol}://${host}`;

  // 1. Rutas estáticas del proyecto
  const staticPages = ["/", "/blog", "/contacto"];

  // 2. Obtener rutas dinámicas desde la API (BD/CMS)
  const response = await fetch(`${BASE_URL}/api/posts`);
  const posts = await response.json();

  const staticUrls = staticPages
    .map(
      (route) => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("");

  const dynamicUrls = posts
    .map(
      (post) => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}</loc>
      <lastmod>${post.updatedAt}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${dynamicUrls}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}