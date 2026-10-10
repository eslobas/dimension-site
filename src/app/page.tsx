import {
  ArrowRight, ArrowUpRight, Code, Browser, Lightning, GithubLogo,
  EnvelopeSimple, LinkedinLogo, Stack,
} from "@phosphor-icons/react/dist/ssr";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "diogovieiramonteiro@gmail.com";
const GITHUB = process.env.NEXT_PUBLIC_GITHUB ?? "https://github.com/eslobas";
const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN ?? "";

const servicos = [
  { icon: Browser, titulo: "Desenvolvimento web", texto: "Sites e aplicações web rápidas e modernas, da landing page à loja online, com foco em performance e boa experiência." },
  { icon: Code, titulo: "Software à medida", texto: "Aplicações e automações feitas para o teu problema concreto — do back-end à integração com serviços externos." },
  { icon: Lightning, titulo: "Consultoria técnica", texto: "Ajuda a escolher a stack certa, rever arquitetura e acelerar projetos já a andar." },
];

const projetos = [
  {
    nome: "Dimension — Loja online",
    tags: ["Next.js", "Supabase", "Stripe"],
    texto: "Protótipo completo de e-commerce: catálogo com variantes de cor e tamanho, checkout com pagamentos, painel de administração e emails automáticos.",
    link: "https://github.com/eslobas/dimension",
    linkLabel: "Ver no GitHub",
  },
  {
    nome: "O teu próximo projeto",
    tags: ["Em breve"],
    texto: "Espaço reservado para mais trabalhos. Vamos preencher com os projetos que quiseres destacar.",
    link: "#contacto",
    linkLabel: "Falar comigo",
  },
];

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 md:px-8 h-16">
          <a href="#" className="font-semibold text-lg tracking-[-0.04em] uppercase">Dimension</a>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#servicos" className="hidden sm:block hover:text-fg transition-colors">Serviços</a>
            <a href="#projetos" className="hidden sm:block hover:text-fg transition-colors">Projetos</a>
            <a href="#contacto" className="btn btn-ghost !py-2 !px-4">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 md:px-8 pt-20 md:pt-32 pb-20">
        <p className="text-sm text-accent font-medium tracking-wide uppercase mb-5">Engenheiro informático</p>
        <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.05em] leading-[1.02] text-balance">
          Construo software<br /><span className="italic font-medium text-muted">que resolve problemas</span> reais.
        </h1>
        <p className="mt-7 text-lg text-muted max-w-[48ch] leading-relaxed">
          Olá, sou o <span className="text-fg font-medium">Diogo Vieira Monteiro</span>. Desenho e desenvolvo
          aplicações web e soluções à medida, do conceito ao produto no ar.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projetos" className="btn btn-accent">Ver projetos <ArrowRight size={18} weight="bold" /></a>
          <a href="#contacto" className="btn btn-ghost">Falar comigo</a>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-12">O que faço</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {servicos.map((s) => (
              <div key={s.titulo} className="rounded-[4px] border border-line bg-surface p-6">
                <s.icon size={26} weight="duotone" className="text-accent" />
                <h3 className="mt-4 font-medium text-lg">{s.titulo}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-12">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {projetos.map((p) => (
              <a key={p.nome} href={p.link} target={p.link.startsWith("http") ? "_blank" : undefined}
                className="group rounded-[4px] border border-line bg-surface p-6 flex flex-col hover:border-fg transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium text-lg leading-snug">{p.nome}</h3>
                  <ArrowUpRight size={20} className="text-muted group-hover:text-fg transition-colors shrink-0" />
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{p.texto}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-line px-2.5 py-1 text-muted">{t}</span>
                  ))}
                </div>
                <span className="mt-4 text-sm font-medium inline-flex items-center gap-1">{p.linkLabel} <ArrowRight size={14} weight="bold" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.3fr_1fr] gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em]">Sobre mim</h2>
            <p className="mt-6 text-muted leading-relaxed max-w-[52ch]">
              Sou estudante de Engenharia Informática no ISEP e gosto de transformar ideias em produtos
              funcionais. Trabalho sobretudo com tecnologias web modernas e dou atenção aos detalhes —
              desde a arquitetura até ao último pixel.
            </p>
            <p className="mt-4 text-muted leading-relaxed max-w-[52ch]">
              <span className="text-fg">Esta secção é um rascunho</span> — diz-me o que queres contar sobre ti
              e eu ajusto o texto, as competências e os projetos.
            </p>
          </div>
          <div className="rounded-[4px] border border-line bg-surface p-6">
            <div className="flex items-center gap-2 text-sm font-medium"><Stack size={18} weight="duotone" className="text-accent" /> Stack</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "Node.js", "Python", "Java", "SQL", "Tailwind"].map((t) => (
                <span key={t} className="text-xs rounded-full border border-line px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em]">Vamos trabalhar juntos</h2>
          <p className="mt-4 text-muted max-w-[46ch]">Tens um projeto em mente? Fala comigo — respondo rápido.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="btn btn-accent"><EnvelopeSimple size={18} weight="bold" /> {EMAIL}</a>
            <a href={GITHUB} target="_blank" className="btn btn-ghost"><GithubLogo size={18} weight="bold" /> GitHub</a>
            {LINKEDIN && <a href={LINKEDIN} target="_blank" className="btn btn-ghost"><LinkedinLogo size={18} weight="bold" /> LinkedIn</a>}
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span className="font-semibold tracking-[-0.04em] uppercase text-fg">Dimension</span>
          <span>© {new Date().getFullYear()} Diogo Vieira Monteiro</span>
        </div>
      </footer>
    </div>
  );
}
