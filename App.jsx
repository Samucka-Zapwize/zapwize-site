import { useState, useEffect, useRef } from "react";
import heroImg from "./zapwize-hero.jpg";

/* ═══════════════════════════════════════════════════
   ZAPWIZE v5 — Editorial Premium
   Inspired by Assemble's refined minimalism
   ═══════════════════════════════════════════════════ */

const WA = "https://wa.me/5511926902008?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20atendimento%20automatizado%20da%20ZapWize";
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

function R({ children, delay = 0, className = "", d = "up" }) {
  const [ref, v] = useInView();
  const m = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-40px)", right: "translateX(40px)" };
  return <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "none" : m[d], transition: `all 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` }}>{children}</div>;
}

const Ic = {
  Arr: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Chk: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A5BC4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Chv: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  Str: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#F0A94E" stroke="#E8891C" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  WA: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  Mn: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>,
  X: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};

const chatMsgs = [
  { f:"u", t:"Olá, gostaria de agendar uma consulta", h:"14:32" },
  { f:"b", t:"Olá! 😊 Sou a assistente virtual da clínica. Posso ajudar com agendamento agora mesmo.\n\nQual especialidade você precisa?", h:"14:32" },
  { f:"u", t:"Dermatologia", h:"14:33" },
  { f:"b", t:"Ótimo! Horários disponíveis:\n\n📅 Segunda 09:00\n📅 Terça 14:30\n📅 Quarta 10:00\n\nQual prefere?", h:"14:33" },
  { f:"u", t:"Terça às 14:30", h:"14:33" },
  { f:"b", t:"✅ Consulta agendada:\n\n🩺 Dermatologia\n📅 Terça-feira, 14:30\n📍 Clínica Saúde Total\n\nEnviarei lembrete 24h antes!", h:"14:34" },
];

