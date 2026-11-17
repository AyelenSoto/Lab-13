export default function LargeComponent() {
  return (
    <aside className="mt-8 flex items-center justify-between rounded-2xl border border-indigo-100 bg-indigo-50/70 px-6 py-4">
      <h2 className="text-sm font-semibold text-slate-900">
        Componente dinámico
      </h2>
      <span className="inline-flex shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
        next/dynamic
      </span>
    </aside>
  );
}