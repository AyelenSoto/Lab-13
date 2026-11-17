export default function handler(req, res) {
  // Simulación de registros obtenidos desde una Base de Datos o CMS
  const postsFromDatabase = [
    {
      id: 1,
      slug: "optimizacion-seo-nextjs",
      title: "Guía de Optimización SEO en Next.js",
      updatedAt: "2026-11-15",
    },
    {
      id: 2,
      slug: "sitemaps-dinamicos-google",
      title: "Cómo generar Sitemaps Dinámicos para Google",
      updatedAt: "2026-11-16",
    },
    {
      id: 3,
      slug: "rendimiento-con-next-image",
      title: "Mejora el rendimiento web con next/image",
      updatedAt: "2026-11-17",
    },
  ];

  res.status(200).json(postsFromDatabase);
}