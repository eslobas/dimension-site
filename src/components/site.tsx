"use client";
import { useEffect, useState } from "react";
import {
  Stack, Code, Plugs, Lightning, Heartbeat, Factory, Package, Wallet,
  ArrowRight, ArrowUpRight, GithubLogo, EnvelopeSimple, LinkedinLogo, Translate, CheckCircle,
  Phone, WhatsappLogo,
} from "@phosphor-icons/react";
import { CONTENT, PERFIL, type Lang } from "@/lib/content";

const ICONS: Record<string, React.ComponentType<{ size?: number; weight?: "duotone" | "bold"; className?: string }>> = {
  stack: Stack, code: Code, plugs: Plugs, lightning: Lightning,
  heartbeat: Heartbeat, factory: Factory, package: Package, wallet: Wallet,
};

export default function Site() {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => {
    try {
      const s = localStorage.getItem("lang") as Lang | null;
      if (s === "pt" || s === "en") setLang(s);
      else if (navigator.language?.toLowerCase().startsWith("en")) setLang("en");
    } catch {}
  }, []);
  const troca = () => setLang((l) => { const n = l === "pt" ? "en" : "pt"; try { localStorage.setItem("lang", n); } catch {} return n; });

  const t = CONTENT[lang];

  return (
    <div className="min-h-[100dvh]">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 md:px-8 h-16">
          <a href="#" className="font-semibold text-lg tracking-[-0.04em] uppercase">Dimension</a>
          <div className="flex items-center gap-5 md:gap-6 text-sm text-muted">
            <a href="#servicos" className="hidden sm:block hover:text-fg transition-colors">{t.nav.servicos}</a>
            <a href="#frontend" className="hidden sm:block hover:text-fg transition-colors">{t.nav.frontend}</a>
            <a href="#projetos" className="hidden sm:block hover:text-fg transition-colors">{t.nav.projetos}</a>
            <button onClick={troca} aria-label="Change language"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 hover:border-fg hover:text-fg transition-colors">
              <Translate size={16} weight="bold" /> {lang === "pt" ? "EN" : "PT"}
            </button>
            <a href="#contacto" className="btn btn-accent !py-2 !px-4">{t.nav.contacto}</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-5xl px-4 md:px-8 pt-20 md:pt-32 pb-20">
          <p className="text-sm text-accent font-medium tracking-wide uppercase mb-5">{t.hero.eyebrow}</p>
          <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.05em] leading-[1.02] text-balance">
            {t.hero.titulo}<br /><span className="text-accent">{t.hero.destaque}</span>
          </h1>
          <p className="mt-7 text-lg text-muted max-w-[52ch] leading-relaxed">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="btn btn-accent">{t.hero.cta1} <ArrowRight size={18} weight="bold" /></a>
            <a href="#contacto" className="btn btn-ghost">{t.hero.cta2}</a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em]">{t.servicos.heading}</h2>
          <p className="mt-3 text-muted max-w-[56ch]">{t.servicos.intro}</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {t.servicos.items.map((s) => {
              const Icon = ICONS[s.icon] ?? Stack;
              return (
                <div key={s.titulo} className="rounded-[4px] border border-line bg-surface p-6">
                  <Icon size={26} weight="duotone" className="text-accent" />
                  <h3 className="mt-4 font-medium text-lg">{s.titulo}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{s.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frontend */}
      <section id="frontend" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1fr] gap-10 items-center">
          <div>
            <p className="text-sm text-accent font-medium uppercase tracking-wide">Frontend</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-[-0.04em]">{t.frontend.heading}</h2>
            <p className="mt-4 text-muted leading-relaxed max-w-[48ch]">{t.frontend.intro}</p>
          </div>
          <ul className="space-y-3">
            {t.frontend.pontos.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-[4px] border border-line bg-surface px-4 py-3">
                <CheckCircle size={20} weight="duotone" className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em]">{t.projetos.heading}</h2>
          <p className="mt-3 text-muted max-w-[56ch]">{t.projetos.intro}</p>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {t.projetos.items.map((p) => {
              const Icon = ICONS[p.icon] ?? Code;
              const externo = !!p.link;
              const Wrapper: React.ElementType = p.link ? "a" : "div";
              return (
                <Wrapper key={p.titulo} {...(p.link ? { href: p.link, target: "_blank" } : {})}
                  className={`group rounded-[4px] border border-line bg-surface p-6 flex flex-col ${p.link ? "hover:border-fg transition-colors" : ""}`}>
                  <div className="flex items-start justify-between gap-3">
                    <Icon size={24} weight="duotone" className="text-accent" />
                    {externo && <ArrowUpRight size={20} className="text-muted group-hover:text-fg transition-colors shrink-0" />}
                  </div>
                  <h3 className="mt-4 font-medium text-lg leading-snug">{p.titulo}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{p.texto}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs rounded-full border border-line px-2.5 py-1 text-muted">{tag}</span>
                    ))}
                  </div>
                  {p.link && <span className="mt-4 text-sm font-medium inline-flex items-center gap-1">{p.linkLabel} <ArrowRight size={14} weight="bold" /></span>}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em]">{t.skills.heading}</h2>
          <p className="mt-3 text-muted max-w-[56ch]">{t.skills.intro}</p>
          <div className="mt-10 space-y-6">
            {t.skills.grupos.map((g) => (
              <div key={g.label} className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-6">
                <p className="text-sm text-muted pt-1">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="text-sm rounded-[4px] border border-line bg-surface px-3 py-1.5">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.3fr_1fr] gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em]">{t.sobre.heading}</h2>
            <p className="mt-6 text-muted leading-relaxed max-w-[54ch]">{t.sobre.p1}</p>
            <p className="mt-4 text-muted leading-relaxed max-w-[54ch]">{t.sobre.p2}</p>
          </div>
          <div className="flex flex-col gap-3 md:pt-2">
            {t.sobre.badges.map((b) => (
              <div key={b} className="flex items-center gap-3 rounded-[4px] border border-line bg-surface px-4 py-3 text-sm">
                <CheckCircle size={20} weight="duotone" className="text-accent shrink-0" /> {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em]">{t.contacto.heading}</h2>
          <p className="mt-4 text-muted max-w-[46ch]">{t.contacto.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${PERFIL.email}`} className="btn btn-accent"><EnvelopeSimple size={18} weight="bold" /> {PERFIL.email}</a>
            <a href={`tel:${PERFIL.telefoneLink}`} className="btn btn-ghost"><Phone size={18} weight="bold" /> {PERFIL.telefone}</a>
            <a href={`https://wa.me/${PERFIL.telefoneLink.replace("+", "")}`} target="_blank" className="btn btn-ghost"><WhatsappLogo size={18} weight="bold" /> WhatsApp</a>
            {PERFIL.linkedin && <a href={PERFIL.linkedin} target="_blank" className="btn btn-ghost"><LinkedinLogo size={18} weight="bold" /> LinkedIn</a>}
            <a href={PERFIL.github} target="_blank" className="btn btn-ghost"><GithubLogo size={18} weight="bold" /> GitHub</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span className="font-semibold tracking-[-0.04em] uppercase text-fg">Dimension</span>
          <span>© {new Date().getFullYear()} {PERFIL.nome} · {t.footer.papel}</span>
        </div>
      </footer>
    </div>
  );
}
