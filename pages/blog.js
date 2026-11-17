import { useEffect, useState } from "react";
import Head from "next/head";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch("/api/posts", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("No se pudieron cargar los artículos.");
        }

        const data = await response.json();

        if (
          !Array.isArray(data) ||
          data.some(
            (post) =>
              typeof post.slug !== "string" ||
              typeof post.updatedAt !== "string",
          )
        ) {
          throw new Error("La respuesta de artículos no tiene el formato esperado.");
        }

        setPosts(data);
      } catch (loadError) {
        if (!controller.signal.aborted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Ocurrió un error al cargar los artículos.",
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();
    return () => controller.abort();
  }, [attempt]);

  function getPostTitle(slug) {
    const titles = {
      "optimizacion-seo-nextjs": "Optimización SEO en Next.js",
      "sitemaps-dinamicos-google": "Sitemaps dinámicos para Google",
      "rendimiento-con-next-image": "Rendimiento con next/image",
    };

    return (
      titles[slug] ??
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  }

  function getPostCategory(slug) {
    if (slug.includes("sitemap")) return "SEO técnico";
    if (slug.includes("rendimiento") || slug.includes("image")) {
      return "Rendimiento";
    }
    return "SEO";
  }

  function getPostSummary(slug) {
    if (slug.includes("sitemap")) {
      return "Sitemaps actualizados para facilitar la indexación.";
    }
    if (slug.includes("rendimiento") || slug.includes("image")) {
      return "Imágenes optimizadas para una carga más rápida.";
    }
    return "Claves SEO para proyectos con Next.js.";
  }

  function formatDate(value) {
    const date = new Date(`${value}T12:00:00`);

    if (Number.isNaN(date.getTime())) return value;

    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web y SEO | Mi Sitio Optimizado</title>
        <meta name="description" content="Artículos, tutoriales y guías sobre Next.js, Sitemaps dinámicos y optimización de imágenes." />
        <meta property="og:title" content="Blog Técnico - Mi Sitio Optimizado" />
        <meta property="og:description" content="Lee las últimas novedades sobre SEO técnico y desarrollo frontend." />
        <meta property="og:image" content="/images/screamcat.png" />
        <meta property="og:type" content="article" />
      </Head>

      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Artículos
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Ideas sobre SEO y desarrollo
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Guías breves para proyectos web.
          </p>
        </header>

        {isLoading && (
          <p className="mt-10 text-slate-600" role="status">
            Cargando artículos...
          </p>
        )}

        {error && (
          <div
            className="mt-10 rounded-2xl border border-rose-200 bg-white p-6 shadow-sm"
            role="alert"
          >
            <p className="font-medium text-slate-900">{error}</p>
            <button
              type="button"
              onClick={() => setAttempt((current) => current + 1)}
              className="mt-4 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Intentar de nuevo
            </button>
          </div>
        )}

        {!isLoading && !error && posts.length === 0 && (
          <p className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
            Todavía no hay artículos publicados.
          </p>
        )}

        {!isLoading && !error && posts.length > 0 && (
          <section
            aria-label="Artículos recientes"
            className="mt-10 grid gap-5 sm:grid-cols-2"
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {getPostCategory(post.slug)}
                  </span>
                  <time
                    className="text-xs text-slate-500"
                    dateTime={post.updatedAt}
                  >
                    {formatDate(post.updatedAt)}
                  </time>
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                  {getPostTitle(post.slug)}
                </h2>
                <details className="group mt-5 border-t border-slate-100 pt-4">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-indigo-700 transition-colors hover:text-indigo-900 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">
                    Leer resumen
                    <span
                      aria-hidden="true"
                      className="transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {getPostSummary(post.slug)}
                  </p>
                </details>
              </article>
            ))}
          </section>
        )}
      </main>
    </>
  );
}