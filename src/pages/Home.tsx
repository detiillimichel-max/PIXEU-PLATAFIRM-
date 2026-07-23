import { ChevronRight, Film, House, Search, Sparkles, SunMedium, Moon, Tv } from "lucide-react";

const cards = [
  {
    icon: House,
    title: "Home",
    description: "Tela principal com destaque para conteúdo em evidência.",
  },
  {
    icon: Search,
    title: "Busca",
    description: "Pesquisa global pensada para rotas inteligentes e sugestões.",
  },
  {
    icon: Film,
    title: "Banner",
    description: "Área de destaque com visual cinematográfico e CTA.",
  },
  {
    icon: Tv,
    title: "Carrosséis",
    description: "Fileiras horizontais para vídeos, filmes, livros e notícias.",
  },
  {
    icon: Moon,
    title: "Tema escuro",
    description: "Experiência premium para navegação noturna.",
  },
  {
    icon: SunMedium,
    title: "Tema claro",
    description: "Base pronta para alternância entre claro e escuro.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-6 md:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-black/40 px-4 py-4 backdrop-blur md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">PIXEU</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Home</h1>
          </div>
          <button className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 md:inline-flex">
            <Sparkles className="h-4 w-4 text-red-500" />
            Explorar agora
          </button>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.28),transparent_30%),linear-gradient(135deg,rgba(24,24,27,0.98),rgba(3,7,18,1))] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between px-5 pt-5 md:px-8 md:pt-8">
              <div className="flex items-center gap-3 text-red-500">
                <Film className="h-5 w-5" />
                <h2 className="text-lg font-semibold md:text-xl">Banner</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10">
                Ver destaque
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 min-h-[420px] p-5 md:mt-8 md:p-8">
              <div className="flex h-full min-h-[360px] flex-col justify-end rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.7)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_18%)] p-6 md:min-h-[460px] md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">Destaque do dia</p>
                <h3 className="mt-3 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                  Uma experiência com cara de streaming para vídeos, filmes, livros e conexões
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                  A Home nasce pronta para integrar rotas, Edge Functions, cache e catálogo de conteúdo sem perder a identidade visual da PIXEU.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
                    Assistir agora
                  </button>
                  <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    Mais informações
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-4">
            <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/45">📺 Carrosséis</p>
              <p className="mt-3 text-lg font-semibold">Filas horizontais inspiradas em plataformas de streaming modernas.</p>
            </article>
            <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/45">🌙☀️ Tema</p>
              <p className="mt-3 text-lg font-semibold">Base preparada para alternância entre tema claro, escuro e sistema.</p>
            </article>
            <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/45">📱 Responsivo</p>
              <p className="mt-3 text-lg font-semibold">Layout único para celular, tablet, desktop e Smart TV.</p>
            </article>
          </aside>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-red-500/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
