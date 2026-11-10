import React, { useEffect, useState } from 'react';

/* ------------------------------------------------------------------ */
/* DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV = [
  { id: 'home',     label: 'Início'   },
  { id: 'about',    label: 'Sobre'    },
  { id: 'projects', label: 'Projetos' },
  { id: 'stack',    label: 'Stack'    },
  { id: 'services', label: 'Serviços' },
  { id: 'contact',  label: 'Contato'  },
];

const PROJECTS = [
  {
    name: 'Routriz',
    tagline: 'Plataforma de roteirização com autenticação multi-nível e dashboard administrativo.',
    link: 'https://routriz.otaviano.dev.br/',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'JavaScript'],
    img: '/imagens/Routriz.png',
    featured: true,
    year: '2024',
  },
  {
    name: 'MedMais',
    tagline: 'SaaS de gestão clínica com controle de acesso baseado em papéis (ACL).',
    link: 'https://sua-clinica-passo-a-passo.vercel.app/',
    stack: ['Spring Boot', 'React', 'PostgreSQL'],
    img: '/imagens/suaClinica.png',
    featured: true,
    year: '2024',
  },
  {
    name: 'ForumHub',
    tagline: 'API REST de fórum com autenticação JWT.',
    link: 'https://github.com/0t4v14n0/Challenge-ForumHub',
    stack: ['Java', 'Spring'],
    img: '/imagens/Badge-Spring.png',
  },
  {
    name: 'LiterAlura',
    tagline: 'Catálogo de livros consumindo API pública.',
    link: 'https://github.com/0t4v14n0/Challenge-LiterAlura',
    stack: ['Java', 'API'],
    img: '/imagens/literalura.png',
  },
  {
    name: 'WhatsApp Gemini',
    tagline: 'Chatbot com IA generativa para WhatsApp.',
    link: 'https://github.com/0t4v14n0/gemini-whatsapp-chatbot',
    stack: ['Python', 'AI'],
    img: '/imagens/gemini.png',
  },
  {
    name: 'CineTrack API',
    tagline: 'API de catálogo e tracking de filmes.',
    link: 'https://github.com/0t4v14n0/cinetrack-API',
    stack: ['Java', 'Spring'],
    img: '/imagens/cinetrack.png',
  },
  {
    name: 'Decodificador',
    tagline: 'Decodificador de texto em JavaScript puro.',
    link: 'https://0t4v14n0.github.io/Sprint-01-Construa-um-decodificador-de-texto-com-Javascript/',
    stack: ['JavaScript', 'HTML/CSS'],
    img: '/imagens/cod.png',
  },
];

const STACK = [
  { group: 'Backend',    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL', 'PHP'] },
  { group: 'Frontend',   items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'] },
  { group: 'Ferramentas', items: ['Git', 'Docker', 'Maven', 'Python'] },
];

const SERVICES = [
  {
    title: 'Sistemas SaaS',
    desc: 'Do modelo de dados à interface. Estruturo produtos com autenticação, permissões e painéis administrativos.',
  },
  {
    title: 'APIs & Integrações',
    desc: 'APIs REST bem modeladas, documentadas e prontas para escalar — integrando com serviços externos quando necessário.',
  },
  {
    title: 'Consultoria Backend',
    desc: 'Revisão de arquitetura, modelagem de domínio e boas práticas em projetos Java/Spring existentes.',
  },
];

/* ------------------------------------------------------------------ */
/* HOOKS                                                              */
/* ------------------------------------------------------------------ */

