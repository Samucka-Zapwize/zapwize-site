import { useState, useEffect, useRef } from "react";
import heroImg from "./zapwize-hero.jpg";

/* ═══════════════════════════════════════════════════════════
    ZAPWIZE v5 — Boutique Commercial Rewrite
    Preserves v4 editorial premium aesthetic
    All copy/structure changes per commercial audit
   ═══════════════════════════════════════════════════════════ */

const WA = "https://wa.me/5511971986671?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20atendimento%20automatizado%20da%20ZapWize";
const HERO_IMG = heroImg;


function useInView(t = 0.1) {
  const r = useRef(null);
  const [v, s] = useState(false);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { s(true); o.unobserve(el); } }, { threshold: t });
    o.observe(el);
    return () => o.disconnect();
  }, [t]);
  return [r, v];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`
    }}>
      {children}
    </div>
  );
}

function Ticker() {
  const items = ["Automatize", "Atenda", "Qualifique", "Venda", "Organize"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: "var(--c-surface)", borderTop: "1px solid var(--c-border)", borderBottom: "1px solid var(--c-border)", padding: "18px 0" }}>
      <div style={{ display: "flex", gap: 48, whiteSpace: "nowrap", animation: "ticker 25s linear infinite", width: "max-content" }}>
        {row.map((t, i) => (
          <span key={i} style={{ fontFamily: "var(--f-display)", fontSize: "clamp(14px,1.6vw,18px)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--c-muted)" }}>
            {t} <span style={{ color: "var(--c-accent)", margin: "0 8px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ChatDemo() {
  const msgs = [
    { from: "user", text: "Olá, gostaria de agendar uma consulta", time: "14:32" },
    { from: "bot", text: "Olá! 😊 Sou a assistente virtual da clínica. Posso ajudar com agendamento agora mesmo.\n\nQual especialidade você precisa?", time: "14:32" },
    { from: "user", text: "Dermatologia", time: "14:33" },
    { from: "bot", text: "Ótimo! Horários disponíveis:\n\n📅 Segunda 09:00\n📅 Terça 14:30\n📅 Quarta 10:00\n\nQual prefere?", time: "14:33" },
    { from: "user", text: "Terça às 14:30", time: "14:33" },
    { from: "bot", text: "✅ Consulta agendada:\n\n🩺 Dermatologia\n📅 Terça-feira, 14:30\n📍 Clínica Saúde Total\n\nEnviarei lembrete 24h antes!", time: "14:34" },
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown < msgs.length) {
      const t = setTimeout(() => setShown(s => s + 1), shown === 0 ? 600 : 1200);
      return () => clearTimeout(t);
    }
  }, [shown, msgs.length]);
  return (
    <div style={{ background: "#0b1120", borderRadius: 20, padding: "0", overflow: "hidden", maxWidth: 380, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,.4)" }}>
      <div style={{ background: "linear-gradient(135deg, #128c7e, #075e54)", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: 14 }}>ZW</div>
        <div>
          <div style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>Agente ZapWize</div>
          <div style={{ color: "rgba(255,255,255,.7)", fontSize: 12 }}>● online</div>
        </div>
      </div>
      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 10, minHeight: 340, background: "#090e1a" }}>
        {msgs.slice(0, shown).map((m, i) => (
          <div key={i} style={{ alignSelf: m.from === "user" ? "flex-end" : "flex-start", maxWidth: "82%", animation: "fadeUp .3s ease" }}>
            <div style={{
              background: m.from === "user" ? "#005c4b" : "#1a2332",
              color: "#e8e8e8", borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              padding: "10px 14px", fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-line"
            }}>
              {m.text}
              <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", textAlign: "right", marginTop: 4 }}>
                {m.time} {m.from === "user" && "✓✓"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
               }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navItems = [
    { label: "Solução", href: "#solucao" },
    { label: "Para quem", href: "#paraquem" },
    { label: "Como funciona", href: "#processo" },
    { label: "FAQ", href: "#faq" },
  ];

  const faqs = [
    { q: "Preciso trocar meu número de WhatsApp?", a: "Não necessariamente. Trabalhamos com a API oficial do WhatsApp Business da Meta, que pode ser integrada ao seu número atual. Avaliamos a melhor configuração durante o diagnóstico inicial." },
    { q: "O agente responde sozinho?", a: "Sim. O agente é treinado com as informações do seu negócio e responde de forma automática. Ele pode tirar dúvidas, qualificar interessados, agendar atendimentos e direcionar conversas. Quando o assunto exige uma pessoa, ele transfere automaticamente." },
    { q: "E se o cliente quiser falar com uma pessoa?", a: "O agente identifica quando a conversa precisa de atendimento humano e faz a transferência automaticamente. Você define as regras de quando isso acontece." },
    { q: "Quanto tempo leva para implantar?", a: "Entre 5 e 10 dias úteis, dependendo da complexidade do atendimento. Isso inclui mapeamento, configuração, treinamento da IA e testes." },
    { q: "Funciona para negócios pequenos?", a: "Sim. Na verdade, o ZapWize é pensado especialmente para profissionais autônomos e pequenos negócios que precisam atender bem sem ter uma equipe grande." },
    { q: "O agente pode errar?", a: "Como toda tecnologia, existe a possibilidade de respostas imprecisas. Por isso, treinamos o agente com as informações corretas do seu negócio e fazemos ajustes contínuos. Além disso, a transferência para humano está sempre disponível." },
    { q: "Vocês fazem a configuração?", a: "Sim. O ZapWize cuida de toda a implantação, configuração, treinamento do agente e ajustes iniciais. Você não precisa lidar com ferramentas técnicas." },
    { q: "Preciso entender de tecnologia?", a: "Não. Nosso objetivo é que você não precise se preocupar com a parte técnica. Cuidamos de tudo e você acompanha os resultados." },
    { q: "Como funciona o valor?", a: "Como cada atendimento tem necessidades diferentes, primeiro fazemos um diagnóstico rápido. Depois disso, apresentamos uma proposta adequada ao tamanho e à complexidade do seu negócio." },
    { q: "Posso começar com algo simples?", a: "Sim. Muitos clientes começam com um agente básico para responder perguntas frequentes e agendar atendimentos. Conforme os resultados aparecem, é possível expandir." }
  ];

  const segments = [
    { icon: "🏠", title: "Corretores", desc: "Responda interessados em imóveis, filtre compradores, envie informações iniciais e direcione leads qualificados." },
    { icon: "🏋️", title: "Personal Trainers", desc: "Atenda alunos interessados, explique planos, tire dúvidas frequentes e organize pedidos de avaliação." },
    { icon: "🏢", title: "Síndicos", desc: "Organize solicitações, dúvidas frequentes, comunicados e direcionamentos sem depender de respostas manuais o tempo todo." },
    { icon: "🔧", title: "Prestadores de Serviço", desc: "Receba pedidos, explique serviços, filtre oportunidades e responda clientes mesmo durante atendimentos." },
    { icon: "🏪", title: "Pequenos Negócios Locais", desc: "Automatize perguntas repetitivas, horários, localização, serviços e primeiros contatos." },
    { icon: "🩺", title: "Clínicas e Consultórios", desc: "Agende consultas, confirme horários, envie lembretes e organize o fluxo de pacientes automaticamente." },
  ];

  const steps = [
    { num: "01", title: "Entendemos seu atendimento", desc: "Mapeamos como seu WhatsApp funciona hoje, quais perguntas seus clientes mais fazem e onde estão os gargalos." },
    { num: "02", title: "Mapeamos fluxos e perguntas", desc: "Identificamos os atendimentos que podem ser automatizados e quando a conversa precisa ir para uma pessoa." },
    { num: "03", title: "Criamos o agente personalizado", desc: "Configuramos a IA com o tom de voz, informações, regras e conhecimento específico do seu negócio." },
    { num: "04", title: "Implantamos no WhatsApp", desc: "Conectamos ao seu WhatsApp Business com a API oficial da Meta. Tudo seguro e dentro das regras." },
    { num: "05", title: "Ajustamos com conversas reais", desc: "Acompanhamos as primeiras interações e refinamos as respostas para melhorar continuamente." },
    { num: "06", title: "Transferência para humano", desc: "Sempre que necessário, o agente direciona a conversa para você ou sua equipe. Sem fricção." },
  ];

  const problems = [
    { icon: "⏱", title: "Resposta lenta", desc: "O cliente manda mensagem, espera, e vai procurar outro profissional." },
    { icon: "📭", title: "Mensagens acumuladas", desc: "Você abre o WhatsApp e já tem 30 mensagens sem resposta. Algumas oportunidades já passaram." },
    { icon: "🌙", title: "Fora do horário", desc: "Quando você para, os clientes continuam mandando mensagem. Sem resposta, vão para o concorrente." },
    { icon: "😰", title: "Trabalho repetitivo", desc: "Boa parte do seu dia é responder as mesmas perguntas: preço, horário, localização, como funciona." },
    { icon: "🎯", title: "Sem filtro", desc: "Você gasta tempo com curiosos e perde tempo que deveria estar dedicando a quem realmente quer comprar." },
  ];

  const benefits = [
    { icon: "⚡", title: "Resposta imediata", desc: "Seu cliente recebe retorno em segundos, a qualquer hora do dia." },
    { icon: "🎯", title: "Qualificação automática", desc: "O agente filtra quem está realmente interessado antes de chegar até você." },
    { icon: "📅", title: "Agendamento organizado", desc: "Agenda reuniões, consultas e atendimentos direto no WhatsApp." },
    { icon: "🔄", title: "Acompanhamento", desc: "Reengaja contatos que não responderam com mensagens personalizadas." },
    { icon: "💰", title: "Menos custo operacional", desc: "Reduz trabalho repetitivo sem precisar contratar mais gente." },
    { icon: "🤝", title: "Transferência para humano", desc: "Quando a conversa precisa de uma pessoa, o agente direciona automaticamente." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
        :root { --c-bg:#060a13; --c-surface:#0c1220; --c-card:#111827; --c-border:rgba(255,255,255,.06); --c-text:#f0f0f0; --c-muted:#8899aa; --c-accent:#00C896; --c-accent-soft:rgba(0,200,150,.08); --f-display:'Instrument Serif',Georgia,serif; --f-body:'Inter',system-ui,sans-serif; --max-w:1120px; --px:clamp(20px,5vw,64px); }
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{background:var(--c-bg);color:var(--c-text);font-family:var(--f-body);-webkit-font-smoothing:antialiased;overflow-x:hidden}a{color:inherit;text-decoration:none}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .btn-p{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:var(--c-accent);color:#000;font-weight:600;font-size:15px;border-radius:8px;border:none;cursor:pointer;transition:all .2s;text-decoration:none;font-family:var(--f-body)}.btn-p:hover{background:#00e6aa;transform:translateY(-1px);box-shadow:0 8px 32px rgba(0,200,150,.25)}
        .btn-s{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:transparent;color:var(--c-text);font-weight:500;font-size:15px;border-radius:8px;border:1px solid var(--c-border);cursor:pointer;transition:all .2s;text-decoration:none;font-family:var(--f-body)}.btn-s:hover{border-color:var(--c-accent);color:var(--c-accent)}
        .section{padding:clamp(64px,10vw,120px) var(--px)}.section-label{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--c-accent);font-weight:600;margin-bottom:12px}.section-title{font-family:var(--f-display);font-size:clamp(28px,4vw,44px);line-height:1.15;margin-bottom:20px;font-weight:400}.section-subtitle{font-size:clamp(16px,1.8vw,19px);color:var(--c-muted);line-height:1.7;max-width:640px}
        .card{background:var(--c-card);border:1px solid var(--c-border);border-radius:14px;padding:32px;transition:all .3s}.card:hover{border-color:rgba(0,200,150,.15);background:#131d2e}.grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}.grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
        .nav{position:fixed;top:0;left:0;right:0;z-index:100;transition:all .3s}.nav.scrolled{background:rgba(6,10,19,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--c-border)}.nav-inner{max-width:var(--max-w);margin:0 auto;padding:16px var(--px);display:flex;align-items:center;justify-content:space-between}.nav-logo{font-family:var(--f-display);font-size:22px;font-weight:400}.nav-links{display:flex;gap:32px;align-items:center}.nav-link{font-size:14px;color:var(--c-muted);transition:color .2s;font-weight:500}.nav-link:hover{color:var(--c-text)}
        .hamburger{display:none;background:none;border:none;cursor:pointer;padding:4px;color:var(--c-text)}@media(max-width:768px){.nav-links{display:none}.nav-links.open{display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(6,10,19,.97);backdrop-filter:blur(20px);padding:24px var(--px);gap:20px;border-bottom:1px solid var(--c-border)}.hamburger{display:block}}
        .faq-item{border-bottom:1px solid var(--c-border)}.faq-q{width:100%;padding:20px 0;background:none;border:none;color:var(--c-text);font-size:16px;font-weight:500;text-align:left;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:var(--f-body)}.faq-q:hover{color:var(--c-accent)}.faq-a{padding:0 0 20px;color:var(--c-muted);font-size:15px;line-height:1.7}
        .compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}@media(max-width:640px){.compare-grid{grid-template-columns:1fr}}
      `}</style>

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}><div className="nav-inner"><a href="#" className="nav-logo" style={{color:"var(--c-accent)"}}>Zap<span style={{color:"var(--c-text)"}}>Wize</span></a><div className={`nav-links ${menuOpen?"open":""}`}>{navItems.map(n=><a key={n.href} href={n.href} className="nav-link" onClick={()=>setMenuOpen(false)}>{n.label}</a>)}<a href={WA} target="_blank" rel="noopener noreferrer" className="btn-p" style={{padding:"10px 24px",fontSize:14}}>Testar no WhatsApp</a></div><button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{menuOpen?<path d="M18 6L6 18M6 6l12 12"/>:<><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}</svg></button></div></nav>

      <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"120px var(--px) 80px",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",inset:0,backgroundImage:`url(${HERO_IMG})`,backgroundSize:"cover",backgroundPosition:"center",opacity:0.06}}/><div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, var(--c-bg) 0%, transparent 30%, transparent 70%, var(--c-bg) 100%)"}}/><div style={{maxWidth:"var(--max-w)",margin:"0 auto",width:"100%",position:"relative",zIndex:1}}><FadeIn><p className="section-label">Agentes de IA para WhatsApp</p></FadeIn><FadeIn delay={0.1}><h1 style={{fontFamily:"var(--f-display)",fontSize:"clamp(36px,5.5vw,64px)",lineHeight:1.08,marginBottom:24,maxWidth:700,fontWeight:400}}>Pare de perder clientes porque você não conseguiu responder a tempo.</h1></FadeIn><FadeIn delay={0.2}><p style={{fontSize:"clamp(17px,1.8vw,20px)",color:"var(--c-muted)",lineHeight:1.7,maxWidth:580,marginBottom:40}}>Implantamos agentes de IA personalizados para WhatsApp que atendem, qualificam e direcionam clientes automaticamente — mesmo quando você está ocupado.</p></FadeIn><FadeIn delay={0.3}><div style={{display:"flex",gap:16,flexWrap:"wrap"}}><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-p">Experimentar atendimento automatizado</a><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-s">Falar com a ZapWize no WhatsApp</a></div></FadeIn><FadeIn delay={0.45}><div style={{display:"flex",gap:"clamp(24px,4vw,56px)",marginTop:64,flexWrap:"wrap"}}>{[{val:"24/7",label:"Sempre disponível"},{val:"<3s",label:"Tempo de resposta"},{val:"100%",label:"Personalizado"},{val:"Humano",label:"Quando necessário"}].map((m,i)=>(<div key={i}><div style={{fontFamily:"var(--f-display)",fontSize:"clamp(28px,3vw,40px)",color:"var(--c-accent)"}}>{m.val}</div><div style={{fontSize:13,color:"var(--c-muted)",marginTop:4}}>{m.label}</div></div>))}</div></FadeIn></div></section>

      <Ticker/>

      <section style={{padding:"clamp(48px,8vw,80px) var(--px)",textAlign:"center",background:"var(--c-surface)"}}><FadeIn><p style={{fontFamily:"var(--f-display)",fontSize:"clamp(22px,3.2vw,36px)",lineHeight:1.3,maxWidth:720,margin:"0 auto 24px",fontStyle:"italic"}}>"Experimente nosso atendimento automatizado e descubra como seu WhatsApp pode responder, qualificar e vender automaticamente."</p><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-p" style={{fontSize:16,padding:"16px 36px"}}>Testar atendimento agora</a></FadeIn></section>

      <section id="solucao" className="section"><div style={{maxWidth:"var(--max-w)",margin:"0 auto"}}><FadeIn><p className="section-label">O problema</p><h2 className="section-title">Quantos clientes você perde por não responder a tempo?</h2><p className="section-subtitle" style={{marginBottom:48}}>Se você depende do WhatsApp para atender e vender, cada mensagem sem resposta é uma oportunidade que vai para o concorrente.</p></FadeIn><div className="grid-3">{problems.map((p,i)=>(<FadeIn key={i} delay={i*0.08}><div className="card"><div style={{fontSize:28,marginBottom:16}}>{p.icon}</div><h3 style={{fontSize:17,fontWeight:600,marginBottom:8}}>{p.title}</h3><p style={{color:"var(--c-muted)",fontSize:15,lineHeight:1.6}}>{p.desc}</p></div></FadeIn>))}</div></div></section>

      <section id="beneficios" className="section" style={{background:"var(--c-surface)"}}><div style={{maxWidth:"var(--max-w)",margin:"0 auto"}}><FadeIn><p className="section-label">A solução</p><h2 className="section-title">Um agente treinado para o seu atendimento</h2><p className="section-subtitle" style={{marginBottom:48}}>Não é um robô genérico. É uma IA configurada com as informações, o tom de voz e as regras do seu negócio.</p></FadeIn><div className="grid-3">{benefits.map((b,i)=>(<FadeIn key={i} delay={i*0.08}><div className="card"><div style={{fontSize:28,marginBottom:16}}>{b.icon}</div><h3 style={{fontSize:17,fontWeight:600,marginBottom:8}}>{b.title}</h3><p style={{color:"var(--c-muted)",fontSize:15,lineHeight:1.6}}>{b.desc}</p></div></FadeIn>))}</div></div></section>

      <section className="section"><div style={{maxWidth:"var(--max-w)",margin:"0 auto"}}><FadeIn><p className="section-label">Diferencial</p><h2 className="section-title">Não é um robô genérico. É um agente treinado para o seu atendimento.</h2></FadeIn><FadeIn delay={0.15}><div className="compare-grid" style={{marginTop:40}}><div className="card" style={{borderColor:"rgba(255,100,100,.15)"}}><h3 style={{fontSize:18,fontWeight:600,marginBottom:20,color:"#ff6b6b"}}>Chatbot comum</h3>{["Respostas engessadas e genéricas","Fluxos limitados e travados","Pouca ou nenhuma personalização","Experiência fria e robótica","Sem transferência para humano"].map((item,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:14}}><span style={{color:"#ff6b6b",fontSize:16,marginTop:2}}>✕</span><span style={{color:"var(--c-muted)",fontSize:15,lineHeight:1.5}}>{item}</span></div>))}</div><div className="card" style={{borderColor:"rgba(0,200,150,.2)"}}><h3 style={{fontSize:18,fontWeight:600,marginBottom:20,color:"var(--c-accent)"}}>Agente ZapWize</h3>{["Respostas naturais e contextuais","Treinado com informações do seu negócio","Qualifica interessados automaticamente","Direciona para humano quando necessário","Ajustado conforme sua operação evolui"].map((item,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:14}}><span style={{color:"var(--c-accent)",fontSize:16,marginTop:2}}>✓</span><span style={{color:"var(--c-muted)",fontSize:15,lineHeight:1.5}}>{item}</span></div>))}</div></div></FadeIn></div></section>

      <section id="paraquem" className="section" style={{background:"var(--c-surface)"}}><div style={{maxWidth:"var(--max-w)",margin:"0 auto"}}><FadeIn><p className="section-label">Segmentos</p><h2 className="section-title">Para quem o ZapWize é ideal?</h2><p className="section-subtitle" style={{marginBottom:48}}>Profissionais e pequenos negócios que dependem do WhatsApp para atender e vender, mas não conseguem responder tudo a tempo.</p></FadeIn><div className="grid-3">{segments.map((s,i)=>(<FadeIn key={i} delay={i*0.08}><div className="card"><div style={{fontSize:32,marginBottom:16}}>{s.icon}</div><h3 style={{fontSize:17,fontWeight:600,marginBottom:8}}>{s.title}</h3><p style={{color:"var(--c-muted)",fontSize:15,lineHeight:1.6}}>{s.desc}</p></div></FadeIn>))}</div></div></section>

      <section className="section"><div style={{maxWidth:"var(--max-w)",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:64,alignItems:"center"}}><FadeIn><p className="section-label">Demonstração</p><h2 className="section-title">Veja o agente em ação</h2><p style={{color:"var(--c-muted)",fontSize:16,lineHeight:1.7,marginBottom:24}}>Antes de contratar, você pode experimentar na prática. Ao clicar no WhatsApp, você será atendido por nossa assistente virtual, que apresenta a solução, tira dúvidas, entende seu tipo de negócio e, se necessário, direciona você para um responsável humano.</p><div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:32}}>{["Atendimento imediato","Respostas automáticas","Qualificação do interesse","Explicação da solução","Transferência para humano quando necessário"].map((item,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"center"}}><span style={{color:"var(--c-accent)",fontSize:15}}>✓</span><span style={{color:"var(--c-muted)",fontSize:15}}>{item}</span></div>))}</div><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-p">Testar atendimento agora</a></FadeIn><FadeIn delay={0.2}><div style={{display:"flex",justifyContent:"center"}}><ChatDemo/></div></FadeIn></div></section>

      <section id="processo" className="section" style={{background:"var(--c-surface)"}}><div style={{maxWidth:"var(--max-w)",margin:"0 auto"}}><FadeIn><p className="section-label">Processo</p><h2 className="section-title">Como funciona a implantação</h2><p className="section-subtitle" style={{marginBottom:48}}>Cada agente é criado para a realidade do seu negócio. Não trabalhamos com solução genérica.</p></FadeIn><div className="grid-3">{steps.map((s,i)=>(<FadeIn key={i} delay={i*0.08}><div className="card" style={{position:"relative"}}><div style={{fontFamily:"var(--f-display)",fontSize:48,color:"var(--c-accent)",opacity:0.15,position:"absolute",top:16,right:24,fontWeight:400}}>{s.num}</div><h3 style={{fontSize:17,fontWeight:600,marginBottom:8}}>{s.title}</h3><p style={{color:"var(--c-muted)",fontSize:15,lineHeight:1.6}}>{s.desc}</p></div></FadeIn>))}</div></div></section>

      <section className="section"><div style={{maxWidth:720,margin:"0 auto",textAlign:"center"}}><FadeIn><p className="section-label">Investimento</p><h2 className="section-title">Cada agente é criado para a realidade do seu negócio</h2><p className="section-subtitle" style={{margin:"0 auto 40px",textAlign:"center"}}>Não trabalhamos com uma solução genérica. Antes de apresentar uma proposta, entendemos como seu WhatsApp funciona hoje, quais perguntas seus clientes mais fazem, quais atendimentos podem ser automatizados e quando a conversa precisa ser direcionada para uma pessoa.</p></FadeIn><FadeIn delay={0.1}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16,marginBottom:40}}>{["Diagnóstico inicial","Configuração personalizada","Treinamento do agente","Implantação assistida","Suporte e ajustes"].map((item,i)=>(<div key={i} className="card" style={{padding:"20px 24px",textAlign:"center"}}><span style={{color:"var(--c-accent)",fontWeight:600,fontSize:15}}>{item}</span></div>))}</div></FadeIn><FadeIn delay={0.2}><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-p" style={{fontSize:16,padding:"16px 40px"}}>Solicitar diagnóstico gratuito</a></FadeIn></div></section>

      <section className="section" style={{background:"var(--c-surface)"}}><div style={{maxWidth:720,margin:"0 auto",textAlign:"center"}}><FadeIn><p className="section-label">Suporte</p><h2 className="section-title">Você não fica sozinho com a tecnologia</h2><p className="section-subtitle" style={{margin:"0 auto 40px",textAlign:"center"}}>O ZapWize cuida da implantação, configuração inicial e ajustes do agente. A ideia é que você não precise aprender ferramentas complexas. Nós estruturamos o atendimento para que seu WhatsApp funcione de forma mais organizada, rápida e profissional.</p></FadeIn><FadeIn delay={0.1}><div className="grid-3" style={{textAlign:"left"}}>{[{icon:"🛠",text:"Configuração assistida"},{icon:"👤",text:"Suporte humano"},{icon:"🔧",text:"Ajustes iniciais inclusos"},{icon:"🔀",text:"Transferência para responsável"},{icon:"✅",text:"Sem promessa milagrosa"},{icon:"📈",text:"Foco em melhorar atendimento e conversão"}].map((item,i)=>(<div key={i} style={{display:"flex",gap:12,alignItems:"center",padding:"12px 0"}}><span style={{fontSize:22}}>{item.icon}</span><span style={{color:"var(--c-muted)",fontSize:15}}>{item.text}</span></div>))}</div></FadeIn></div></section>

      <section id="faq" className="section"><div style={{maxWidth:720,margin:"0 auto"}}><FadeIn><p className="section-label">FAQ</p><h2 className="section-title">Perguntas frequentes</h2></FadeIn><div style={{marginTop:32}}>{faqs.map((f,i)=>(<FadeIn key={i} delay={i*0.04}><div className="faq-item"><button className="faq-q" onClick={()=>setFaqOpen(faqOpen===i?null:i)}>{f.q}<span style={{color:"var(--c-accent)",fontSize:20,transition:"transform .2s",transform:faqOpen===i?"rotate(45deg)":"rotate(0)"}}>+</span></button>{faqOpen===i&&<div className="faq-a">{f.a}</div>}</div></FadeIn>))}</div></div></section>

      <section className="section" style={{background:"var(--c-surface)",textAlign:"center"}}><div style={{maxWidth:640,margin:"0 auto"}}><FadeIn><h2 className="section-title">Seu próximo cliente pode estar esperando uma resposta agora.</h2><p className="section-subtitle" style={{margin:"0 auto 32px",textAlign:"center"}}>Experimente nosso atendimento automatizado e veja na prática como funciona.</p></FadeIn><FadeIn delay={0.15}><div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-p" style={{fontSize:16,padding:"16px 36px"}}>Quero ver como funcionaria no meu negócio</a><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-s" style={{fontSize:16,padding:"16px 36px"}}>Solicitar diagnóstico gratuito</a></div></FadeIn></div></section>

      <footer style={{padding:"48px var(--px) 32px",borderTop:"1px solid var(--c-border)"}}><div style={{maxWidth:"var(--max-w)",margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:32}}><div><div style={{fontFamily:"var(--f-display)",fontSize:20,marginBottom:8}}><span style={{color:"var(--c-accent)"}}>Zap</span>Wize</div><p style={{color:"var(--c-muted)",fontSize:14}}>Atendimento automatizado com IA para WhatsApp.</p></div><div style={{display:"flex",gap:32,flexWrap:"wrap"}}><div><div style={{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",marginBottom:12,color:"var(--c-muted)"}}>Navegação</div>{navItems.map(n=><a key={n.href} href={n.href} style={{display:"block",fontSize:14,color:"var(--c-muted)",marginBottom:8}}>{n.label}</a>)}</div><div><div style={{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",marginBottom:12,color:"var(--c-muted)"}}>Contato</div><a href={WA} target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:14,color:"var(--c-muted)",marginBottom:8}}>WhatsApp</a><span style={{display:"block",fontSize:14,color:"var(--c-muted)",marginBottom:8}}>contato@zapwize.com.br</span></div></div></div><div style={{maxWidth:"var(--max-w)",margin:"32px auto 0",paddingTop:24,borderTop:"1px solid var(--c-border)",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}><span style={{fontSize:13,color:"var(--c-muted)"}}>© 2026 ZapWize. Todos os direitos reservados.</span><span style={{fontSize:13,color:"var(--c-muted)"}}>Implantação personalizada de agentes de IA</span></div></footer>
    </>
  );
         }
