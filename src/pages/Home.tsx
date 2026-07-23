export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-4 py-6 md:px-6 lg:px-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">PIXEU</p>
            <h1 className="mt-2 text-3xl font-semibold">Home</h1>
          </div>
        </header>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
          <div className="flex items-center gap-3 text-sky-400">
            <span>🎬</span>
            <h2 className="text-xl font-semibold">Banner</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-[1.5fr_1fr]">
            <div className="flex min-h-64 items-end rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-700 p-6">
              <div>
                <p className="text-sm text-sky-300">Destaque do dia</p>
                <h3 className="mt-2 text-3xl font-bold">Descubra conteúdo, vídeos e conexões em um só lugar</h3>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">🎯 Carrosséis</p>
                <p className="mt-2 text-lg font-medium">Filmes, séries, livros, notícias e IA prontos para navegar.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">🌙☀️ Tema</p>
                <p className="mt-2 text-lg font-medium">Base preparada para tema escuro, claro e responsividade total.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ['🏠', 'Home'],
            ['🔍', 'Busca'],
            ['📺', 'Carrosséis'],
            ['📱', 'Responsivo'],
          ].map(([icon, label]) => (
            <article key={label} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-2xl">{icon}</div>
              <h2 className="mt-3 text-lg font-semibold">{label}</h2>
              <p className="mt-2 text-sm text-slate-400">Base inicial pronta para integrar rotas, Edge Functions e conteúdo.</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