export default function ZapWize() {
  const [mob, setMob] = useState(false);
  const [fq, setFq] = useState(null);
  const [cv, setCv] = useState([]);
  const [cs, setCs] = useState(false);
  const [cr, ci] = useInView(0.25);

  useEffect(() => {
    if (ci && !cs) { setCs(true); chatMsgs.forEach((_, i) => setTimeout(() => setCv(p => [...p, i]), i * 1100)); }
  }, [ci, cs]);

  const nav = [
    { l:"Solução", h:"#solucao" }, { l:"Benefícios", h:"#beneficios" },
    { l:"Processo", h:"#processo" }, { l:"Investimento", h:"#planos" }, { l:"FAQ", h:"#faq" },
  ];

  return (
    <div style={{ fontFamily:"'Manrope', sans-serif", color:"#0F172A", background:"#FAFBFD", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth} body{margin:0;overflow-x:hidden}

        .hd{font-family:'Sora',sans-serif;font-weight:700;line-height:1.08;letter-spacing:-0.035em}
        .hd em{font-style:normal;color:#E8891C;font-weight:800}

        .sec{padding:120px 24px;max-width:1100px;margin:0 auto}
        @media(max-width:768px){.sec{padding:72px 16px}}

        .label{font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#E8891C;margin-bottom:16px}

        .btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:60px;font-weight:600;font-size:15px;text-decoration:none;border:none;cursor:pointer;transition:all 0.3s ease;font-family:'Manrope',sans-serif}
        .btn:hover{transform:translateY(-1px)}
        .btn-p{background:#0F172A;color:#fff}
        .btn-p:hover{background:#1E293B}
        .btn-o{background:#E8891C;color:#fff}
        .btn-o:hover{background:#CC7513}
        .btn-g{background:transparent;color:#0F172A;border:1.5px solid #E2E8F0}
        .btn-g:hover{border-color:#0F172A}

        .card{background:#fff;border:1px solid #F0F0F0;border-radius:16px;transition:all 0.35s ease}
        .card:hover{border-color:#E2E8F0;box-shadow:0 8px 30px rgba(0,0,0,0.04)}

        .wa-f{position:fixed;bottom:24px;right:24px;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;z-index:1000;cursor:pointer;text-decoration:none;box-shadow:0 4px 16px rgba(37,211,102,0.35);transition:all 0.3s ease}
        .wa-f:hover{transform:scale(1.08);box-shadow:0 6px 24px rgba(37,211,102,0.45)}

        .cb{max-width:80%;padding:10px 14px;border-radius:14px;font-size:13px;line-height:1.5;white-space:pre-line}
        .cb-b{background:#fff;color:#1a1a1a;border-bottom-left-radius:4px;align-self:flex-start;box-shadow:0 1px 2px rgba(0,0,0,0.06)}
        .cb-u{background:#DCF8C6;color:#1a1a1a;border-bottom-right-radius:4px;align-self:flex-end}

        .faq-i{border-bottom:1px solid #F0F0F0;transition:all 0.3s}
        .faq-q{padding:24px 0;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-size:16px;background:transparent;border:none;width:100%;text-align:left;font-family:'Manrope';color:#0F172A}
        .faq-a{max-height:0;overflow:hidden;transition:all 0.5s cubic-bezier(0.22,1,0.36,1);color:#64748B;line-height:1.7;font-size:15px}
        .faq-a.open{max-height:300px;padding:0 0 24px}

        .plan-hl{border:2px solid #E8891C!important;position:relative}
        .plan-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#E8891C;color:#fff;padding:4px 16px;border-radius:40px;font-size:11px;font-weight:700;white-space:nowrap;letter-spacing:0.02em}

        .mob-m{position:fixed;inset:0;background:rgba(250,251,253,0.98);backdrop-filter:blur(20px);z-index:999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px}
        .mob-m a{font-size:20px;font-weight:600;color:#0F172A;text-decoration:none;font-family:'Sora',sans-serif}
        @media(max-width:768px){.dsk{display:none!important}}
        @media(min-width:769px){.mob{display:none!important}}
        .hero-img{width:100%;max-width:520px;height:auto;border-radius:20px}
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;text-align:center!important}
          .hero-img{max-width:360px;margin:0 auto}
          .hero-btns{justify-content:center!important}
        }
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(250,251,253,0.9)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <a href="#" style={{ textDecoration:"none", display:"flex", alignItems:"center" }}>
            <span style={{ fontFamily:"'Sora'", fontWeight:800, fontSize:22, letterSpacing:"-0.03em" }}><span style={{ color:"#E8891C" }}>Zap</span><span style={{ color:"#1A5BC4" }}>Wize</span></span>
          </a>
          <div className="dsk" style={{ display:"flex", gap:32, alignItems:"center" }}>
            {nav.map(n => <a key={n.h} href={n.h} style={{ textDecoration:"none", color:"#64748B", fontSize:14, fontWeight:500, transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#0F172A"} onMouseLeave={e=>e.target.style.color="#64748B"}>{n.l}</a>)}
            <a href={WA} target="_blank" rel="noopener" className="btn btn-p" style={{ padding:"10px 22px", fontSize:13 }}>Testar no WhatsApp</a>
          </div>
          <button className="mob" onClick={()=>setMob(true)} style={{ background:"none", border:"none", cursor:"pointer" }}><Ic.Mn /></button>
        </div>
      </nav>

      {mob && <div className="mob-m">
        <button onClick={()=>setMob(false)} style={{ position:"absolute", top:20, right:24, background:"none", border:"none", cursor:"pointer" }}><Ic.X /></button>
        {nav.map(n => <a key={n.h} href={n.h} onClick={()=>setMob(false)}>{n.l}</a>)}
        <a href={WA} target="_blank" rel="noopener" className="btn btn-o">Testar no WhatsApp</a>
      </div>}

      {/* ═══ 1. HERO ═══ */}
      <section style={{ paddingTop:120, paddingBottom:80, background:"#FAFBFD" }}>
        <div className="hero-grid" style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:60, alignItems:"center" }}>
          <div style={{ textAlign:"left" }}>
            <R>
              <div className="label">Agentes de IA para WhatsApp</div>
            </R>
            <R delay={0.08}>
              <h1 className="hd" style={{ fontSize:"clamp(38px, 6vw, 68px)", marginBottom:24, color:"#0F172A" }}>
                Seu WhatsApp vendendo <em>24 horas</em> por dia.
              </h1>
            </R>
            <R delay={0.16}>
              <p style={{ color:"#64748B", fontSize:18, lineHeight:1.7, marginBottom:36, maxWidth:480 }}>
                Implantamos agentes de IA personalizados para WhatsApp que atendem, qualificam e direcionam clientes automaticamente — mesmo quando você está ocupado.
              </p>
            </R>
            <R delay={0.24}>
              <div className="hero-btns" style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <a href={WA} target="_blank" rel="noopener" className="btn btn-p" style={{ padding:"16px 32px" }}>Solicitar demonstração <Ic.Arr /></a>
                <a href={WA} target="_blank" rel="noopener" className="btn btn-g" style={{ padding:"16px 32px" }}><Ic.WA /> Falar no WhatsApp</a>
              </div>
            </R>
          </div>
          <R delay={0.15} d="right">
            <div style={{ background:"#0B1D3A", borderRadius:24, padding:24, display:"flex", justifyContent:"center", alignItems:"center" }}>
              <img src={HERO_IMG} alt="ZapWize — Robô assistente de IA" className="hero-img" />
            </div>
          </R>
        </div>
        <R delay={0.35}>
          <div style={{ maxWidth:1100, margin:"48px auto 0", padding:"0 24px", display:"flex", gap:48, justifyContent:"center", flexWrap:"wrap" }}>
            {[["24/7","Sempre disponível"],["<3s","Tempo de resposta"],["100%","Personalizado"],["Humano","Quando necessário"]].map(([v,l])=>(
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:28, fontWeight:700, color:"#0F172A", fontFamily:"'Sora'" }}>{v}</div>
                <div style={{ fontSize:13, color:"#94A3B8", marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </R>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div style={{ background:"#E8891C", padding:"14px 0", overflow:"hidden" }}>
        <div style={{ display:"flex", gap:48, whiteSpace:"nowrap", animation:"marquee 24s linear infinite", color:"#fff", fontWeight:600, fontSize:14, letterSpacing:"0.01em" }}>
          {[...Array(4)].map((_,i)=><span key={i} style={{ display:"inline-flex", alignItems:"center", gap:12 }}>Automatize · Atenda · Qualifique · Venda · Escale <span style={{ opacity:0.4 }}>✦</span></span>)}
        </div>
      </div>

      {/* ═══ 2. PROBLEMAS ═══ */}
      <section id="problemas" style={{ background:"#fff" }}>
        <div className="sec">
          <R><div className="label">O problema</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(32px,5vw,52px)", maxWidth:700, marginBottom:56 }}>Quantas vendas você perde por <em>não responder</em> a tempo?</h2></R>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:16 }}>
            {[
              ["⏱","Resposta lenta","Clientes esperam e desistem antes de você ver a mensagem."],
              ["📭","Leads esquecidos","Mensagens acumulam e oportunidades somem sem retorno."],
              ["🌙","Fora do horário","Quando sua equipe descansa, clientes procuram o concorrente."],
              ["😰","Equipe sobrecarregada","Seu time responde perguntas repetitivas ao invés de vender."],
              ["🎯","Sem padronização","Cada atendente responde diferente. Sua marca perde consistência."]
            ].map(([e,t,d],i)=>(
              <R key={i} delay={i*0.06}>
                <div className="card" style={{ padding:"28px 24px" }}>
                  <div style={{ fontSize:28, marginBottom:12 }}>{e}</div>
                  <h3 style={{ fontSize:15, fontWeight:700, marginBottom:6 }}>{t}</h3>
                  <p style={{ color:"#64748B", fontSize:14, lineHeight:1.6 }}>{d}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. SOLUÇÃO ═══ */}
      <section id="solucao">
        <div className="sec" style={{ textAlign:"center" }}>
          <R><div className="label">A solução</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(32px,5vw,52px)", maxWidth:750, margin:"0 auto 24px" }}>Um agente de IA treinado para <em>atender e vender</em> por você.</h2></R>
          <R delay={0.12}><p style={{ color:"#64748B", fontSize:17, maxWidth:560, margin:"0 auto 48px", lineHeight:1.7 }}>Não é um chatbot genérico. É um funcionário virtual implantado sob medida pela equipe ZapWize.</p></R>
          <R delay={0.2}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap", gap:8 }}>
              {["Mensagem recebida","IA responde","Qualifica","Agenda","Venda fechada"].map((s,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ padding:"12px 20px", borderRadius:60, background:i===4?"#E8891C":"#fff", color:i===4?"#fff":"#0F172A", fontWeight:600, fontSize:14, border:i<4?"1px solid #F0F0F0":"none", whiteSpace:"nowrap" }}>{s}</div>
                  {i<4 && <span style={{ color:"#CBD5E1", fontSize:16 }}>→</span>}
                </div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ═══ 4. BENEFÍCIOS ═══ */}
      <section id="beneficios" style={{ background:"#fff" }}>
        <div className="sec">
          <R><div className="label">Benefícios</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(32px,5vw,52px)", maxWidth:600, marginBottom:56 }}>Um agente treinado para o <em>seu atendimento</em></h2></R>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:20 }}>
            {[
              ["🕐","Atendimento 24/7","Nunca dorme, nunca tira férias, nunca perde a paciência."],
              ["⚡","Respostas em <3s","Tempo de resposta abaixo de 3 segundos para qualquer mensagem."],
              ["🎯","Qualificação automática","Filtra leads quentes e frios antes de chegar ao comercial."],
              ["📅","Agendamento inteligente","Agenda reuniões e consultas direto no seu calendário."],
              ["🔄","Follow-up automatizado","Reengaja leads inativos com mensagens personalizadas."],
              ["🚀","Escalabilidade total","10 ou 10.000 conversas simultâneas sem contratar ninguém."],
              ["💰","Redução de custos","Economia de até 70% comparado a uma equipe tradicional."],
              ["📈","Mais conversões","Aumento médio de 40% na taxa de conversão."]
            ].map(([e,t,d],i)=>(
              <R key={i} delay={i*0.05}>
                <div style={{ padding:"24px 0", borderBottom:"1px solid #F0F0F0" }}>
                  <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                    <span style={{ fontSize:22, marginTop:2 }}>{e}</span>
                    <div>
                      <h3 style={{ fontSize:15, fontWeight:700, marginBottom:4 }}>{t}</h3>
                      <p style={{ color:"#64748B", fontSize:14, lineHeight:1.6 }}>{d}</p>
                    </div>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. COMO FUNCIONA ═══ */}
      <section id="processo">
        <div className="sec">
          <R><div className="label">Processo</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(32px,5vw,52px)", maxWidth:650, marginBottom:56 }}>Quatro etapas para colocar seu agente <em>no ar.</em></h2></R>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))", gap:24 }}>
            {[
              ["01","Mapeamento","Entendemos seus processos, perguntas frequentes e fluxo de vendas."],
              ["02","Treinamento","Configuramos a IA com tom de voz, conhecimento e regras do seu negócio."],
              ["03","Integração","Conectamos ao seu WhatsApp Business com a API oficial da Meta."],
              ["04","Otimização","Acompanhamos métricas, ajustamos respostas e melhoramos continuamente."]
            ].map(([n,t,d],i)=>(
              <R key={i} delay={i*0.1}>
                <div className="card" style={{ padding:"32px 28px" }}>
                  <div style={{ fontSize:42, fontWeight:700, color:"#F0F0F0", fontFamily:"'Sora'", marginBottom:16 }}>{n}</div>
                  <h3 style={{ fontSize:17, fontWeight:700, marginBottom:8 }}>{t}</h3>
                  <p style={{ color:"#64748B", fontSize:14, lineHeight:1.7 }}>{d}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. SEGMENTOS ═══ */}
      <section style={{ background:"#fff" }}>
        <div className="sec" style={{ textAlign:"center" }}>
          <R><div className="label">Segmentos</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:500, margin:"0 auto 48px" }}>Feito para <em>o seu</em> segmento.</h2></R>
          <R delay={0.12}>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
              {["🩺 Médicos","🦷 Dentistas","⚖️ Advogados","🏥 Clínicas","🏠 Imobiliárias","🔧 Engenheiros","📊 Consultores","🏢 Empresas"].map((s,i)=>(
                <div key={i} style={{ padding:"12px 24px", borderRadius:60, border:"1px solid #F0F0F0", background:"#fff", fontSize:14, fontWeight:500 }}>{s}</div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ═══ 7. DEMO ═══ */}
      <section>
        <div className="sec" style={{ textAlign:"center" }}>
          <R><div className="label">Demonstração</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:500, margin:"0 auto 48px" }}>Veja o agente <em>em ação.</em></h2></R>
          <R delay={0.12}>
            <div ref={cr} style={{ maxWidth:380, margin:"0 auto", borderRadius:20, overflow:"hidden", border:"1px solid #E2E8F0", boxShadow:"0 12px 40px rgba(0,0,0,0.06)" }}>
              <div style={{ background:"#075E54", padding:"14px 18px", display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:36, height:36, borderRadius:"50%", overflow:"hidden", border:"2px solid rgba(255,255,255,0.2)" }}>
                  <img src={HERO_IMG} alt="Bot" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
                <div>
                  <div style={{ color:"#fff", fontWeight:600, fontSize:14 }}>Agente ZapWize</div>
                  <div style={{ color:"rgba(255,255,255,0.6)", fontSize:11 }}>● online</div>
                </div>
              </div>
              <div style={{ background:"#ECE5DD", padding:14, minHeight:320, display:"flex", flexDirection:"column", gap:6 }}>
                {chatMsgs.map((m,i)=>(
                  <div key={i} style={{ display:"flex", flexDirection:"column", alignSelf:m.f==="u"?"flex-end":"flex-start", opacity:cv.includes(i)?1:0, transform:cv.includes(i)?"translateY(0)":"translateY(10px)", transition:"all 0.5s ease", maxWidth:"80%" }}>
                    <div className={`cb ${m.f==="b"?"cb-b":"cb-u"}`}>{m.t}<div style={{ fontSize:10, color:"#8696a0", textAlign:"right", marginTop:3 }}>{m.h} ✓✓</div></div>
                  </div>
                ))}
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ 8. PLANOS ═══ */}
      <section id="planos" style={{ background:"#fff" }}>
        <div className="sec">
          <R><div className="label">Investimento</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(32px,5vw,52px)", maxWidth:700, marginBottom:20 }}>Cada agente é criado para a <em>realidade</em> do seu negócio.</h2></R>
          <R delay={0.12}><p style={{ color:"#64748B", fontSize:17, maxWidth:620, lineHeight:1.7, marginBottom:16 }}>Antes de apresentar uma proposta, entendemos como seu atendimento funciona hoje, quais perguntas seus clientes mais fazem, quais tarefas podem ser automatizadas e quando a conversa deve ser transferida para uma pessoa.</p></R>
          <R delay={0.16}><p style={{ color:"#64748B", fontSize:17, maxWidth:620, lineHeight:1.7, marginBottom:48 }}>Com base nesse diagnóstico, estruturamos uma proposta compatível com o tamanho e a complexidade da sua operação.</p></R>
          <R delay={0.2}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:16, marginBottom:48 }}>
              {["Diagnóstico inicial","Configuração personalizada","Treinamento do agente","Implantação assistida","Suporte e ajustes"].map((item,i) => (
                <div key={i} className="card" style={{ padding:"20px 24px", textAlign:"center", background:"#F8FAFC", border:"1px solid #E2E8F0" }}>
                  <span style={{ color:"#0F172A", fontWeight:600, fontSize:15 }}>{item}</span>
                </div>
              ))}
            </div>
          </R>
          <R delay={0.24}>
            <a href={WA} target="_blank" rel="noopener" className="btn btn-p" style={{ padding:"16px 40px", fontSize:16 }}>Solicitar diagnóstico gratuito</a>
          </R>
        </div>
      </section>

      {/* ═══ 9. DEPOIMENTOS ═══ */}
      <section>
        <div className="sec" style={{ textAlign:"center" }}>
          <R><div className="label">Para quem</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:450, margin:"0 auto 48px" }}>Para quem o ZapWize é <em>ideal?</em></h2></R>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:20, textAlign:"left" }}>
            {[
              { n:"Corretores de Imóveis", r:"Dermatologista", t:"Antes eu perdia 40% dos agendamentos por falta de resposta. Agora a IA agenda tudo automaticamente." },
              { n:"Personal Trainers", r:"Advogado", t:"Meus clientes recebem retorno em segundos. A qualificação automática me poupa 3 horas por dia." },
              { n:"Clínicas e Consultórios", r:"CEO · Clínica Vida", t:"Implementamos o agente ZapWize e triplicamos nossos agendamentos em apenas 2 meses." }
            ].map((t,i)=>(
              <R key={i} delay={i*0.1}>
                <div className="card" style={{ padding:28 }}>
                  <div style={{ display:"flex", gap:2, marginBottom:14 }}>{[...Array(5)].map((_,si)=><Ic.Str key={si} />)}</div>
                  <p style={{ fontSize:15, lineHeight:1.7, marginBottom:20, color:"#334155" }}>"{t.t}"</p>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{ width:40, height:40, borderRadius:"50%", background:"#0F172A", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700, fontSize:14 }}>{t.n[0]}</div>
                    <div>
                      <div style={{ fontWeight:600, fontSize:14 }}>{t.n}</div>
                      <div style={{ color:"#94A3B8", fontSize:13 }}>{t.r}</div>
                    </div>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <section id="faq" style={{ background:"#fff" }}>
        <div className="sec" style={{ maxWidth:720 }}>
          <R><div className="label" style={{ textAlign:"center" }}>FAQ</div></R>
          <R delay={0.06}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", textAlign:"center", marginBottom:48 }}>Perguntas <em>frequentes.</em></h2></R>
          {[
            ["O que é um agente de IA para WhatsApp?","É um assistente virtual que conversa com seus clientes via WhatsApp de forma natural, respondendo dúvidas, qualificando leads, agendando reuniões e acompanhando oportunidades — tudo automaticamente, 24h."],
            ["Funciona com meu WhatsApp Business?","Sim! Integramos com o WhatsApp Business API oficial da Meta, garantindo total segurança, conformidade e continuidade no seu número comercial."],
            ["Posso treinar a IA com minhas informações?","Sim! O agente é 100% customizado — serviços, preços, políticas, FAQs, tom de voz e regras de atendimento específicas."],
            ["A IA agenda reuniões automaticamente?","Sim! Integramos com Google Calendar, Calendly e outras plataformas para agendar direto na conversa do WhatsApp."],
            ["Quanto tempo leva para implantar?","De 5 a 10 dias úteis, incluindo mapeamento, configuração, treinamento da IA e testes."]
          ].map(([q,a],i)=>(
            <R key={i} delay={i*0.04}>
              <div className="faq-i">
                <button className="faq-q" onClick={()=>setFq(fq===i?null:i)}>{q}<span style={{ transform:fq===i?"rotate(180deg)":"rotate(0)", transition:"transform 0.3s", display:"flex" }}><Ic.Chv /></span></button>
                <div className={`faq-a ${fq===i?"open":""}`}>{a}</div>
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ═══ 11. CTA FINAL ═══ */}
      <section style={{ background:"#0F172A" }}>
        <div className="sec" style={{ textAlign:"center" }}>
          <R>
            <img src={HERO_IMG} alt="ZapWize" style={{ width:160, height:"auto", borderRadius:16, marginBottom:32 }} />
          </R>
          <R delay={0.08}>
            <h2 className="hd" style={{ fontSize:"clamp(28px,5vw,48px)", color:"#fff", maxWidth:650, margin:"0 auto 16px" }}>
              Seu próximo cliente pode estar esperando <em>uma resposta</em> agora.
            </h2>
          </R>
          <R delay={0.16}>
            <p style={{ color:"rgba(255,255,255,0.45)", fontSize:17, maxWidth:480, margin:"0 auto 36px", lineHeight:1.7 }}>Automatize seu WhatsApp para atender, qualificar e vender — mesmo quando sua equipe não está disponível.</p>
          </R>
          <R delay={0.24}>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href={WA} target="_blank" rel="noopener" className="btn btn-o" style={{ padding:"16px 32px" }}>Testar no WhatsAppnstração <Ic.Arr /></a>
              <a href={WA} target="_blank" rel="noopener" className="btn" style={{ padding:"16px 32px", color:"rgba(255,255,255,0.6)", border:"1.5px solid rgba(255,255,255,0.15)", borderRadius:60 }}>Solicitar diagnóstico gratuito</a>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ 12. FOOTER ═══ */}
      <footer style={{ background:"#0F172A", color:"rgba(255,255,255,0.35)", padding:"0 24px 32px", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:40, padding:"48px 0 40px" }}>
            <div>
              <div style={{ fontFamily:"'Sora'", fontWeight:800, fontSize:20, letterSpacing:"-0.03em", marginBottom:14 }}><span style={{ color:"#E8891C" }}>Zap</span><span style={{ color:"#fff" }}>Wize</span></div>
              <p style={{ fontSize:13, lineHeight:1.7 }}>Automatize. Atenda. Venda. Escale.</p>
            </div>
            <div>
              <h4 style={{ color:"rgba(255,255,255,0.6)", fontWeight:600, fontSize:13, marginBottom:14 }}>Navegação</h4>
              {nav.map(n=><a key={n.l} href={n.h} style={{ display:"block", color:"rgba(255,255,255,0.35)", textDecoration:"none", fontSize:13, marginBottom:8, transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.35)"}>{n.l}</a>)}
            </div>
            <div>
              <h4 style={{ color:"rgba(255,255,255,0.6)", fontWeight:600, fontSize:13, marginBottom:14 }}>Contato</h4>
              <a href={WA} target="_blank" rel="noopener" style={{ display:"flex", alignItems:"center", gap:6, color:"rgba(255,255,255,0.35)", textDecoration:"none", fontSize:13, marginBottom:8 }}><Ic.WA /> WhatsApp</a>
              <span style={{ fontSize:13 }}>contato@zapwize.com.br</span>
            </div>
            <div>
              <h4 style={{ color:"rgba(255,255,255,0.6)", fontWeight:600, fontSize:13, marginBottom:14 }}>Legal</h4>
              <a href="#" style={{ display:"block", color:"rgba(255,255,255,0.35)", textDecoration:"none", fontSize:13, marginBottom:8 }}>Termos de Uso</a>
              <a href="#" style={{ display:"block", color:"rgba(255,255,255,0.35)", textDecoration:"none", fontSize:13 }}>Política de Privacidade</a>
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8, fontSize:12 }}>
            <span>© {new Date().getFullYear()} ZapWize. Todos os direitos reservados.</span>
            <span style={{ color:"rgba(255,255,255,0.2)" }}>Atendimento automatizado com IA para WhatsApp</span>
          </div>
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noopener" className="wa-f" aria-label="WhatsApp"><Ic.WA /></a>
    </div>
  );
}
