"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Stack, Code, Plugs, Lightning, Heartbeat, Factory, Package, Wallet,
  ArrowRight, ArrowUpRight, GithubLogo, EnvelopeSimple, LinkedinLogo, Translate, CheckCircle,
  Phone, WhatsappLogo, MagnifyingGlass, Command, ArrowElbowDownLeft,
} from "@phosphor-icons/react";
import { CONTENT, PERFIL, type Lang } from "@/lib/content";

const ICONS: Record<string, React.ComponentType<{ size?: number; weight?: "duotone" | "bold"; className?: string }>> = {
  stack: Stack, code: Code, plugs: Plugs, lightning: Lightning,
  heartbeat: Heartbeat, factory: Factory, package: Package, wallet: Wallet,
};

const EASE = [0.16, 1, 0.3, 1] as const;

// Aparece ao entrar no ecrã
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

// Cartão com brilho que segue o rato (borda + fundo)
function Spotlight({ children, className = "", as: Tag = "div", ...rest }: { children: React.ReactNode; className?: string; as?: React.ElementType } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <Tag ref={ref} onMouseMove={move} className={`spot ${className}`} {...rest}>{children}</Tag>;
}

// Paleta de comandos animada no hero
function Palette({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const queries = [
    { q: lang === "pt" ? "nova aplicação web" : "new web app", items: t.servicos.items.map((s) => ({ icon: s.icon, label: s.titulo, tag: lang === "pt" ? "Serviço" : "Service" })) },
    { q: lang === "pt" ? "projetos em produção" : "projects in production", items: t.projetos.items.map((p) => ({ icon: p.icon, label: p.titulo, tag: lang === "pt" ? "Projeto" : "Project" })) },
  ];
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const [sel, setSel] = useState(0);
  const cur = queries[i];

  useEffect(() => {
    if (typed.length < cur.q.length) {
      const id = setTimeout(() => setTyped(cur.q.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(id);
    }
    const step = setInterval(() => setSel((s) => s + 1), 700);
    const next = setTimeout(() => { setI((v) => (v + 1) % queries.length); setTyped(""); setSel(0); }, 3600);
    return () => { clearInterval(step); clearTimeout(next); };
  }, [typed, cur.q, queries.length]);

  const done = typed.length === cur.q.length;
  return (
    <div className="palette relative w-full max-w-[640px] mx-auto rounded-2xl text-left">
      <div className="flex items-center gap-3 px-5 h-14 border-b border-white/[.06]">
        <MagnifyingGlass size={18} className="text-muted" />
        <span className="text-[15px]">{typed}<span className="caret" /></span>
      </div>
      <div className="p-2 min-h-[232px]">
        <p className="px-3 pt-2 pb-1.5 text-xs text-muted">{lang === "pt" ? "Resultados" : "Results"}</p>
        <AnimatePresence mode="popLayout">
          {done && cur.items.map((it, k) => {
            const Icon = ICONS[it.icon] ?? Code;
            const active = sel % cur.items.length === k;
            return (
              <motion.div key={cur.q + it.label} layout
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: k * 0.05, ease: EASE }}
                className={`relative flex items-center gap-3 rounded-lg px-3 h-12 text-sm ${active ? "" : "text-fg/80"}`}>
                {active && <motion.span layoutId="sel" className="absolute inset-0 rounded-lg bg-white/[.07]" transition={{ duration: 0.3, ease: EASE }} />}
                <span className="relative grid place-items-center size-7 rounded-md bg-accent/15 text-accent"><Icon size={16} weight="duotone" /></span>
                <span className="relative flex-1 truncate">{it.label}</span>
                <span className="relative text-xs text-muted">{it.tag}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between px-4 h-11 border-t border-white/[.06] text-xs text-muted">
        <span className="font-semibold tracking-[-0.03em] uppercase text-fg/70">Dimension</span>
        <span className="flex items-center gap-2">{lang === "pt" ? "Abrir" : "Open"} <kbd className="key"><ArrowElbowDownLeft size={12} /></kbd>
          <span className="mx-1 h-3 w-px bg-line" /> <kbd className="key"><Command size={12} /></kbd><kbd className="key">K</kbd></span>
      </div>
    </div>
  );
}

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

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const tilt = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const t = CONTENT[lang];
  const skills = t.skills.grupos.flatMap((g) => g.items);

  return (
    <div className="min-h-[100dvh]">
      {/* Nav */}
      <header className="fixed top-3 inset-x-0 z-30 px-3">
        <nav className="mx-auto max-w-5xl flex items-center justify-between pl-5 pr-2 h-14 rounded-2xl border border-white/[.07] bg-bg/60 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-[-0.04em] uppercase">
            <span className="logo-mark" /> Dimension
          </a>
          <div className="flex items-center gap-1 md:gap-2 text-sm text-muted">
            {(["servicos", "frontend", "projetos"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="hidden sm:block px-3 py-2 rounded-lg hover:text-fg hover:bg-white/[.05] transition-colors">{t.nav[k]}</a>
            ))}
            <button onClick={troca} aria-label="Change language"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-fg hover:bg-white/[.05] transition-colors">
              <Translate size={16} weight="bold" /> {lang === "pt" ? "EN" : "PT"}
            </button>
            <a href="#contacto" className="btn btn-light !py-2 !px-4">{t.nav.contacto}</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden pt-36 md:pt-44 pb-24">
        <div aria-hidden className="grid-bg" />
        <div aria-hidden className="beam" />
        <div className="relative mx-auto max-w-5xl px-4 md:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.03] px-3.5 py-1.5 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" /> {t.hero.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="mt-7 text-[2.6rem] sm:text-6xl lg:text-[5.2rem] font-semibold tracking-[-0.055em] leading-[1] text-balance">
            <span className="text-grad">{t.hero.titulo}</span><br /><span className="text-accent-grad">{t.hero.destaque}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.35 }}
            className="mt-7 mx-auto text-lg text-muted max-w-[52ch] leading-relaxed">{t.hero.sub}</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#projetos" className="btn btn-light">{t.hero.cta1} <ArrowRight size={18} weight="bold" /></a>
            <a href="#contacto" className="btn btn-ghost">{t.hero.cta2}</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 60, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
            style={{ rotateX: tilt, opacity: fade, transformPerspective: 1200 }} className="mt-20 relative">
            <div aria-hidden className="absolute inset-x-10 -top-10 h-40 rounded-full bg-accent/30 blur-[90px]" />
            <Palette lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* Marquee de competências */}
      <div className="marquee border-y border-white/[.06] py-5" aria-label={t.skills.heading}>
        <div className="marquee-track">
          {[...skills, ...skills].map((s, k) => (
            <span key={k} className="text-sm text-muted whitespace-nowrap flex items-center gap-8">{s}<span className="size-1 rounded-full bg-line" /></span>
          ))}
        </div>
      </div>

      {/* Serviços — bento */}
      <section id="servicos" className="scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.045em] text-grad">{t.servicos.heading}</h2>
            <p className="mt-4 text-muted max-w-[56ch]">{t.servicos.intro}</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {t.servicos.items.map((s, k) => {
              const Icon = ICONS[s.icon] ?? Stack;
              const big = k === 0 || k === 3;
              return (
                <Reveal key={s.titulo} delay={k * 0.08} className={big ? "md:col-span-2" : ""}>
                  <Spotlight className="h-full rounded-2xl p-7 md:p-8">
                    <span className="icon-tile"><Icon size={22} weight="duotone" /></span>
                    <h3 className="mt-10 font-medium text-xl tracking-[-0.02em]">{s.titulo}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed max-w-[46ch]">{s.texto}</p>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frontend */}
      <section id="frontend" className="scroll-mt-24 relative">
        <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs text-accent font-medium uppercase tracking-[0.2em]">Frontend</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.045em] text-grad">{t.frontend.heading}</h2>
            <p className="mt-5 text-muted leading-relaxed max-w-[48ch]">{t.frontend.intro}</p>
          </Reveal>
          <ul className="space-y-3">
            {t.frontend.pontos.map((p, k) => (
              <Reveal key={p} delay={k * 0.08}>
                <Spotlight as="li" className="flex items-center gap-4 rounded-xl px-5 py-4">
                  <kbd className="key !size-7 !text-xs">{k + 1}</kbd>
                  <span className="text-sm">{p}</span>
                </Spotlight>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.045em] text-grad">{t.projetos.heading}</h2>
            <p className="mt-4 text-muted max-w-[56ch]">{t.projetos.intro}</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {t.projetos.items.map((p, k) => {
              const Icon = ICONS[p.icon] ?? Code;
              return (
                <Reveal key={p.titulo} delay={k * 0.08} className={k === 0 ? "md:col-span-2" : ""}>
                  <Spotlight as={p.link ? "a" : "div"} {...(p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {})}
                    className="group h-full rounded-2xl p-7 md:p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="icon-tile"><Icon size={22} weight="duotone" /></span>
                      {p.link && <ArrowUpRight size={20} className="text-muted group-hover:text-fg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />}
                    </div>
                    <h3 className="mt-8 font-medium text-xl tracking-[-0.02em] leading-snug">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1 max-w-[60ch]">{p.texto}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs rounded-md border border-white/[.08] bg-white/[.03] px-2.5 py-1 text-muted">{tag}</span>
                      ))}
                    </div>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.045em] text-grad">{t.skills.heading}</h2>
            <p className="mt-4 text-muted max-w-[56ch]">{t.skills.intro}</p>
          </Reveal>
          <div className="mt-12 rounded-2xl border border-white/[.07] divide-y divide-white/[.06] overflow-hidden">
            {t.skills.grupos.map((g, k) => (
              <Reveal key={g.label} delay={k * 0.05} className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 p-5 md:p-6 hover:bg-white/[.02] transition-colors">
                <p className="text-sm text-muted pt-1.5">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => <kbd key={s} className="chip">{s}</kbd>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32 grid md:grid-cols-[1.3fr_1fr] gap-12">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.045em] text-grad">{t.sobre.heading}</h2>
            <p className="mt-6 text-muted leading-relaxed max-w-[54ch]">{t.sobre.p1}</p>
            <p className="mt-4 text-muted leading-relaxed max-w-[54ch]">{t.sobre.p2}</p>
          </Reveal>
          <div className="flex flex-col gap-3 md:pt-2">
            {t.sobre.badges.map((b, k) => (
              <Reveal key={b} delay={k * 0.08}>
                <Spotlight className="flex items-center gap-3 rounded-xl px-5 py-4 text-sm">
                  <CheckCircle size={20} weight="duotone" className="text-accent shrink-0" /> {b}
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-24 px-4 md:px-8 pb-24">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[.08] px-6 py-20 md:py-28 text-center">
          <div aria-hidden className="grid-bg opacity-60" />
          <div aria-hidden className="absolute left-1/2 -bottom-40 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-accent/35 blur-[110px]" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] text-grad">{t.contacto.heading}</h2>
            <p className="mt-5 mx-auto text-muted max-w-[46ch]">{t.contacto.sub}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${PERFIL.email}`} className="btn btn-light"><EnvelopeSimple size={18} weight="bold" /> {PERFIL.email}</a>
              <a href={`tel:${PERFIL.telefoneLink}`} className="btn btn-ghost"><Phone size={18} weight="bold" /> {PERFIL.telefone}</a>
              <a href={`https://wa.me/${PERFIL.telefoneLink.replace("+", "")}`} target="_blank" rel="noreferrer" className="btn btn-ghost"><WhatsappLogo size={18} weight="bold" /> WhatsApp</a>
              {PERFIL.linkedin && <a href={PERFIL.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost"><LinkedinLogo size={18} weight="bold" /> LinkedIn</a>}
              <a href={PERFIL.github} target="_blank" rel="noreferrer" className="btn btn-ghost"><GithubLogo size={18} weight="bold" /> GitHub</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/[.06]">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span className="flex items-center gap-2 font-semibold tracking-[-0.04em] uppercase text-fg"><span className="logo-mark" /> Dimension</span>
          <span>© {new Date().getFullYear()} {PERFIL.nome} · {t.footer.papel}</span>
        </div>
      </footer>
    </div>
  );
}
