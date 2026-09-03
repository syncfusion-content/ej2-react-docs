import { useEffect, useMemo, useRef, useState } from 'react';
import { syncfusionCatalog, SyncfusionA2UIProvider } from '@syncfusion/ej2-react-a2ui';
import { TextBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MessageProcessor } from '@a2ui/web_core/v0_9';
import type { SurfaceModel } from '@a2ui/web_core/v0_9';
import type { ReactComponentImplementation } from '@a2ui/react/v0_9';
import './App.css';

type Role = 'user' | 'bot';

interface ChatMessage { id: string; role: Role; text: string; ts: number; }
interface Stage { id: 'search' | 'results' | 'booking'; step: number; icon: string; title: string; tagline: string; copy: string; highlights: string[]; starterPrompt: string; }

const STAGES: Stage[] = [
  { id: 'search', step: 1, icon: '🔎', title: 'Search Flights', tagline: 'Find the best route', copy: 'Trip type, dates, cabin & travellers.', highlights: ['Round trip / One way / Multi-city', 'Premium cabin filters'], starterPrompt: 'Show me the flight search form.' },
  { id: 'results', step: 2, icon: '🛫', title: 'Flight Results', tagline: 'Compare and choose', copy: 'Sortable fare grid with airline, time & price.', highlights: ['Sortable fare grid', 'One-click selection'], starterPrompt: 'Show me the flight results page.' },
  { id: 'booking', step: 3, icon: '🔒', title: 'Booking & Confirmation', tagline: 'Confirm & get ticket', copy: 'Review trip & confirm.', highlights: ['Passenger & itinerary summary', 'Confirmation message'], starterPrompt: 'Show me the booking and Confirmation page.' },
];
const AGENT_URL = (import.meta.env.VITE_AGENT_URL as string | undefined) ?? 'http://localhost:10006';

function summarizeAction(action: any): string {
  if (!action || typeof action !== 'object') return 'Submitted your selection.';
  const name: string = action.name ?? action.action ?? '';
  const ctx = action.context ?? {};
  const from = ctx.from ?? ctx.origin;
  const to = ctx.to ?? ctx.destination;
  const date = ctx.departureDate ?? ctx.date;
  const pax = ctx.adults != null ? `${ctx.adults} adult${Number(ctx.adults) === 1 ? '' : 's'}` + (ctx.children ? `, ${ctx.children} child${Number(ctx.children) === 1 ? '' : 'ren'}` : '') : '';
  switch (name) {
    case 'selectFlight':
      return `Your selected flight will be booked shortly.`
    case 'searchFlights':
      return `Searching for flights${from && to ? ` from ${from} to ${to}` : ''}${date ? ` on ${date}` : ''}${pax ? ` for ${pax}` : ''}.`;
    default:
      return `Triggered “${name || 'action'}”.`;
  }
}

