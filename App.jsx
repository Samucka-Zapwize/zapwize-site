import { useState, useEffect, useRef } from "react";
import heroImg from "./zapwize-hero.jpg";

/* ═══════════════════════════════════════════════════
   ZAPWIZE v6 — Updated with all 11 improvements
   - Plans section with pricing
   - Differentiated CTAs
   - Agent IA terminology standardized
   - New FAQ questions
   - Footer with CNPJ + Terms/Privacy modals
   - OG tags (in index.html)
   - Performance: font-display swap
   - Simplified "Para quem" section
   - Nav: "Planos" instead of "Investimento"
═══════════════════════════════════════════════════ */

const WA_BASE = "https://wa.me/5511926902008?text=";
const WA = (msg) => `${WA_BASE}${encodeURIComponent(msg)}`;
const WA_DEFAULT = WA("Olá! Quero testar o atendimento automatizado da ZapWize.");
const WA_START = WA("Olá! Tenho interesse no plano Zap Start.");
const WA_PRO = WA("Olá! Tenho interesse no plano Zap Pro.");
const WA_ENTERPRISE = WA("Olá! Quero saber mais sobre o plano Zap Enterprise.");
const WA_FINAL = WA("Olá! Quero saber como a ZapWize pode ajudar meu negócio.");
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
  { f:"b", t:"Olá! 😊 Sou a agente de IA da clínica. Posso ajudar com agendamento agora mesmo.\n\nQual especialidade você precisa?", h:"14:32" },
  { f:"u", t:"Dermatologia", h:"14:33" },
  { f:"b", t:"Ótimo! Horários disponíveis:\n\n📅 Segunda 09:00\n📅 Terça 14:30\n📅 Quarta 10:00\n\nQual prefere?", h:"14:33" },
  { f:"u", t:"Terça às 14:30", h:"14:33" },
  { f:"b", t:"✅ Consulta agendada:\n\n🩺 Dermatologia\n📅 Terça-feira, 14:30\n📍 Clínica Saúde Total\n\nEnviarei lembrete 24h antes!", h:"14:34" },
];

const plans = [
  {
    name: "Zap Start", color: "#E8891C", price: "499", badge: null,
    desc: "Seu primeiro atendente com IA, disponível 24 horas por dia.",
    features: [
      "1 agente de IA para WhatsApp",
      "Atendimento automático 24/7",
      "Respostas treinadas com as informações do seu negócio",
      "Qualificação inicial de clientes",
      "Reengajamento automático por inatividade",
      "Transferência automática para humano",
      "Registro automático de contatos",
      "Painel com métricas em tempo real",
      "1 ajuste por mês",
    ],
    setup: "1.500", cta: "Começar com o Start", link: WA_START, hl: false,
  },
  {
    name: "Zap Pro", color: "#1A5BC4", price: "997", badge: "Mais escolhido",
    desc: "Atenda, qualifique e agende clientes no automático.",
    features: [
      "Tudo do Zap Start",
      "Qualificação estruturada de leads",
      "Agendamento automático com Google Calendar",
      "Sequência de reengajamento em até 3 etapas",
      "Resumo inteligente ao transferir para humano",
      "Campos personalizados nos contatos",
      "Regras de transferência condicionais",
      "Suporte prioritário",
      "2 ajustes por mês",
    ],
    setup: "1.500", cta: "Quero o Pro", link: WA_PRO, hl: true,
  },
  {
    name: "Zap Enterprise", color: "#0F172A", price: null, badge: null,
    desc: "Soluções sob medida para operações mais completas.",
    features: [
      "Múltiplos agentes especializados",
      "Canais adicionais integrados",
      "Regras avançadas de transferência",
      "Consultoria estratégica",
    ],
    setup: null, cta: "Falar sobre Enterprise", link: WA_ENTERPRISE, hl: false,
  },
];

