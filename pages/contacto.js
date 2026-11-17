import { useState } from "react";
import Head from "next/head";

export default function Contacto() {
  const [notice, setNotice] = useState("");

  return (
    <>
      <Head>
        <title>Contacto | Comunícate con Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto con nuestro equipo para asesorías en desarrollo web y posicionamiento SEO." />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta property="og:description" content="Escríbenos tus consultas sobre proyectos en Next.js." />
        <meta property="og:image" content="/images/screamcat.png" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="-ZpV3d8FBdh6rMRTZ00H5CgOYXzJLSfF7aaeFWOdXic" />
      </Head>

      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <section className="mx-auto max-w-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Contacto
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Hablemos.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Cuéntanos sobre tu proyecto.
            </p>
          </div>

          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              setNotice(
                "Aún falta conectar el envío del formulario.",
              );
            }}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Tu mensaje"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar mensaje
            </button>
            {notice && (
              <p
                className="mt-4 rounded-xl bg-indigo-50 p-4 text-sm leading-6 text-indigo-900"
                role="status"
              >
                {notice}
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}