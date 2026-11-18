export type Lang = "pt" | "en";

export const PERFIL = {
  nome: "Diogo Vieira Monteiro",
  email: "diogovieiramonteiro@gmail.com",
  telefone: "+351 914 295 680",
  telefoneLink: "+351914295680", // sem espaços, para tel: e WhatsApp
  github: "https://github.com/eslobas",
  linkedin: "https://www.linkedin.com/in/diogo-monteiro-b7742324b/",
};

type Projeto = { icon: string; titulo: string; texto: string; tags: string[]; link?: string; linkLabel?: string };
type Servico = { icon: string; titulo: string; texto: string };

export const CONTENT: Record<Lang, {
  nav: { servicos: string; frontend: string; projetos: string; sobre: string; contacto: string };
  hero: { eyebrow: string; titulo: string; destaque: string; sub: string; cta1: string; cta2: string };
  servicos: { heading: string; intro: string; items: Servico[] };
  frontend: { heading: string; intro: string; stack: string[]; pontos: string[] };
  projetos: { heading: string; intro: string; items: Projeto[] };
  skills: { heading: string; intro: string; grupos: { label: string; items: string[] }[] };
  sobre: { heading: string; p1: string; p2: string; badges: string[] };
  contacto: { heading: string; sub: string };
  footer: { papel: string };
  legal: { titulo: string; paragrafos: [string, string][]; atualizado: string };
}> = {
  pt: {
    nav: { servicos: "Serviços", frontend: "Frontend", projetos: "Projetos", sobre: "Sobre", contacto: "Contacto" },
    hero: {
      eyebrow: "Engenharia Informática · Frontend & Full-Stack",
      titulo: "Produtos digitais de ponta a ponta,",
      destaque: "do conceito à produção.",
      sub: "Desenvolvo aplicações web e software à medida — da base de dados ao último pixel, com interfaces em React e Next.js. Vários projetos já em produção, incluindo na área da saúde.",
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
      intro: "É no front-end que passo a maior parte do tempo: transformo designs em interfaces rápidas, acessíveis e fiéis ao detalhe — e, como conheço o back-end, ligo-as a dados reais sem atritos.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
      pontos: [
        "Páginas e componentes em React e Next.js (SSR e geração estática) feitos a partir do design",
        "Componentes reutilizáveis e consistentes, partilhados entre páginas e projetos",
        "Responsivo em qualquer ecrã, com atenção a acessibilidade, performance e SEO",
        "Ligação a APIs REST, bases de dados, pagamentos e painéis de gestão",
        "Conformidade legal verificada antes de lançar: RGPD, cookies, Livro de Reclamações e resolução de litígios",
      ],
    },
    projetos: {
      heading: "Projetos",
      intro: "Uma amostra de trabalho real — alguns já em produção.",
      items: [
        { icon: "flower", titulo: "AC Flowers — loja online", texto: "Loja para um atelier floral: construtor de bouquets flor a flor com preço ao vivo, escolha de dia e horário de entrega, pagamento com Stripe (cartão, MB WAY, Multibanco) e painel de gestão para a florista — produção do dia, encomendas, produtos e zonas de entrega.", tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"] },
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
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Design responsivo", "SSR / SSG"] },
        { label: "Back-end & APIs", items: ["Node.js", "Express", "APIs REST", "Supabase", "Stripe"] },
        { label: "Dados", items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Modelação de dados"] },
        { label: "Fundamentos", items: ["Estruturas de dados & algoritmos", "POO", "Concorrência", "Redes", "Arquitetura de computadores", "Sistemas operativos"] },
        { label: "Engenharia", items: ["Engenharia de software", "DDD", "Testes", "Git & GitHub", "Scrum", "Linux"] },
      ],
    },
    sobre: {
      heading: "Sobre",
      p1: "Sou engenheiro informático em formação no ISEP (a entrar no 3.º ano), com foco em desenvolvimento full-stack e front-end em React e Next.js. Gosto de transformar problemas reais em produtos simples de usar e sólidos por dentro.",
      p2: "Já desenvolvi e coloquei em produção aplicações para contextos exigentes, incluindo na área da saúde, onde a fiabilidade e o rigor contam. Trabalho com atenção ao detalhe, da arquitetura à experiência final — e em todos os projetos verifico a parte legal (RGPD, cookies, Livro de Reclamações, resolução alternativa de litígios, acessibilidade e segurança dos dados) antes de os pôr online.",
      badges: ["3.º ano · Eng. Informática (ISEP)", "Cambridge English — B2 First", "Frontend & Full-stack", "RGPD e legalidade verificadas em cada projeto"],
    },
    contacto: {
      heading: "Vamos trabalhar juntos",
      sub: "Tens um projeto ou uma vaga em mente? Fala comigo — respondo rápido.",
    },
    footer: { papel: "Engenheiro informático · Frontend & Full-stack" },
    legal: {
      titulo: "Privacidade e informação legal",
      paragrafos: [
        ["Responsável", "Diogo Vieira Monteiro, Porto. Para qualquer questão sobre privacidade: diogovieiramonteiro@gmail.com."],
        ["Cookies e rastreamento", "Este site não usa cookies de estatística, publicidade ou redes sociais, nem serviços de rastreamento. Guarda apenas, no seu navegador, a língua que escolheu (PT/EN), o que é estritamente necessário e não exige consentimento."],
        ["Alojamento", "O site está alojado na Vercel, que pode registar temporariamente dados técnicos como o endereço IP, por razões de segurança e funcionamento."],
        ["Contactos", "Se me contactar por email, telefone, WhatsApp ou LinkedIn, uso os seus dados apenas para responder ao pedido e não os partilho com terceiros."],
        ["Os seus direitos", "Nos termos do RGPD, pode pedir acesso, retificação ou apagamento dos seus dados, ou opor-se ao seu tratamento, pelo email acima. Pode também apresentar reclamação à Comissão Nacional de Proteção de Dados (www.cnpd.pt)."],
      ],
      atualizado: "Última atualização: novembro de 2026.",
    },
  },

  en: {
    nav: { servicos: "Services", frontend: "Frontend", projetos: "Projects", sobre: "About", contacto: "Contact" },
    hero: {
      eyebrow: "Software Engineering · Frontend & Full-Stack",
      titulo: "End-to-end digital products,",
      destaque: "from concept to production.",
      sub: "I build web applications and custom software — from the database to the last pixel, with interfaces in React and Next.js. Several projects already in production, including in healthcare.",
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
      intro: "The front-end is where I spend most of my time: I turn designs into fast, accessible, pixel-faithful interfaces — and because I know the back-end, I connect them to real data without friction.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
      pontos: [
        "Pages and components in React and Next.js (SSR and static generation), built from the design",
        "Reusable, consistent components shared across pages and projects",
        "Responsive on any screen, with care for accessibility, performance and SEO",
        "Connected to REST APIs, databases, payments and admin dashboards",
        "Legal compliance checked before launch: GDPR, cookies, complaints book and dispute resolution",
      ],
    },
    projetos: {
      heading: "Projects",
      intro: "A sample of real work — some already in production.",
      items: [
        { icon: "flower", titulo: "AC Flowers — online shop", texto: "Shop for a flower atelier: a flower-by-flower bouquet builder with live pricing, delivery day and time slots, Stripe payments (card, MB WAY, Multibanco) and an admin dashboard for the florist — daily production, orders, products and delivery zones.", tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"] },
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
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Responsive design", "SSR / SSG"] },
        { label: "Back-end & APIs", items: ["Node.js", "Express", "REST APIs", "Supabase", "Stripe"] },
        { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Data modelling"] },
        { label: "Fundamentals", items: ["Data structures & algorithms", "OOP", "Concurrency", "Networking", "Computer architecture", "Operating systems"] },
        { label: "Engineering", items: ["Software engineering", "DDD", "Testing", "Git & GitHub", "Scrum", "Linux"] },
      ],
    },
    sobre: {
      heading: "About",
      p1: "I'm a software engineering student at ISEP (entering my 3rd year), focused on full-stack development and React/Next.js front-ends. I enjoy turning real problems into products that are simple to use and solid underneath.",
      p2: "I've built and shipped applications for demanding contexts, including healthcare, where reliability and rigour matter. I work with attention to detail, from architecture to the final experience — and on every project I check the legal side (GDPR, cookies, the official complaints book, alternative dispute resolution, accessibility and data security) before it goes live.",
      badges: ["3rd year · Software Eng. (ISEP)", "Cambridge English — B2 First", "Frontend & Full-stack", "GDPR and legal compliance checked on every project"],
    },
    contacto: {
      heading: "Let's work together",
      sub: "Have a project or a role in mind? Reach out — I reply fast.",
    },
    footer: { papel: "Software engineer · Frontend & Full-stack" },
    legal: {
      titulo: "Privacy & legal information",
      paragrafos: [
        ["Controller", "Diogo Vieira Monteiro, Porto, Portugal. For any privacy question: diogovieiramonteiro@gmail.com."],
        ["Cookies & tracking", "This site uses no analytics, advertising or social media cookies, and no tracking services. It only stores your language choice (PT/EN) in your browser, which is strictly necessary and needs no consent."],
        ["Hosting", "The site is hosted on Vercel, which may temporarily log technical data such as your IP address for security and operation."],
        ["Contact", "If you contact me by email, phone, WhatsApp or LinkedIn, I only use your data to reply and never share it with third parties."],
        ["Your rights", "Under the GDPR you can request access, correction or deletion of your data, or object to its processing, via the email above. You may also complain to the Portuguese data protection authority (www.cnpd.pt)."],
      ],
      atualizado: "Last updated: November 2026.",
    },
  },
};