const faqData = [
  ["O que é um agente de IA para WhatsApp?","É um agente de inteligência artificial que conversa com seus clientes via WhatsApp de forma natural, respondendo dúvidas, qualificando leads, agendando reuniões e acompanhando oportunidades — tudo automaticamente, 24h."],
  ["Qual a diferença entre um chatbot e um agente de IA?","Um chatbot segue roteiros fixos — se o cliente faz uma pergunta fora do script, ele trava. Um agente de IA entende o contexto da conversa, interpreta o que o cliente precisa, responde de forma natural e toma decisões como qualificar, agendar ou transferir para você. É a diferença entre um menu eletrônico e um atendente de verdade."],
  ["Funciona com meu WhatsApp Business?","Sim! Integramos com o WhatsApp Business API oficial da Meta, garantindo total segurança, conformidade e continuidade no seu número comercial."],
  ["Posso treinar a IA com minhas informações?","Sim! O agente é 100% customizado — serviços, preços, políticas, FAQs, tom de voz e regras de atendimento específicas."],
  ["A IA agenda reuniões automaticamente?","Sim! Integramos com Google Calendar, Calendly e outras plataformas para agendar direto na conversa do WhatsApp."],
  ["Quanto custa?","Temos planos a partir de R$ 499/mês, com implantação única de R$ 1.500. Não há fidelidade — você cancela quando quiser. Para operações maiores, oferecemos o plano Enterprise com valores sob consulta."],
  ["Vou perder meu número de WhatsApp?","Não. Conectamos ao seu número comercial existente usando a API oficial da Meta. Seu número, suas conversas e seus contatos continuam com você."],
  ["E se a IA não souber responder algo?","O agente é treinado para reconhecer quando não sabe a resposta e transferir a conversa automaticamente para você ou sua equipe. Nenhum cliente fica sem atendimento."],
  ["Quanto tempo leva para implantar?","De 3 a 10 dias úteis, dependendo do plano, incluindo mapeamento, configuração, treinamento da IA e testes."],
];

const termsText = `TERMOS DE USO — ZAPWIZE

Última atualização: maio de 2026

1. OBJETO
A ZapWize (CNPJ 64.503.050/0001-74) oferece serviços de implantação e manutenção de agentes de inteligência artificial para atendimento via WhatsApp e outros canais de comunicação.

2. SERVIÇOS
Os serviços incluem: configuração de agentes de IA, treinamento com informações do contratante, integração com WhatsApp Business API, manutenção mensal e suporte técnico, conforme o plano contratado.

3. OBRIGAÇÕES DO CONTRATANTE
O contratante é responsável por fornecer informações precisas para o treinamento do agente, manter ativa a conta do WhatsApp Business e utilizar o serviço em conformidade com a legislação vigente.

4. CANCELAMENTO
Não há fidelidade contratual. O contratante pode cancelar a qualquer momento. O cancelamento encerra o serviço ao final do período já pago. A taxa de implantação não é reembolsável.

5. LIMITAÇÃO DE RESPONSABILIDADE
A ZapWize não se responsabiliza por indisponibilidades de terceiros (Meta, WhatsApp, provedores de IA), por decisões comerciais tomadas com base nas interações do agente, nem por conteúdos inseridos pelo contratante no treinamento.

6. PROPRIEDADE INTELECTUAL
Os prompts, configurações e metodologias de implantação são propriedade da ZapWize. Os dados e informações do negócio fornecidos pelo contratante permanecem de sua propriedade.

7. FORO
Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer questões decorrentes destes termos.`;

