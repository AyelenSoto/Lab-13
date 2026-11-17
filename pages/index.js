import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const LargeComponent = dynamic(() => import("../components/LargeComponent"), {
  loading: () => (
    <div
      className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm"
      role="status"
    >
      Cargando...
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Optimizado en Next.js</title>
        <meta name="description" content="Bienvenido a nuestra plataforma web optimizada para SEO y alto rendimiento con Next.js." />
        <meta property="og:title" content="Inicio - Mi Sitio Optimizado" />
        <meta property="og:description" content="Descubre técnicas avanzadas de posicionamiento web y optimización en Next.js." />
        <meta property="og:image" content="/images/screamcat.png" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <section className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
              SEO y rendimiento con Next.js
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Una web rápida y clara.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Diseño cuidado y rendimiento con Next.js.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ver blog
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Hablemos
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
            <Image
              src="/images/screamcat.png"
              alt="Ilustración de un gato sorprendido"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section aria-labelledby="benefits-title" className="mt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Lo esencial
            </p>
            <h2
              id="benefits-title"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              SEO y rendimiento
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                SEO técnico
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Metadatos claros y estructura simple.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Rendimiento
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Imágenes optimizadas y carga ligera.
              </p>
            </article>
          </div>

          <LargeComponent />
        </section>
      </main>
    </>
  );
}