function newId(prefix: string): string { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`; }

export default function App() {
  const [surface, setSurface] = useState<SurfaceModel<ReactComponentImplementation> | null>(null);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [view, setView] = useState<'welcome' | 'chat'>('welcome');
  const [activeStage, setActiveStage] = useState<Stage | null>(null);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const processor = useMemo(() => new MessageProcessor<ReactComponentImplementation>([syncfusionCatalog], (action) => { pushMessage('bot', summarizeAction(action)); void sendToAgent(JSON.stringify(action), true); }), [],);
  const pushMessage = (role: Role, text: string) => { setMessages((prev) => [...prev, { id: newId('m'), role, text, ts: Date.now() }]); };

  async function sendToAgent(text: string, silent: boolean) {
    if (!text.trim()) return;
    setIsSending(true);
    if (!silent) setPrompt('');
    try {
      const res = await fetch(AGENT_URL, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: newId('req'), method: 'message/send', params: { message: { kind: 'message', messageId: newId('msg'), role: 'user', parts: [{ text }], }, }, }), });
      const envelope = await res.json();
      const a2uiMessages = envelope?.result?.artifacts?.[0]?.parts?.[0]?.data?.a2uiEnvelope;
      if (a2uiMessages) {
        processor.processMessages(a2uiMessages); if (!silent) { pushMessage('bot', 'I have prepared a tailored result for you.',); }
      } else { if (!silent) { pushMessage('bot', "Hmm, I couldn't reach the booking service just now. Please try again in a moment.",); } }
    } catch (e: any) {
      console.error('[A2UI] fetch error', e); if (!silent) pushMessage('bot', `Something went wrong: ${e?.message ?? e}`);
    } finally { setIsSending(false); }
  }

  async function sendUserPrompt(text: string) { if (!text.trim()) return; pushMessage('user', text); await sendToAgent(text, false); }

  useEffect(() => {
    const created = processor.onSurfaceCreated(setSurface);
    const removed = processor.onSurfaceDeleted((id) => { setSurface((prev) => (prev && prev.id === id ? null : prev)); });
    return () => { created.unsubscribe(); removed.unsubscribe(); };
  }, [processor]);

  useEffect(() => { chatBodyRef.current?.scrollTo({ top: chatBodyRef.current.scrollHeight }); }, [messages, isSending]);

  const resetSurfaces = () => { for (const id of Array.from(processor.model.surfacesMap.keys())) { processor.model.deleteSurface(id); } };
  const openStage = (stage: Stage) => { setActiveStage(stage); setView('chat'); void sendUserPrompt(stage.starterPrompt); };
  const sendPrompt = (text: string) => { if (!text.trim()) return; if (view === 'welcome') setView('chat'); void sendUserPrompt(text); };
  const backHome = () => { resetSurfaces(); setActiveStage(null); setView('welcome'); setMessages([]); };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand"><div className="brand-mark" aria-hidden="true">✈</div><div className="brand-text"><div className="brand-name">SkyBook</div><div className="brand-sub">Enterprise Flight Booking</div></div></div>
        <nav className="app-nav">{view === 'chat' && (<button className="nav-cta" onClick={backHome} type="button"> ← Home</button>)}</nav>
      </header>
      <main className="app-body">
        <section className="chat-pane" aria-label="Flight booking assistant">
          {view === 'welcome' ? (
            <div className="chat-welcome">
              <div className="hero-badge"><span className="hero-dot" /> AI-powered travel concierge</div>
              <h1 className="hero-title">SkyBook — Enterprise Flight Booking<span className="hero-accent"> three steps to take off.</span></h1>
              <p className="hero-sub">Pick a stage to open the corresponding view on the right. You can keep chatting to refine the result, change dates, upgrade the cabin, or confirm the booking.</p>
              <div className="stage-grid">
                {STAGES.map((s) => (
                  <button key={s.id} className={`stage-card stage-card--${s.id}`} type="button" onClick={() => openStage(s)}>
                    <div className="stage-icon">{s.icon}</div>
                    <div className="stage-title">{s.title}</div>
                    <div className="stage-step">Step {s.step}</div>
                    <div className="stage-copy">{s.copy}</div>
                    <ul className="stage-highlights">{s.highlights.map((h) => (<li key={h}><span className="stage-bullet">✓</span> {h}</li>))}</ul>
                    <span className="stage-arrow" aria-hidden="true">Open →</span>
                  </button>
                ))}
              </div>

              <div className="welcome-cta">
                <TextBoxComponent value={prompt} change={(e: ChangeEventArgs) => setPrompt(String(e.value ?? ''))} placeholder='Try: "Find me a flight from New York to London next Friday"' floatLabelType="Auto" cssClass="welcome-input" />
                <ButtonComponent isPrimary content="Ask SkyBook" disabled={!prompt.trim()} onClick={() => sendPrompt(prompt)} />
              </div>
            </div>
          ) : (
            <div className="chat-room">
              <div className="chat-room-header">
                <div className="bot-avatar" aria-hidden="true">🤖</div>
                <div className="bot-meta"><div className="bot-name">SkyBook Assistant</div><div className="bot-status"><span className="status-dot" /> Online · typically replies in seconds</div></div>
                {activeStage && (<div className="chat-stage-pill" title={`Step ${activeStage.step}`}>{activeStage.icon} {activeStage.title}</div>)}
              </div>

              <div className="chat-body" ref={chatBodyRef}>
                {messages.length === 0 && (<div className="chat-empty">👋 Hi! Pick a stage from the home page, or just tell me what you need.</div>)}
                {messages.map((m) => (<div key={m.id} className={`chat-bubble chat-bubble--${m.role}`}>{m.role === 'bot' && (<div className="chat-avatar" aria-hidden="true">🤖</div>)}<div className="chat-text">{m.text}</div></div>))}
                {isSending && (<div className="chat-bubble chat-bubble--bot"><div className="chat-avatar" aria-hidden="true">🤖</div><div className="chat-text typing"><span /><span /><span /></div></div>)}
              </div>

              <form className="chat-input-row" onSubmit={(e) => { e.preventDefault(); if (prompt.trim() && !isSending) sendPrompt(prompt); }}>
                <TextBoxComponent value={prompt} change={(e: ChangeEventArgs) => setPrompt(String(e.value ?? ''))} placeholder="Message SkyBook…" floatLabelType="Never" cssClass="chat-input" />
                <ButtonComponent isPrimary content={isSending ? '…' : 'Send'} disabled={!prompt.trim() || isSending} onClick={() => sendPrompt(prompt)} />
              </form>
            </div>
          )}
        </section>

        <section className="surface-pane" aria-label="Booking result">
          {surface ? (<SyncfusionA2UIProvider key={surface.id} surface={surface} />) : (
            <div className="surface-placeholder">
              <div className="surface-placeholder-inner">
                <div className="surface-icon">🛫</div><h3>Pick a stage to begin</h3><p> Search flights, browse results, or jump straight to the booking & Confirmation view — the chosen A2UI surface will render here in real time.</p><ul className="surface-bullets"><li>Step 1 — Search Flights</li><li>Step 2 — Flight Results</li><li>Step 3 — Booking & Confirmation</li></ul>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