function useTheme() {
  const [theme, setTheme] = useState(
    () => (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) || 'dark'
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return [theme, setTheme];
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ------------------------------------------------------------------ */
/* APP                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [theme, setTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.id));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* ============================== NAV ============================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <img src="/imagens/0T4.png" alt="0t4" className="h-8 w-auto" />
            <span className="font-mono text-xs text-[var(--muted)] hidden sm:inline">otaviano.dev</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active === n.id
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Alternar tema"
              className="p-2 rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <a
              href="/curriculo.html"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-[var(--accent)] text-black text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Currículo
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden p-2 rounded-md border border-[var(--border)]"
            >
              <span className="block w-5 h-px bg-current mb-1" />
              <span className="block w-5 h-px bg-current mb-1" />
              <span className="block w-5 h-px bg-current" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
            <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className={`text-left py-2 text-sm ${
                    active === n.id ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ============================== HERO ============================== */}
      <section id="home" className="relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        
        {/* MUDANÇA AQUI: Layout em coluna no mobile e grid no desktop. A imagem agora tem 'order-first' no mobile */}
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 pt-10 lg:pt-32 pb-16 lg:pb-32 flex flex-col-reverse lg:grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-12 items-center">
          
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
              // Desenvolvedor Fullstack
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Otaviano Cruz.
              <br />
              <span className="italic text-[var(--muted)]">Backend com propósito.</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-10">
              Construo sistemas e APIs em <span className="text-[var(--text)]">Java & Spring</span>,
              com interfaces em <span className="text-[var(--text)]">React</span> quando o projeto pede.
              Foco em código legível, arquitetura clara e produtos que escalam.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--accent)] text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Ver projetos →
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[var(--border-strong)] font-semibold hover:bg-[var(--surface)] transition-colors"
              >
                Fale comigo
              </button>
            </div>
          </div>

          {/* Imagem com Animação e Visibilidade no Mobile */}
          <div className="relative w-full max-w-md mx-auto block animate-float">
            <div className="absolute -inset-8 bg-[var(--accent-soft)] blur-3xl rounded-full" />
            <img
              src="/imagens/codehome.png"
              alt="Ilustração de código"
              className="relative w-full mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ============================== */}
      <section id="about" className="border-t border-[var(--border)] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24 grid lg:grid-cols-[1fr_360px] gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              01 — Sobre
            </p>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
              Curioso por padrões, obcecado por detalhes.
            </h2>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed text-base lg:text-[17px]">
              <p>
                Sou <span className="text-[var(--text)] font-medium">Otaviano Cruz</span>, desenvolvedor
                fullstack com foco em backend. Acredito que um bom sistema começa pelo domínio bem
                modelado e por decisões técnicas que sobrevivem ao tempo.
              </p>
              <p>
                Meu dia a dia é Java + Spring Boot — autenticação, APIs REST, integrações e bancos
                relacionais. Quando o projeto exige, também construo as interfaces em React, sempre
                cuidando para que a experiência do usuário reflita a qualidade do backend.
              </p>
              <p>
                Estou em constante estudo e aberto a colaborações. Se você tem um problema
                interessante, me chama.
              </p>
            </div>
          </div>

          <aside className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 h-fit">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-5">
              At a glance
            </p>
            <ul className="space-y-4 text-sm">
              {[
                ['Status',  'Disponível para projetos'],
                ['Local',   'Brasil · Remoto'],
                ['Foco',    'Backend / Fullstack'],
                ['Stack',   'Java · Spring · React'],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between gap-4">
                  <span className="text-[var(--muted)]">{k}</span>
                  <span className="text-[var(--text)] text-right">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[var(--border)] flex gap-2">
              <a
                href="https://github.com/0t4v14n0"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-[var(--surface-2)] hover:bg-[var(--border)] text-xs font-mono transition-colors"
              >
                <img src="/imagens/Github_icon-icons.com_66788.png" alt="" className="w-4 h-4 object-contain" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/otaviano-cruz/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-[var(--surface-2)] hover:bg-[var(--border)] text-xs font-mono transition-colors"
              >
                <img src="/imagens/174857.png" alt="" className="w-4 h-4 object-contain" />
                LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ============================== PROJECTS ============================== */}
      <section id="projects" className="border-t border-[var(--border)] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
          <header className="mb-12 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                02 — Projetos
              </p>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Trabalhos selecionados.
              </h2>
            </div>
            <p className="text-sm text-[var(--muted)] max-w-xs">
              Um recorte do que já coloquei no ar — do SaaS ao side project.
            </p>
          </header>

          {/* Destaques */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {PROJECTS.filter((p) => p.featured).map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl overflow-hidden transition-colors"
              >
                <div className="aspect-[16/9] bg-[var(--surface-2)] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[var(--muted)]">
                    <span className="text-[var(--accent)]">●</span>
                    <span>{p.year}</span>
                    <span>·</span>
                    <span>Destaque</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-[var(--muted)] text-sm mb-5 leading-relaxed">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2 py-1 rounded bg-[var(--surface-2)] text-[var(--muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Outros */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter((p) => !p.featured).map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] rounded-xl overflow-hidden transition-colors"
              >
                <div className="aspect-[16/10] bg-[var(--surface-2)] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  <p className="text-xs text-[var(--muted)] mb-4 leading-relaxed">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-2)] text-[var(--muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== STACK ============================== */}
      <section id="stack" className="border-t border-[var(--border)] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
            03 — Stack
          </p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-12">
            O que eu uso no dia a dia.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {STACK.map((g) => (
              <div
                key={g.group}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-5">
                  {g.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SERVICES ============================== */}
      <section id="services" className="border-t border-[var(--border)] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
            04 — Serviços
          </p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-12">
            Como posso ajudar.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col"
              >
                <span className="font-mono text-xs text-[var(--muted)] mb-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://sua-clinica-passo-a-passo.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--surface)] border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)] transition-colors"
            >
              Ver demo de SaaS →
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzZkldtyOhsTUd2YLOu2lQolvsMq_mADIexoZKd4Lwae4Ung/viewform?fbzx=4887057982778365258"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--surface)] border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)] transition-colors"
            >
              Formulário de contato →
            </a>
          </div>
        </div>
      </section>

      {/* ============================== CONTACT ============================== */}
      <section id="contact" className="border-t border-[var(--border)] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-24">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                05 — Contato
              </p>
              <h2 className="font-display text-5xl lg:text-6xl leading-[1.05]">
                Vamos construir
                <br />
                <span className="italic text-[var(--muted)]">algo juntos.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@otaviano.dev.br"
                className="flex items-center justify-between px-5 py-4 rounded-md bg-[var(--accent)] text-black font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Enviar e-mail</span>
                <span>→</span>
              </a>
              <a
                href="/curriculo.html"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-5 py-4 rounded-md border border-[var(--border-strong)] hover:bg-[var(--surface)] transition-colors"
              >
                <span>Baixar currículo</span>
                <span className="text-[var(--muted)]">↓</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--muted)] font-mono">
            <span>© {new Date().getFullYear()} Otaviano Cruz</span>
            <div className="flex gap-4">
              <a href="https://github.com/0t4v14n0" target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">GitHub</a>
              <a href="https://linkedin.com/in/otaviano-cruz/" target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">LinkedIn</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}