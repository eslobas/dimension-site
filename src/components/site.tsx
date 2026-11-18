"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Stack, Code, Plugs, Lightning, Heartbeat, Factory, Package, Wallet, Flower,
  ArrowRight, ArrowUpRight, GithubLogo, EnvelopeSimple, LinkedinLogo, Translate, CheckCircle,
  Phone, WhatsappLogo, MagnifyingGlass, Command, ArrowElbowDownLeft,
} from "@phosphor-icons/react";
import { CONTENT, PERFIL, type Lang } from "@/lib/content";
import { WordsStagger } from "@/components/words-stagger";
import { CopyButton } from "@/components/copy-button";

const ICONS: Record<string, React.ComponentType<{ size?: number; weight?: "duotone" | "bold"; className?: string }>> = {
  stack: Stack, code: Code, plugs: Plugs, lightning: Lightning,
  heartbeat: Heartbeat, factory: Factory, package: Package, wallet: Wallet, flower: Flower,
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
    <div className="palette relative w-full max-w-[640px] mx-auto rounded-xl text-left">
      <div className="flex items-center gap-3 px-5 h-14 border-b border-line">
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
                {active && <motion.span layoutId="sel" className="absolute inset-0 rounded-lg bg-surface-2" transition={{ duration: 0.3, ease: EASE }} />}
                <span className="relative grid place-items-center size-7 rounded-full bg-surface-2 text-fg"><Icon size={16} weight="duotone" /></span>
                <span className="relative flex-1 truncate">{it.label}</span>
                <span className="relative text-xs text-muted">{it.tag}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between px-4 h-11 border-t border-line text-xs text-muted">
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
        <nav className="mx-auto max-w-5xl flex items-center justify-between pl-5 pr-2 h-14 rounded-[40px] bg-bg/70 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-[-0.04em] uppercase">
            <span className="logo-mark" /> Dimension
          </a>
          <div className="flex items-center gap-1 md:gap-2 text-sm text-muted">
            {(["servicos", "frontend", "projetos"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="hidden sm:block px-3 py-2 rounded-[40px] text-fg hover:bg-surface-2 transition-colors">{t.nav[k]}</a>
            ))}
            <button onClick={troca} aria-label="Change language"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[40px] hover:text-fg hover:bg-surface-2 transition-colors">
              <Translate size={16} weight="bold" /> {lang === "pt" ? "EN" : "PT"}
            </button>
            <a href="#contacto" className="btn btn-soft !py-2 !px-4">{t.nav.contacto}</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden pt-36 md:pt-44 pb-24">
        <div className="relative mx-auto max-w-5xl px-4 md:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-[40px] bg-surface px-3.5 py-1.5 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" /> {t.hero.eyebrow}
          </motion.p>
          <div role="heading" aria-level={1} className="h-display mt-7 text-[2.5rem] sm:text-6xl lg:text-[4.1rem] text-balance">
            <WordsStagger key={lang + "a"} className="justify-center" stagger={0.06} speed={0.6}>{t.hero.titulo}</WordsStagger>
            <WordsStagger key={lang + "b"} className="justify-center text-muted" delay={0.35} stagger={0.06} speed={0.6}>{t.hero.destaque}</WordsStagger>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.35 }}
            className="mt-7 mx-auto text-lg text-muted max-w-[52ch] leading-[1.35]">{t.hero.sub}</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#projetos" className="btn btn-light">{t.hero.cta1} <ArrowRight size={18} weight="bold" /></a>
            <a href="#contacto" className="btn btn-ghost">{t.hero.cta2}</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 60, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
            style={{ rotateX: tilt, opacity: fade, transformPerspective: 1200 }} className="mt-20 relative">
            <Palette lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* Marquee de competências */}
      <div className="marquee py-6" aria-label={t.skills.heading}>
        <div className="marquee-track">
          {[...skills, ...skills].map((s, k) => (
            <span key={k} className="text-sm text-muted whitespace-nowrap flex items-center gap-8">{s}<span className="size-1 rounded-full bg-dim" /></span>
          ))}
        </div>
      </div>

      {/* Serviços — bento */}
      <section id="servicos" className="scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32">
          <Reveal>
            <h2 className="h-section text-4xl md:text-[42px]">{t.servicos.heading}</h2>
            <p className="mt-4 text-muted max-w-[56ch]">{t.servicos.intro}</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {t.servicos.items.map((s, k) => {
              const Icon = ICONS[s.icon] ?? Stack;
              const big = k === 0 || k === 3;
              return (
                <Reveal key={s.titulo} delay={k * 0.08} className={big ? "md:col-span-2" : ""}>
                  <Spotlight className="h-full rounded-xl p-8">
                    <span className="icon-tile"><Icon size={22} weight="duotone" /></span>
                    <h3 className="mt-10 font-medium text-[21px] tracking-[.01em]">{s.titulo}</h3>
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
        <div className="relative mx-auto max-w-5xl px-4 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow">Frontend</p>
            <h2 className="mt-3 h-section text-4xl md:text-[42px]">{t.frontend.heading}</h2>
            <p className="mt-5 text-muted leading-relaxed max-w-[48ch]">{t.frontend.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.frontend.stack.map((s) => <kbd key={s} className="chip">{s}</kbd>)}
            </div>
          </Reveal>
          <ul className="space-y-3">
            {t.frontend.pontos.map((p, k) => (
              <Reveal key={p} delay={k * 0.08}>
                <Spotlight as="li" className="flex items-center gap-4 rounded-xl px-6 py-4">
                  <span className="grid place-items-center size-7 rounded-full bg-surface-2 text-xs text-muted shrink-0">{k + 1}</span>
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
            <h2 className="h-section text-4xl md:text-[42px]">{t.projetos.heading}</h2>
            <p className="mt-4 text-muted max-w-[56ch]">{t.projetos.intro}</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {t.projetos.items.map((p, k) => {
              const Icon = ICONS[p.icon] ?? Code;
              return (
                <Reveal key={p.titulo} delay={k * 0.08} className={k === 0 ? "md:col-span-2" : ""}>
                  <Spotlight as={p.link ? "a" : "div"} {...(p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {})}
                    className="group h-full rounded-xl p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="icon-tile"><Icon size={22} weight="duotone" /></span>
                      {p.link && <ArrowUpRight size={20} className="text-muted group-hover:text-fg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />}
                    </div>
                    <h3 className="mt-8 font-medium text-[21px] tracking-[.01em] leading-snug">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1 max-w-[60ch]">{p.texto}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs rounded-[40px] bg-surface-2 px-3 py-1 text-muted">{tag}</span>
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
            <h2 className="h-section text-4xl md:text-[42px]">{t.skills.heading}</h2>
            <p className="mt-4 text-muted max-w-[56ch]">{t.skills.intro}</p>
          </Reveal>
          <div className="mt-12 rounded-xl bg-surface divide-y divide-line overflow-hidden">
            {t.skills.grupos.map((g, k) => (
              <Reveal key={g.label} delay={k * 0.05} className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 p-5 md:p-6 transition-colors">
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
            <h2 className="h-section text-4xl md:text-[42px]">{t.sobre.heading}</h2>
            <p className="mt-6 text-muted leading-relaxed max-w-[54ch]">{t.sobre.p1}</p>
            <p className="mt-4 text-muted leading-relaxed max-w-[54ch]">{t.sobre.p2}</p>
          </Reveal>
          <div className="flex flex-col gap-3 md:pt-2">
            {t.sobre.badges.map((b, k) => (
              <Reveal key={b} delay={k * 0.08}>
                <Spotlight className="flex items-center gap-3 rounded-xl px-6 py-4 text-sm">
                  <CheckCircle size={20} weight="duotone" className="text-muted shrink-0" /> {b}
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-24 px-4 md:px-8 pb-24">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-xl bg-surface px-6 py-20 md:py-28 text-center">
          <div className="relative">
            <h2 className="h-display text-4xl md:text-[65px]">{t.contacto.heading}</h2>
            <p className="mt-5 mx-auto text-muted max-w-[46ch]">{t.contacto.sub}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center rounded-[32px] bg-accent text-accent-fg pr-1.5">
                <a href={`mailto:${PERFIL.email}`} className="btn !pr-2"><EnvelopeSimple size={18} weight="bold" /> {PERFIL.email}</a>
                <CopyButton value={PERFIL.email} aria-label={lang === "pt" ? "Copiar email" : "Copy email"} className="!rounded-full !text-accent-fg hover:!bg-white/15" />
              </span>
              <a href={`tel:${PERFIL.telefoneLink}`} className="btn btn-ghost"><Phone size={18} weight="bold" /> {PERFIL.telefone}</a>
              <a href={`https://wa.me/${PERFIL.telefoneLink.replace("+", "")}`} target="_blank" rel="noreferrer" className="btn btn-ghost"><WhatsappLogo size={18} weight="bold" /> WhatsApp</a>
              {PERFIL.linkedin && <a href={PERFIL.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost"><LinkedinLogo size={18} weight="bold" /> LinkedIn</a>}
              <a href={PERFIL.github} target="_blank" rel="noreferrer" className="btn btn-ghost"><GithubLogo size={18} weight="bold" /> GitHub</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span className="flex items-center gap-2 font-semibold tracking-[-0.04em] uppercase text-fg"><span className="logo-mark" /> Dimension</span>
          <span>© {new Date().getFullYear()} {PERFIL.nome} · {t.footer.papel}</span>
        </div>
        <div className="mx-auto max-w-5xl px-4 md:px-8 pb-10">
          <details id="privacidade" className="group rounded-xl bg-surface px-5 py-4 text-sm text-muted">
            <summary className="cursor-pointer text-fg select-none">{t.legal.titulo}</summary>
            <div className="mt-4 space-y-3 max-w-[70ch] leading-relaxed">
              {t.legal.paragrafos.map(([titulo, texto]) => (
                <p key={titulo}><strong className="font-medium text-fg">{titulo}.</strong> {texto}</p>
              ))}
              <p className="text-xs">{t.legal.atualizado}</p>
            </div>
          </details>
        </div>
      </footer>
    </div>
  );
}