const privacyText = `POLÍTICA DE PRIVACIDADE — ZAPWIZE

Última atualização: maio de 2026

1. DADOS COLETADOS
Coletamos: nome, telefone, e-mail e dados de conversas realizadas com os agentes de IA, fornecidos voluntariamente pelo usuário ou contratante.

2. FINALIDADE
Os dados são utilizados para: prestação do serviço contratado, treinamento e melhoria dos agentes de IA, comunicação com o contratante e cumprimento de obrigações legais.

3. COMPARTILHAMENTO
Os dados podem ser compartilhados com: Meta Platforms (WhatsApp Business API), provedores de inteligência artificial (para processamento de linguagem natural) e prestadores de serviço essenciais à operação. Não comercializamos dados pessoais.

4. ARMAZENAMENTO E SEGURANÇA
Os dados são armazenados em servidores seguros com criptografia. Mantemos os dados pelo tempo necessário à prestação do serviço ou conforme exigido por lei.

5. DIREITOS DO TITULAR (LGPD)
Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a: acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar a exclusão de dados pessoais, revogar o consentimento e solicitar a portabilidade dos dados.

6. CONTATO
Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail contato@zapwize.com.br.

7. COOKIES
O site zapwize.com.br pode utilizar cookies para melhorar a experiência de navegação. O usuário pode configurar seu navegador para recusar cookies.`;

