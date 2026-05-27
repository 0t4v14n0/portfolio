import React, { useState } from 'react';
import githubIcon from '../public/imagens/Github_icon-icons.com_66788.png';
import linkedinIcon from '../public/imagens/174857.png';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'SOBRE' },
    { id: 'services', label: 'SERVIÇOS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJETOS' },
  ];

  const projects = [
    { name: "MedMais (Clínica)", link: "https://sua-clinica-passo-a-passo.vercel.app/", tech: "Spring Boot / React", img: "/imagens/suaClinica.png", featured: true },
    { name: "ForumHub", link: "https://github.com/0t4v14n0/Challenge-ForumHub", tech: "Java / Spring", img: "/imagens/Badge-Spring.png" },
    { name: "LiterAlura", link: "https://github.com/0t4v14n0/Challenge-LiterAlura", tech: "Java / API", img: "/imagens/literalura.png" },
    { name: "WhatsApp Gemini", link: "https://github.com/0t4v14n0/gemini-whatsapp-chatbot", tech: "Python / AI", img: "/imagens/gemini.png" },
    { name: "CineTrack API", link: "https://github.com/0t4v14n0/cinetrack-API", tech: "Java / Spring", img: "/imagens/cinetrack.png" },
    { name: "Decodificador", link: "https://0t4v14n0.github.io/Sprint-01-Construa-um-decodificador-de-texto-com-Javascript/", tech: "JS", img: "/imagens/cod.png" },
  ];

  const skills = [
    { name: "JAVA", level: "97%" },
    { name: "PYTHON", level: "88%" },
    { name: "JAVASCRIPT", level: "80%" },
    { name: "HTML/CSS", level: "80%" },
    { name: "PHP", level: "77%" },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-zinc-100 font-sans overflow-hidden relative flex-col lg:flex-row">
      
      {/* HEADER MOBILE (Aparece apenas em telas pequenas) */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-[#0f0f0f] border-b border-zinc-800 z-50">
        <img src="/imagens/0T4.png" alt="Logo" className="h-10 drop-shadow-[0_0_5px_rgba(34,197,94,0.3)]" />
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-green-600 rounded-xl text-black shadow-lg"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <div className={`h-1 w-full bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`h-1 w-full bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-1 w-full bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </header>

      {/* SIDEBAR (Desktop e Overlay Mobile) */}
      <aside className={`
        fixed lg:static inset-0 z-40 w-72 bg-[#0f0f0f] border-r border-zinc-800 flex flex-col items-center py-10 px-6 shrink-0 transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="mb-10 hidden lg:block">
          <img src="/imagens/0T4.png" alt="Logo" className="w-40 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
        </div>
        
        <nav className="flex flex-col w-full gap-2 flex-1 mt-16 lg:mt-0">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMenuOpen(false); }}
              className={`text-left px-5 py-3 rounded-xl transition-all font-bold ${
                activeTab === item.id 
                ? 'bg-green-600 text-black shadow-lg shadow-green-500/20' 
                : 'hover:bg-zinc-800 text-zinc-400'
              }`}
            >
              {item.label}
            </button>
          ))}

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdzZkldtyOhsTUd2YLOu2lQolvsMq_mADIexoZKd4Lwae4Ung/viewform?fbzx=4887057982778365258" 
            target="_blank" 
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-green-500 transition-all border border-zinc-800 mt-4 font-bold"
          >
            📝 GOOGLE FORMS
          </a>

          <a 
            href="/curriculo.html" 
            target="_blank" 
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-green-500 transition-all border border-zinc-800 mt-4 font-bold"
          >
            📄 CURRÍCULO
          </a>
        </nav>

        <div className="flex gap-6 pt-6 border-t border-zinc-800 w-full justify-center text-xs font-bold text-zinc-600">
          <a
            href="https://github.com/0t4v14n0"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-6 h-6"
            />
            GITHUB
          </a>

          <a
            href="https://linkedin.com/in/otaviano-cruz/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6"
            />
            LINKEDIN
          </a>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-12">
        
        {/* HOME */}
        {activeTab === 'home' && (
          <div className="h-full flex flex-col items-center justify-center text-center">
             <div className="mb-8">
                <img src="/imagens/codehome.png" alt="Home" className="w-64 lg:w-96 drop-shadow-2xl" />
             </div>
             <h1 className="text-4xl lg:text-6xl font-black text-white mb-2">
                FULLSTACK <span className="text-green-500">DEVELOPER</span>
             </h1>
             <p className="text-zinc-500 font-mono tracking-widest text-xs lg:text-sm">
                Java Specialist • Backend Focused
             </p>
          </div>
        )}

        {/* SOBRE */}
        {activeTab === 'about' && (
          <section className="max-w-3xl animate-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-4xl lg:text-5xl font-black mb-8 text-green-500 uppercase italic">Sobre_</h1>
            <div className="space-y-6 text-lg lg:text-xl text-zinc-400 leading-relaxed text-justify">
              <p>
                Olá, eu sou o <span className="text-white font-bold">Otaviano Cruz</span>, um entusiasta de programação de 25 anos. 
                Acredito que na área da tecnologia é fundamental ter um conhecimento diversificado.
              </p>
              <p>
                É por isso que atuo como <span className="text-green-500 font-mono font-bold">Desenvolvedor Full-Stack</span>, 
                com foco especializado em <span className="text-green-500 font-mono font-bold">Backend</span>. Estou sempre em busca de 
                aprender e aprimorar minhas habilidades para criar soluções robustas e eficientes.
              </p>
              <p>
                Bem-vindo ao meu mundo digital, onde compartilho minhas experiências e projetos neste fascinante universo da programação.
              </p>
            </div>
          </section>
        )}

        {/* SERVIÇOS */}
        {activeTab === 'services' && (
          <section className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-black mb-10 text-green-500 uppercase italic">Serviços_</h1>
            <div className="bg-zinc-900 p-8 rounded-3xl border border-green-500/30 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 italic underline decoration-green-500">Sistemas SaaS</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Especialista em criar ecossistemas complexos com múltiplos níveis de acesso (ACL).
              </p>
              <a 
                href="https://sua-clinica-passo-a-passo.vercel.app/" 
                target="_blank" 
                className="inline-flex items-center gap-2 bg-green-600 text-black px-6 py-3 rounded-xl font-black hover:bg-green-400 transition-all"
              >
                VER DEMONSTRAÇÃO →
              </a>
            </div>
          </section>
        )}

        {/* SKILLS */}
        {activeTab === 'skills' && (
          <section className="max-w-2xl">
            <h1 className="text-5xl font-black mb-12 text-green-500 uppercase italic">Skills_</h1>
            <div className="space-y-8">
              {skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-zinc-300">{skill.name}</span>
                    <span className="text-green-500 font-black">{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600" style={{ width: skill.level }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJETOS */}
        {activeTab === 'projects' && (
          <section>
            <h1 className="text-4xl lg:text-5xl font-black mb-10 text-green-500 uppercase italic">Projetos_</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <a 
                  key={i} 
                  href={p.link} 
                  target="_blank" 
                  className={`group bg-zinc-900 border rounded-2xl overflow-hidden transition-all ${
                    p.featured ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]' : 'border-zinc-800 hover:border-green-500/50'
                  }`}
                >
                  <div className="h-40 bg-black flex items-center justify-center p-4 relative">
                    {p.featured && (
                      <span className="absolute top-2 right-2 bg-green-600 text-black text-[9px] font-black px-2 py-1 rounded">
                        SHOWCASE COMPLETO
                      </span>
                    )}
                    <img src={p.img} alt={p.name} className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-5 border-t border-zinc-800">
                    <p className="text-[10px] text-green-500 font-mono mb-1 uppercase font-bold">{p.tech}</p>
                    <h3 className="text-lg font-bold">{p.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

export default App;