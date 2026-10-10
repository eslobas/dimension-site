export type Lang = "pt" | "en";

export const PERFIL = {
  nome: "Diogo Vieira Monteiro",
  email: "diogovieiramonteiro@gmail.com",
  github: "https://github.com/eslobas",
  linkedin: "", // preenche com o teu LinkedIn para aparecer
};

type Projeto = { icon: string; titulo: string; texto: string; tags: string[]; link?: string; linkLabel?: string };
type Servico = { icon: string; titulo: string; texto: string };

export const CONTENT: Record<Lang, {
  nav: { servicos: string; frontend: string; projetos: string; sobre: string; contacto: string };
  hero: { eyebrow: string; titulo: string; destaque: string; sub: string; cta1: string; cta2: string };
  servicos: { heading: string; intro: string; items: Servico[] };
  frontend: { heading: string; intro: string; pontos: string[] };
  projetos: { heading: string; intro: string; items: Projeto[] };
  skills: { heading: string; intro: string; grupos: { label: string; items: string[] }[] };
  sobre: { heading: string; p1: string; p2: string; badges: string[] };
  contacto: { heading: string; sub: string };
  footer: { papel: string };
}> = {
  pt: {
    nav: { servicos: "Serviços", frontend: "Frontend", projetos: "Projetos", sobre: "Sobre", contacto: "Contacto" },
    hero: {
      eyebrow: "Engenharia Informática · Full-Stack",
      titulo: "Produtos digitais de ponta a ponta,",
      destaque: "do conceito à produção.",
      sub: "Desenvolvo aplicações web e software à medida — da base de dados ao último pixel. Vários projetos já em produção, incluindo na área da saúde.",
      cta1: "Ver projetos",
      cta2: "Falar comigo",
    },
    servicos: {
      heading: "O que faço",
      intro: "Acompanho o projeto de ponta a ponta: arquitetura, desenvolvimento, lançamento e manutenção.",
      items: [
        { icon: "stack", titulo: "Desenvolvimento full-stack", texto: "Aplicações completas, do back-end e base de dados à interface — pensadas para crescer e fáceis de manter." },
        { icon: "code", titulo: "Software à medida", texto: "Aplicações, automações e ferramentas internas feitas para o teu processo concreto, não para um molde genérico." },
        { icon: "plugs", titulo: "Integrações & APIs", texto: "Ligação a pagamentos, emails, serviços externos e sistemas que já usas, com APIs seguras e fiáveis." },
        { icon: "lightning", titulo: "Consultoria técnica", texto: "Ajuda a escolher a stack, rever arquitetura e acelerar projetos já em andamento." },
      ],
    },
    frontend: {
      heading: "Frontend & Websites",
      intro: "Um departamento dedicado a sites que representam bem o teu negócio — rápidos, modernos e que convertem.",
      pontos: [
        "Sites institucionais, landing pages e lojas online",
        "Design moderno e responsável em qualquer ecrã",
        "Performance e SEO de origem, prontos para o Google",
        "Painel para gerires o conteúdo sem depender de ninguém",
      ],
    },
    projetos: {
      heading: "Projetos",
      intro: "Uma amostra de trabalho real — alguns já em produção.",
      items: [
        { icon: "heartbeat", titulo: "Plataforma de rastreabilidade (saúde)", texto: "Aplicação full-stack em produção para um laboratório na área da saúde: controlo de qualidade e rastreabilidade das peças, do registo à entrega, com painel de gestão próprio.", tags: ["Full-stack", "Em produção", "Saúde"] },
        { icon: "factory", titulo: "Gestor de equipamentos industriais", texto: "Software de monitorização e gestão de máquinas e manutenção, com registo de operações e alertas.", tags: ["Python", "Software"], link: "https://github.com/eslobas/industrial-machine-manager", linkLabel: "GitHub" },
        { icon: "package", titulo: "Gestão de stock e encomendas", texto: "Sistema para controlo de inventário e encomendas, com seguimento das melhores condições entre fornecedores.", tags: ["Full-stack", "Gestão"], link: "https://github.com/eslobas/stock-and-order-manager", linkLabel: "GitHub" },
        { icon: "wallet", titulo: "Gestor de despesas pessoais", texto: "Aplicação para registar e analisar despesas, com categorias e uma visão clara do mês.", tags: ["App", "JavaScript"], link: "https://github.com/eslobas/personal-expense-tracker", linkLabel: "GitHub" },
      ],
    },
    skills: {
      heading: "Competências",
      intro: "Tecnologias e áreas com que trabalho, da formação em Engenharia Informática e de projetos reais.",
      grupos: [
        { label: "Linguagens", items: ["Java", "C", "Python", "JavaScript", "TypeScript", "SQL / PL-SQL", "HTML", "CSS"] },
        { label: "Web & Frontend", items: ["React", "Next.js", "Node.js", "Tailwind CSS", "APIs REST", "Design responsivo"] },
        { label: "Dados", items: ["PostgreSQL", "Oracle", "Supabase", "Modelação de dados"] },
        { label: "Fundamentos", items: ["Estruturas de dados & algoritmos", "POO", "Concorrência", "Redes", "Arquitetura de computadores", "Sistemas operativos"] },
        { label: "Engenharia", items: ["Engenharia de software", "DDD", "Testes", "Git & GitHub", "Scrum", "Linux"] },
      ],
    },
    sobre: {
      heading: "Sobre",
      p1: "Sou engenheiro informático em formação no ISEP (a entrar no 3.º ano), com foco em desenvolvimento full-stack. Gosto de transformar problemas reais em produtos simples de usar e sólidos por dentro.",
      p2: "Já desenvolvi e coloquei em produção aplicações para contextos exigentes, incluindo na área da saúde, onde a fiabilidade e o rigor contam. Trabalho com atenção ao detalhe, da arquitetura à experiência final.",
      badges: ["3.º ano · Eng. Informática (ISEP)", "Cambridge English — B2 First", "Full-stack"],
    },
    contacto: {
      heading: "Vamos trabalhar juntos",
      sub: "Tens um projeto ou uma vaga em mente? Fala comigo — respondo rápido.",
    },
    footer: { papel: "Engenheiro informático · Full-stack" },
  },

  en: {
    nav: { servicos: "Services", frontend: "Frontend", projetos: "Projects", sobre: "About", contacto: "Contact" },
    hero: {
      eyebrow: "Software Engineering · Full-Stack",
      titulo: "End-to-end digital products,",
      destaque: "from concept to production.",
      sub: "I build web applications and custom software — from the database to the last pixel. Several projects already in production, including in healthcare.",
      cta1: "View projects",
      cta2: "Get in touch",
    },
    servicos: {
      heading: "What I do",
      intro: "I own the project end to end: architecture, development, launch and maintenance.",
      items: [
        { icon: "stack", titulo: "Full-stack development", texto: "Complete applications, from back-end and database to the interface — built to scale and easy to maintain." },
        { icon: "code", titulo: "Custom software", texto: "Apps, automations and internal tools made for your actual process, not a generic template." },
        { icon: "plugs", titulo: "Integrations & APIs", texto: "Connecting payments, email, external services and the systems you already use, with secure, reliable APIs." },
        { icon: "lightning", titulo: "Technical consulting", texto: "Help choosing the stack, reviewing architecture and speeding up projects already in motion." },
      ],
    },
    frontend: {
      heading: "Frontend & Websites",
      intro: "A dedicated focus on websites that represent your business well — fast, modern and built to convert.",
      pontos: [
        "Business sites, landing pages and online stores",
        "Modern, responsive design on any screen",
        "Performance and SEO from day one, ready for Google",
        "A panel to manage your content without depending on anyone",
      ],
    },
    projetos: {
      heading: "Projects",
      intro: "A sample of real work — some already in production.",
      items: [
        { icon: "heartbeat", titulo: "Traceability platform (healthcare)", texto: "Full-stack application in production for a healthcare laboratory: quality control and traceability of items, from intake to delivery, with its own management panel.", tags: ["Full-stack", "In production", "Healthcare"] },
        { icon: "factory", titulo: "Industrial equipment manager", texto: "Software for monitoring and managing machines and maintenance, with operation logs and alerts.", tags: ["Python", "Software"], link: "https://github.com/eslobas/industrial-machine-manager", linkLabel: "GitHub" },
        { icon: "package", titulo: "Stock & order management", texto: "A system for inventory and order control, tracking the best conditions across suppliers.", tags: ["Full-stack", "Operations"], link: "https://github.com/eslobas/stock-and-order-manager", linkLabel: "GitHub" },
        { icon: "wallet", titulo: "Personal expense tracker", texto: "An app to record and analyse expenses, with categories and a clear monthly view.", tags: ["App", "JavaScript"], link: "https://github.com/eslobas/personal-expense-tracker", linkLabel: "GitHub" },
      ],
    },
    skills: {
      heading: "Skills",
      intro: "Technologies and areas I work with, from my Software Engineering studies and real projects.",
      grupos: [
        { label: "Languages", items: ["Java", "C", "Python", "JavaScript", "TypeScript", "SQL / PL-SQL", "HTML", "CSS"] },
        { label: "Web & Frontend", items: ["React", "Next.js", "Node.js", "Tailwind CSS", "REST APIs", "Responsive design"] },
        { label: "Data", items: ["PostgreSQL", "Oracle", "Supabase", "Data modelling"] },
        { label: "Fundamentals", items: ["Data structures & algorithms", "OOP", "Concurrency", "Networking", "Computer architecture", "Operating systems"] },
        { label: "Engineering", items: ["Software engineering", "DDD", "Testing", "Git & GitHub", "Scrum", "Linux"] },
      ],
    },
    sobre: {
      heading: "About",
      p1: "I'm a software engineering student at ISEP (entering my 3rd year), focused on full-stack development. I enjoy turning real problems into products that are simple to use and solid underneath.",
      p2: "I've built and shipped applications for demanding contexts, including healthcare, where reliability and rigour matter. I work with attention to detail, from architecture to the final experience.",
      badges: ["3rd year · Software Eng. (ISEP)", "Cambridge English — B2 First", "Full-stack"],
    },
    contacto: {
      heading: "Let's work together",
      sub: "Have a project or a role in mind? Reach out — I reply fast.",
    },
    footer: { papel: "Software engineer · Full-stack" },
  },
};