export default function ZapWize() {
  const [mob, setMob] = useState(false);
  const [fq, setFq] = useState(null);
  const [cv, setCv] = useState([]);
  const [cs, setCs] = useState(false);
  const [cr, ci] = useInView(0.25);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (ci && !cs) { setCs(true); chatMsgs.forEach((_, i) => setTimeout(() => setCv(p => [...p, i]), i * 1100)); }
  }, [ci, cs]);

  const nav = [
    { l:"Solução", h:"#solucao" }, { l:"Benefícios", h:"#beneficios" },
    { l:"Processo", h:"#processo" }, { l:"Planos", h:"#planos" }, { l:"FAQ", h:"#faq" },
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

.plan-hl{border:2px solid #1A5BC4!important;position:relative}
.plan-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#1A5BC4;color:#fff;padding:4px 16px;border-radius:40px;font-size:11px;font-weight:700;white-space:nowrap;letter-spacing:0.02em}

.mob-m{position:fixed;inset:0;background:rgba(250,251,253,0.98);backdrop-filter:blur(20px);z-index:999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px}
.mob-m a{font-size:20px;font-weight:600;color:#0F172A;text-decoration:none;font-family:'Sora',sans-serif}
@media(max-width:768px){.dsk{display:none!important}}
@media(min-width:769px){.mob{display:none!important}}
.hero-img{width:100%;max-width:520px;height:auto;border-radius:20px}
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr!important;text-align:center!important}
  .hero-img{max-width:360px;margin:0 auto}
  .hero-btns{justify-content:center!important}
  .plans-grid{grid-template-columns:1fr!important}
}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:24px}
.modal-box{background:#fff;border-radius:16px;max-width:680px;width:100%;max-height:80vh;overflow-y:auto;padding:40px;position:relative}
.modal-box h2{font-family:'Sora',sans-serif;font-size:20px;margin-bottom:20px}
.modal-box pre{white-space:pre-wrap;font-family:'Manrope',sans-serif;font-size:14px;line-height:1.8;color:#475569}
.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;font-size:24px;color:#94A3B8}
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(250,251,253,0.9)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <a href="#" style={{ textDecoration:"none", display:"flex", alignItems:"center" }}>
            <span style={{ fontFamily:"'Sora'", fontWeight:800, fontSize:22, letterSpacing:"-0.03em" }}><span style={{ color:"#E8891C" }}>Zap</span><span style={{ color:"#1A5BC4" }}>Wize</span></span>
          </a>
          <div className="dsk" style={{ display:"flex", gap:32, alignItems:"center" }}>
            {nav.map(n => <a key={n.h} href={n.h} style={{ textDecoration:"none", color:"#64748B", fontSize:14, fontWeight:500, transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#0F172A"} onMouseLeave={e=>e.target.style.color="#64748B"}>{n.l}</a>)}
            <a href={WA_DEFAULT} target="_blank" rel="noopener" className="btn btn-p" style={{ padding:"10px 22px", fontSize:13 }}>Testar no WhatsApp</a>
          </div>
          <button className="mob" onClick={()=>setMob(true)} style={{ background:"none", border:"none", cursor:"pointer" }}><Ic.Mn /></button>
        </div>
      </nav>

      {mob && <div className="mob-m">
        <button onClick={()=>setMob(false)} style={{ position:"absolute", top:20, right:24, background:"none", border:"none", cursor:"pointer" }}><Ic.X /></button>
        {nav.map(n => <a key={n.h} href={n.h} onClick={()=>setMob(false)}>{n.l}</a>)}
        <a href={WA_DEFAULT} target="_blank" rel="noopener" className="btn btn-o" style={{ marginTop:8 }}>Testar no WhatsApp</a>
      </div>}

      {/* ═══ 1. HERO ═══ */}
      <section id="solucao" style={{ paddingTop:100 }}>
        <div className="sec hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>
          <div>
            <R><p className="label">AGENTES DE IA PARA WHATSAPP</p></R>
            <R delay={0.06}><h1 className="hd" style={{ fontSize:"clamp(36px,5.5vw,56px)", marginBottom:20 }}>Seu WhatsApp <em>vendendo</em> 24 horas por dia.</h1></R>
            <R delay={0.12}><p style={{ color:"#64748B", fontSize:17, lineHeight:1.7, maxWidth:480, marginBottom:32 }}>Implantamos agentes de IA que respondem seus clientes em menos de 3 segundos, qualificam leads e agendam reuniões automaticamente — 24 horas por dia, 7 dias por semana.</p></R>
            <R delay={0.18}>
              <div className="hero-btns" style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <a href={WA_DEFAULT} target="_blank" rel="noopener" className="btn btn-o">Experimentar atendimento automatizado <Ic.Arr /></a>
                <a href={WA_FINAL} target="_blank" rel="noopener" className="btn btn-g">Falar no WhatsApp <Ic.WA /></a>
              </div>
            </R>
            <R delay={0.24}>
              <div style={{ display:"flex", gap:32, marginTop:40, flexWrap:"wrap" }}>
                {[["24/7","Sempre disponível"],["<3s","Tempo de resposta"],["100%","Personalizado"],["Humano","Quando necessário"]].map(([v,l])=>(
                  <div key={v} style={{ textAlign:"center" }}>
                    <div style={{ fontFamily:"'Sora'", fontWeight:800, fontSize:22, color:"#E8891C" }}>{v}</div>
                    <div style={{ fontSize:12, color:"#94A3B8", marginTop:2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </R>
          </div>
          <R delay={0.1} d="right"><img src={HERO_IMG} alt="ZapWize" className="hero-img" loading="eager" /></R>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div style={{ overflow:"hidden", background:"#0F172A", padding:"14px 0" }}>
        <div style={{ display:"flex", animation:"marquee 20s linear infinite", width:"max-content" }}>
          {[...Array(8)].map((_,i)=><span key={i} style={{ color:"rgba(255,255,255,0.5)", fontSize:13, fontWeight:600, letterSpacing:"0.05em", whiteSpace:"nowrap", marginRight:24 }}>Automatize · Atenda · Qualifique · Venda · Organize <span style={{ color:"#E8891C" }}>✦</span></span>)}
        </div>
      </div>

      {/* ═══ 2. PROBLEMA ═══ */}
      <section>
        <div className="sec">
          <R><p className="label">O PROBLEMA</p></R>
          <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:600, marginBottom:48 }}>Quantas vendas você perde por <em>não responder</em> a tempo?</h2></R>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:16 }}>
            {[
              ["⏱","Resposta lenta","Clientes esperam e desistem antes de você ver a mensagem."],
              ["📭","Leads esquecidos","Mensagens acumulam e oportunidades somem sem retorno."],
              ["🌙","Fora do horário","Quando sua equipe descansa, clientes procuram o concorrente."],
              ["😰","Equipe sobrecarregada","Seu time responde perguntas repetitivas ao invés de vender."],
              ["🎯","Sem padronização","Cada atendente responde diferente. Sua marca perde consistência."]
            ].map(([ic,t,d],i)=>(
              <R key={i} delay={i*0.06}>
                <div className="card" style={{ padding:28 }}>
                  <div style={{ fontSize:28, marginBottom:12 }}>{ic}</div>
                  <h3 style={{ fontFamily:"'Sora'", fontSize:16, fontWeight:700, marginBottom:8 }}>{t}</h3>
                  <p style={{ color:"#64748B", fontSize:14, lineHeight:1.6 }}>{d}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. SOLUÇÃO ═══ */}
      <section style={{ background:"#fff" }}>
        <div className="sec" style={{ textAlign:"center" }}>
          <R><p className="label">A SOLUÇÃO</p></R>
          <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:650, margin:"0 auto 16px" }}>Um agente de IA treinado para <em>atender e qualificar</em> por você.</h2></R>
          <R delay={0.08}><p style={{ color:"#64748B", fontSize:17, maxWidth:600, margin:"0 auto 48px", lineHeight:1.7 }}>Diferente de chatbots com respostas prontas, um agente de IA entende o contexto, conversa de forma natural e toma decisões durante o atendimento. A equipe ZapWize configura tudo sob medida para o seu negócio — para que você foque em fechar negócios.</p></R>
          <R delay={0.12}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, flexWrap:"wrap", fontSize:14, fontWeight:600, color:"#0F172A" }}>
              {["Mensagem recebida","→","IA responde","→","Qualifica","→","Agenda","→","Venda fechada"].map((s,i)=>(
                <span key={i} style={{ color: s==="→" ? "#E8891C" : "#0F172A", opacity: s==="→" ? 0.5 : 1 }}>{s}</span>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ═══ 4. BENEFÍCIOS ═══ */}
      <section id="beneficios">
        <div className="sec">
          <R><p className="label">BENEFÍCIOS</p></R>
          <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:500, marginBottom:48 }}>Um agente treinado para o <em>seu</em> atendimento</h2></R>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:16 }}>
            {[
              ["🕐","Atendimento 24/7","Nunca dorme, nunca tira férias, nunca perde a paciência."],
              ["⚡","Respostas em <3s","Tempo de resposta abaixo de 3 segundos para qualquer mensagem."],
              ["🎯","Qualificação automática","Filtra leads quentes e frios antes de chegar ao comercial."],
              ["📅","Agendamento inteligente","Agenda reuniões e consultas direto no seu calendário."],
              ["🔄","Follow-up automatizado","Reengaja leads inativos com mensagens personalizadas."],
              ["🤝","Transferência para humano","Quando a conversa precisa de uma pessoa, o agente direciona automaticamente."],
              ["💰","Menos custo operacional","Reduz trabalho repetitivo sem precisar contratar mais gente."],
              ["📈","Mais organização","Atendimento estruturado e profissional, sem depender da memória."]
            ].map(([ic,t,d],i)=>(
              <R key={i} delay={i*0.04}>
                <div className="card" style={{ padding:28 }}>
                  <div style={{ fontSize:24, marginBottom:12 }}>{ic}</div>
                  <h3 style={{ fontFamily:"'Sora'", fontSize:15, fontWeight:700, marginBottom:6 }}>{t}</h3>
                  <p style={{ color:"#64748B", fontSize:14, lineHeight:1.6 }}>{d}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. PROCESSO ═══ */}
      <section id="processo" style={{ background:"#fff" }}>
        <div className="sec">
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <R><p className="label">PROCESSO</p></R>
            <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)" }}>Quatro etapas para colocar seu agente <em>no ar</em>.</h2></R>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:24 }}>
            {[
              ["01","Mapeamento","Entendemos seus processos, perguntas frequentes e fluxo de vendas."],
              ["02","Treinamento","Configuramos a IA com tom de voz, conhecimento e regras do seu negócio."],
              ["03","Integração","Conectamos ao seu WhatsApp Business com a API oficial da Meta."],
              ["04","Otimização","Acompanhamos métricas, ajustamos respostas e melhoramos continuamente."]
            ].map(([n,t,d],i)=>(
              <R key={i} delay={i*0.08}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:"'Sora'", fontSize:48, fontWeight:800, color:"#E8891C", opacity:0.15, marginBottom:8 }}>{n}</div>
                  <h3 style={{ fontFamily:"'Sora'", fontSize:18, fontWeight:700, marginBottom:8 }}>{t}</h3>
                  <p style={{ color:"#64748B", fontSize:14, lineHeight:1.6 }}>{d}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. DEMONSTRAÇÃO ═══ */}
      <section>
        <div className="sec" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>
          <div>
            <R><p className="label">DEMONSTRAÇÃO</p></R>
            <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,40px)", marginBottom:16 }}>Veja o agente <em>em ação</em>.</h2></R>
          </div>
          <R delay={0.08}>
            <div ref={cr} style={{ background:"#ECE5DD", borderRadius:20, padding:16, maxWidth:380, marginLeft:"auto" }}>
              <div style={{ background:"#075E54", borderRadius:"14px 14px 0 0", padding:"12px 16px", display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:36, height:36, borderRadius:"50%", background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"#fff" }}>ZW</div>
                <div><div style={{ color:"#fff", fontSize:14, fontWeight:600 }}>Agente ZapWize</div><div style={{ color:"rgba(255,255,255,0.6)", fontSize:11 }}>● online</div></div>
              </div>
              <div style={{ padding:"16px 8px", display:"flex", flexDirection:"column", gap:8, minHeight:280 }}>
                {cv.map(i => {
                  const m = chatMsgs[i];
                  return <div key={i} className={`cb ${m.f==="b"?"cb-b":"cb-u"}`}>
                    {m.t}
                    <div style={{ fontSize:10, color:"#999", textAlign:"right", marginTop:4 }}>{m.h} ✓✓</div>
                  </div>;
                })}
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ 7. PLANOS ═══ */}
      <section id="planos" style={{ background:"#fff" }}>
        <div className="sec">
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <R><p className="label">PLANOS</p></R>
            <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:600, margin:"0 auto 16px" }}>Escolha o plano ideal para o <em>seu negócio</em>.</h2></R>
            <R delay={0.08}><p style={{ color:"#64748B", fontSize:16, maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>Todos os planos incluem implantação assistida pela equipe ZapWize. Sem fidelidade — cancele quando quiser.</p></R>
          </div>
          <div className="plans-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20, alignItems:"start" }}>
            {plans.map((p,i)=>(
              <R key={i} delay={i*0.08}>
                <div className={`card ${p.hl?"plan-hl":""}`} style={{ padding:32, display:"flex", flexDirection:"column", height:"100%" }}>
                  {p.badge && <div className="plan-badge">{p.badge}</div>}
                  <h3 style={{ fontFamily:"'Sora'", fontSize:20, fontWeight:700, color:p.color, marginBottom:4 }}>{p.name}</h3>
                  <p style={{ color:"#64748B", fontSize:14, marginBottom:20, lineHeight:1.5 }}>{p.desc}</p>
                  {p.price ? (
                    <div style={{ marginBottom:20 }}>
                      <span style={{ fontSize:14, color:"#64748B" }}>R$ </span>
                      <span style={{ fontFamily:"'Sora'", fontSize:40, fontWeight:800, color:"#0F172A" }}>{p.price}</span>
                      <span style={{ fontSize:14, color:"#64748B" }}>/mês</span>
                    </div>
                  ) : (
                    <div style={{ fontFamily:"'Sora'", fontSize:20, fontWeight:700, color:"#0F172A", marginBottom:20 }}>Consulte valores</div>
                  )}
                  <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24, flex:1 }}>
                    {p.features.map((f,j)=>(
                      <div key={j} style={{ display:"flex", gap:8, alignItems:"flex-start", fontSize:14, color:"#475569", lineHeight:1.5 }}>
                        <span style={{ marginTop:2, flexShrink:0 }}><Ic.Chk /></span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  {p.setup && <p style={{ fontSize:13, color:"#94A3B8", marginBottom:16 }}>Implantação: R$ {p.setup}</p>}
                  {!p.setup && p.price===null && <p style={{ fontSize:13, color:"#94A3B8", marginBottom:16 }}>Implantação: sob consulta</p>}
                  <a href={p.link} target="_blank" rel="noopener" className={`btn ${p.hl?"btn-o":"btn-p"}`} style={{ width:"100%", justifyContent:"center" }}>{p.cta} <Ic.Arr /></a>
                </div>
              </R>
            ))}
          </div>
          <R delay={0.3}>
            <p style={{ textAlign:"center", marginTop:32, color:"#64748B", fontSize:14 }}>Quer adicionar Instagram, Web Chat, Telegram ou outro canal? <strong style={{ color:"#0F172A" }}>R$ 197/mês por canal adicional.</strong></p>
          </R>
        </div>
      </section>

      {/* ═══ 8. PARA QUEM ═══ */}
      <section>
        <div className="sec">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <R><p className="label">PARA QUEM</p></R>
            <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,44px)", maxWidth:600, margin:"0 auto 16px" }}>Para quem o ZapWize é <em>ideal</em>?</h2></R>
            <R delay={0.08}><p style={{ color:"#64748B", fontSize:16, maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>Profissionais e pequenos negócios que dependem do WhatsApp para atender e vender, mas não conseguem responder tudo a tempo.</p></R>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:16 }}>
            {[
              ["🩺","Clínicas e Consultórios","Agende consultas, confirme horários e organize o fluxo de pacientes."],
              ["🏠","Corretores de Imóveis","Responda interessados, filtre compradores e envie informações automaticamente."],
              ["🔧","Prestadores de Serviço","Receba pedidos, explique serviços e responda mesmo durante atendimentos."],
              ["🏋️","Personal Trainers","Atenda alunos interessados, explique planos e organize avaliações."],
              ["🏪","Pequenos Negócios Locais","Automatize perguntas repetitivas, horários e primeiros contatos."],
              ["🏢","Síndicos e Administradoras","Organize solicitações, dúvidas e comunicados sem respostas manuais."]
            ].map(([ic,t,d],i)=>(
              <R key={i} delay={i*0.04}>
                <div className="card" style={{ padding:28, display:"flex", gap:16, alignItems:"flex-start" }}>
                  <div style={{ fontSize:28, flexShrink:0 }}>{ic}</div>
                  <div>
                    <h3 style={{ fontFamily:"'Sora'", fontSize:16, fontWeight:700, marginBottom:4 }}>{t}</h3>
                    <p style={{ color:"#64748B", fontSize:14, lineHeight:1.6 }}>{d}</p>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. FAQ ═══ */}
      <section id="faq" style={{ background:"#fff" }}>
        <div className="sec" style={{ maxWidth:700 }}>
          <R><p className="label">FAQ</p></R>
          <R delay={0.04}><h2 className="hd" style={{ fontSize:"clamp(28px,4vw,40px)", marginBottom:40 }}>Perguntas <em>frequentes</em>.</h2></R>
          {faqData.map(([q,a],i)=>(
            <R key={i} delay={i*0.04}>
              <div className="faq-i">
                <button className="faq-q" onClick={()=>setFq(fq===i?null:i)}>{q}<span style={{ transform:fq===i?"rotate(180deg)":"rotate(0)", transition:"transform 0.3s", display:"flex" }}><Ic.Chv /></span></button>
                <div className={`faq-a ${fq===i?"open":""}`}>{a}</div>
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ═══ 10. CTA FINAL ═══ */}
      <section style={{ background:"#0F172A" }}>
        <div className="sec" style={{ textAlign:"center" }}>
          <R><img src={HERO_IMG} alt="ZapWize" style={{ width:160, height:"auto", borderRadius:16, marginBottom:32 }} loading="lazy" /></R>
          <R delay={0.08}><h2 className="hd" style={{ fontSize:"clamp(28px,5vw,48px)", color:"#fff", maxWidth:650, margin:"0 auto 16px" }}>Seu próximo cliente pode estar esperando <em>uma resposta</em> agora.</h2></R>
          <R delay={0.16}><p style={{ color:"rgba(255,255,255,0.45)", fontSize:17, maxWidth:480, margin:"0 auto 36px", lineHeight:1.7 }}>Automatize seu WhatsApp para atender, qualificar e vender — mesmo quando sua equipe não está disponível.</p></R>
          <R delay={0.24}>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href={WA_FINAL} target="_blank" rel="noopener" className="btn btn-o" style={{ padding:"16px 32px" }}>Testar no WhatsApp <Ic.Arr /></a>
              <a href="#planos" className="btn" style={{ padding:"16px 32px", color:"rgba(255,255,255,0.6)", border:"1.5px solid rgba(255,255,255,0.15)", borderRadius:60 }}>Ver planos e preços</a>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ 11. FOOTER ═══ */}
      <footer style={{ background:"#0F172A", color:"rgba(255,255,255,0.35)", padding:"0 24px 32px", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:40, padding:"48px 0 40px" }}>
            <div>
              <div style={{ fontFamily:"'Sora'", fontWeight:800, fontSize:20, letterSpacing:"-0.03em", marginBottom:14 }}><span style={{ color:"#E8891C" }}>Zap</span><span style={{ color:"#fff" }}>Wize</span></div>
              <p style={{ fontSize:13, lineHeight:1.7 }}>Automatize. Atenda. Qualifique. Venda.</p>
            </div>
            <div>
              <h4 style={{ color:"rgba(255,255,255,0.6)", fontWeight:600, fontSize:13, marginBottom:14 }}>Navegação</h4>
              {nav.map(n=><a key={n.l} href={n.h} style={{ display:"block", color:"rgba(255,255,255,0.35)", textDecoration:"none", fontSize:13, marginBottom:8, transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.35)"}>{n.l}</a>)}
            </div>
            <div>
              <h4 style={{ color:"rgba(255,255,255,0.6)", fontWeight:600, fontSize:13, marginBottom:14 }}>Contato</h4>
              <a href={WA_FINAL} target="_blank" rel="noopener" style={{ display:"flex", alignItems:"center", gap:6, color:"rgba(255,255,255,0.35)", textDecoration:"none", fontSize:13, marginBottom:8 }}><Ic.WA /> WhatsApp</a>
              <span style={{ fontSize:13 }}>contato@zapwize.com.br</span>
            </div>
            <div>
              <h4 style={{ color:"rgba(255,255,255,0.6)", fontWeight:600, fontSize:13, marginBottom:14 }}>Legal</h4>
              <button onClick={()=>setModal("terms")} style={{ display:"block", color:"rgba(255,255,255,0.35)", background:"none", border:"none", fontSize:13, marginBottom:8, cursor:"pointer", padding:0, transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.35)"}>Termos de Uso</button>
              <button onClick={()=>setModal("privacy")} style={{ display:"block", color:"rgba(255,255,255,0.35)", background:"none", border:"none", fontSize:13, cursor:"pointer", padding:0, transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.35)"}>Política de Privacidade</button>
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8, fontSize:12 }}>
            <span>© {new Date().getFullYear()} ZapWize. Todos os direitos reservados. CNPJ: 64.503.050/0001-74</span>
            <span style={{ color:"rgba(255,255,255,0.2)" }}>Agentes de IA para WhatsApp</span>
          </div>
        </div>
      </footer>

      {/* ═══ MODALS ═══ */}
      {modal && (
        <div className="modal-overlay" onClick={()=>setModal(null)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            <button className="modal-close" onClick={()=>setModal(null)}>✕</button>
            <h2>{modal==="terms" ? "Termos de Uso" : "Política de Privacidade"}</h2>
            <pre>{modal==="terms" ? termsText : privacyText}</pre>
          </div>
        </div>
      )}

      <a href={WA_DEFAULT} target="_blank" rel="noopener" className="wa-f" aria-label="WhatsApp"><Ic.WA /></a>
    </div>
  );
}
