import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Comunícate con Mi Sitio Optimizado</title>
        <meta name="google-site-verification" content="-ZpV3d8FBdh6rMRTZ00H5CgOYXzJLSfF7aaeFWOdXic" />
        <meta name="description" content="Ponte en contacto con nuestro equipo para asesorías en desarrollo web y posicionamiento SEO." />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta property="og:description" content="Escríbenos tus consultas sobre proyectos en Next.js." />
        <meta property="og:image" content="/images/screamcat.png" />
        <meta property="og:type" content="website" />
      </Head>

      <nav>
        <Link href="/">Inicio</Link> | <Link href="/blog">Blog</Link> | <Link href="/contacto">Contacto</Link>
      </nav>
      <h1>Contáctanos</h1>
      <p>Envíanos un mensaje para más información sobre nuestros servicios.</p>
    </>
  );
}