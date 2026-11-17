import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        >
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-slate-950 transition-colors hover:text-indigo-600"
          >
            Mi Sitio<span className="text-indigo-600">.</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-6">
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
            >
              Inicio
            </Link>
            <Link
              href="/blog"
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
            >
              Contacto
            </Link>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
