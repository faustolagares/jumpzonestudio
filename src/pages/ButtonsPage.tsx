import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, ArrowLeft, Zap, Check, X,
  Loader2, AlertTriangle, ExternalLink, Copy, CheckCheck
} from 'lucide-react';
import { JumpButton } from '../components/JumpButton';

// ─── Clip-path shape tokens ──────────────────────────────────────────────────
const SHAPES = {
  apexAsym:    'polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)',
  microChamfer:'polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)',
  sharp:       'none',
  pill:        'none',
};

// ─── Token reference rows ─────────────────────────────────────────────────────
const COLOR_TOKENS = [
  { name: '--color-energy-green', value: '#A8FF00', role: 'Primary action, focus rings, accents' },
  { name: '--color-lime-accent',  value: '#C6FF33', role: 'Hover state of primary buttons' },
  { name: '--color-deep-black',   value: '#0A0A0A', role: 'Button text on primary bg' },
  { name: '--color-card-black',   value: '#1A1A1A', role: 'Secondary button inner background' },
  { name: '--color-dark-charcoal',value: '#121212', role: 'Secondary hover fill' },
  { name: '--color-cool-gray',    value: '#888888', role: 'Ghost / disabled text' },
  { name: '--color-steel-gray',   value: '#CCCCCC', role: 'Secondary label default' },
];

// ─── Swatch ───────────────────────────────────────────────────────────────────
function Swatch({ token }: { token: (typeof COLOR_TOKENS)[0]; key?: React.Key }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(token.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="flex items-center gap-4 py-3 border-b border-white/[0.05]">
      <div
        className="w-10 h-10 shrink-0 rounded-sm border border-white/10"
        style={{ backgroundColor: token.value }}
      />
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[11px] text-energy-green truncate">{token.name}</p>
        <p className="text-[11px] text-steel-gray mt-0.5">{token.role}</p>
      </div>
      <button
        onClick={copy}
        className="shrink-0 font-mono text-[10px] text-cool-gray hover:text-white transition-colors flex items-center gap-1"
      >
        {copied ? <CheckCheck className="w-3 h-3 text-energy-green" /> : <Copy className="w-3 h-3" />}
        {token.value}
      </button>
    </div>
  );
}

// ─── Section heading ─────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[10px] tracking-[0.3em] text-energy-green uppercase mb-6 flex items-center gap-3">
      <span className="block w-6 h-px bg-energy-green/40" />
      {children}
    </h2>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase italic -skew-x-3 tracking-tight mb-1">
      {children}
    </h3>
  );
}

// ─── Button card wrapper ──────────────────────────────────────────────────────
function BtnCard({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center">{children}</div>
      <div>
        <p className="font-mono text-[11px] text-energy-green">{label}</p>
        {desc && <p className="text-[11px] text-cool-gray mt-0.5 leading-relaxed">{desc}</p>}
      </div>
    </div>
  );
}

// ─── Raw chamfered button primitives ─────────────────────────────────────────
function RawBtn({
  children, clipPath = SHAPES.apexAsym, className = '', style = {},
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { clipPath?: string }) {
  return (
    <button
      className={`relative group flex items-center justify-center gap-2 font-sans font-black italic uppercase text-xs tracking-wider px-7 py-4 select-none transition-transform duration-[120ms] ease-out active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      style={{ clipPath, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Ghost button ─────────────────────────────────────────────────────────────
function GhostBtn({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="group relative flex items-center gap-2 font-sans font-black italic uppercase text-xs tracking-wider px-7 py-4 text-steel-gray hover:text-white border border-white/15 hover:border-energy-green/50 transition-[color,border-color] duration-150 select-none active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
      style={{ clipPath: SHAPES.apexAsym }}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Link-style button ────────────────────────────────────────────────────────
function TextBtn({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="group inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-steel-gray hover:text-white transition-colors duration-150 select-none"
      {...props}
    >
      {children}
      <ArrowRight className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
    </button>
  );
}

// ─── Danger button ────────────────────────────────────────────────────────────
function DangerBtn({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="group relative flex items-center gap-2 font-sans font-black italic uppercase text-xs tracking-wider px-7 py-4 text-white bg-red-600/90 hover:bg-red-500 active:bg-red-700 transition-colors duration-150 select-none active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
      style={{ clipPath: SHAPES.apexAsym }}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Success button ───────────────────────────────────────────────────────────
function SuccessBtn({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="group relative flex items-center gap-2 font-sans font-black italic uppercase text-xs tracking-wider px-7 py-4 text-deep-black bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 transition-colors duration-150 select-none active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
      style={{ clipPath: SHAPES.apexAsym }}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Loading button ───────────────────────────────────────────────────────────
function LoadingBtn({ loading, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      disabled={loading}
      className="group relative flex items-center justify-center gap-2 font-sans font-black italic uppercase text-xs tracking-wider px-7 py-4 bg-energy-green text-deep-black hover:bg-[#b5ff1a] active:bg-[#92df00] transition-colors duration-150 select-none active:scale-[0.97] disabled:cursor-wait min-w-[160px]"
      style={{ clipPath: SHAPES.apexAsym }}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>LOADING…</span>
        </>
      ) : children}
    </button>
  );
}

// ─── Icon-only button ─────────────────────────────────────────────────────────
function IconBtn({ icon, variant = 'dark', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon: React.ReactNode; variant?: 'dark' | 'green' }) {
  const base = 'group w-10 h-10 flex items-center justify-center transition-colors duration-150 select-none active:scale-[0.97]';
  const styles = variant === 'green'
    ? 'bg-energy-green text-deep-black hover:bg-[#b5ff1a]'
    : 'bg-white/[0.06] text-steel-gray hover:bg-white/10 hover:text-white border border-white/[0.08]';
  return (
    <button className={`${base} ${styles}`} style={{ clipPath: SHAPES.microChamfer }} {...props}>
      {icon}
    </button>
  );
}

// ─── On-light variant ─────────────────────────────────────────────────────────
function LightPrimaryBtn({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="group relative flex items-center gap-2 font-sans font-black italic uppercase text-xs tracking-wider px-7 py-4 bg-deep-black text-white hover:bg-[#111] active:bg-black transition-colors duration-150 select-none active:scale-[0.97]"
      style={{ clipPath: SHAPES.apexAsym }}
      {...props}
    >
      {children}
      <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
    </button>
  );
}

function LightSecondaryBtn({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="group relative flex items-center gap-2 font-sans font-black italic uppercase text-xs tracking-wider px-7 py-4 bg-transparent text-deep-black border border-black/30 hover:border-black hover:bg-black/5 transition-[border-color,background-color] duration-150 select-none active:scale-[0.97]"
      style={{ clipPath: SHAPES.apexAsym }}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Size variants ────────────────────────────────────────────────────────────
function SizedBtn({ size, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { size: 'sm' | 'md' | 'lg' | 'xl' }) {
  const sizes = {
    sm:  'text-[10px] px-3 py-2 min-w-[100px]',
    md:  'text-xs px-5 py-3 min-w-[140px]',
    lg:  'text-sm px-6 py-4 min-w-[180px]',
    xl:  'text-base px-8 py-5 min-w-[220px]',
  };
  return (
    <button
      className={`group relative flex items-center justify-center gap-2 font-sans font-black italic uppercase tracking-wider bg-energy-green text-deep-black hover:bg-[#b5ff1a] active:bg-[#92df00] transition-colors duration-150 select-none active:scale-[0.97] ${sizes[size]}`}
      style={{ clipPath: SHAPES.apexAsym }}
      {...props}
    >
      {props.children ?? size.toUpperCase()}
    </button>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ButtonsPage() {
  const [loading, setLoading] = useState(false);

  const triggerLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased">

      {/* Top bar */}
      <div className="border-b border-white/[0.05] bg-[#080808] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-1.5 text-cool-gray hover:text-white transition-colors duration-150 text-xs font-mono uppercase tracking-wider">
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </Link>
            <span className="text-white/10">/</span>
            <span className="font-mono text-[11px] text-energy-green tracking-wider uppercase">Design System / Buttons</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-energy-green animate-pulse" />
            <span className="font-mono text-[10px] text-cool-gray uppercase tracking-widest">Jump Zone Studio</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[1600px] mx-auto px-6 pt-16 pb-12 border-b border-white/[0.05]">
        <p className="font-mono text-[10px] tracking-[0.3em] text-energy-green uppercase mb-4">/// DESIGN SYSTEM ///</p>
        <h1 className="font-display font-black text-6xl sm:text-8xl text-white uppercase italic -skew-x-6 leading-[0.88] tracking-tight mb-6">
          BUTTON<br />
          <span className="text-energy-green">SYSTEM.</span>
        </h1>
        <p className="text-sm text-steel-gray font-sans max-w-xl leading-relaxed">
          All interactive button variants for the Jump Zone Studio design system.
          Built on the brand shape language (Apex Asymmetrical clip-path),
          color tokens, and typographic scale.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-16 space-y-24">

        {/* ── 1. COLOR TOKENS ──────────────────────────────────────────────── */}
        <section>
          <SectionLabel>01 — Color Tokens</SectionLabel>
          <SectionTitle>Design Tokens</SectionTitle>
          <p className="text-sm text-cool-gray mb-8 max-w-xl">Defined in <code className="text-energy-green font-mono text-xs">src/index.css</code> under <code className="text-energy-green font-mono text-xs">@theme</code>.</p>
          <div className="max-w-2xl">
            {COLOR_TOKENS.map(t => <Swatch key={t.name} token={t} />)}
          </div>
        </section>

        {/* ── 2. SHAPE TOKENS ──────────────────────────────────────────────── */}
        <section>
          <SectionLabel>02 — Shape Tokens</SectionLabel>
          <SectionTitle>Clip-Path System</SectionTitle>
          <p className="text-sm text-cool-gray mb-8 max-w-xl">All buttons use CSS <code className="text-energy-green font-mono text-xs">clip-path</code> to express the chamfered corner system.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              { name: 'APEX ASYMMETRICAL', key: 'apexAsym', desc: 'Top-left & bottom-right — primary shape token' },
              { name: 'MICRO CHAMFER', key: 'microChamfer', desc: '6px on all 4 corners — compact/icon variant' },
            ].map(s => (
              <div key={s.key} className="p-5 border border-white/[0.06] bg-white/[0.02]" style={{ clipPath: SHAPES.apexAsym }}>
                <div
                  className="w-full h-10 bg-energy-green/20 border border-energy-green/30 mb-4"
                  style={{ clipPath: SHAPES[s.key as keyof typeof SHAPES] }}
                />
                <p className="font-mono text-[11px] text-energy-green">{s.name}</p>
                <p className="text-[11px] text-cool-gray mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. PRIMARY VARIANTS ──────────────────────────────────────────── */}
        <section>
          <SectionLabel>03 — Primary</SectionLabel>
          <SectionTitle>Primary Button</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Energy-green fill. Black text. Used for the main call-to-action on every section.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <BtnCard label="Default" desc="With slashes + chevron icon">
              <JumpButton variant="primary">BOOK YOUR JUMP</JumpButton>
            </BtnCard>

            <BtnCard label="Arrow icon" desc="Use for navigation / forward actions">
              <JumpButton variant="primary" iconType="arrow">FIND A CLASS</JumpButton>
            </BtnCard>

            <BtnCard label="No slashes" desc="Compact contexts, navbar">
              <JumpButton variant="primary" showSlashes={false} showIcon={false}>RESERVAR</JumpButton>
            </BtnCard>

            <BtnCard label="No icon" desc="Text-only, minimal">
              <JumpButton variant="primary" showIcon={false}>JOIN NOW</JumpButton>
            </BtnCard>

            <BtnCard label="Full width" desc="Mobile CTAs, form submits">
              <JumpButton variant="primary" fullWidth iconType="arrow">SECURE MY SPACE</JumpButton>
            </BtnCard>

            <BtnCard label="Disabled">
              <JumpButton variant="primary" disabled>SOLD OUT</JumpButton>
            </BtnCard>

          </div>
        </section>

        {/* ── 4. SECONDARY VARIANTS ────────────────────────────────────────── */}
        <section>
          <SectionLabel>04 — Secondary</SectionLabel>
          <SectionTitle>Secondary Button</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Dark fill with accent border. Hover reveals green border and green text.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <BtnCard label="Default">
              <JumpButton variant="secondary">LEARN MORE</JumpButton>
            </BtnCard>

            <BtnCard label="Arrow icon">
              <JumpButton variant="secondary" iconType="arrow">SEE SCHEDULE</JumpButton>
            </BtnCard>

            <BtnCard label="No slashes">
              <JumpButton variant="secondary" showSlashes={false}>VIEW PLANS</JumpButton>
            </BtnCard>

            <BtnCard label="Full width">
              <JumpButton variant="secondary" fullWidth iconType="arrow">EXPLORE CLASSES</JumpButton>
            </BtnCard>

            <BtnCard label="Disabled">
              <JumpButton variant="secondary" disabled>UNAVAILABLE</JumpButton>
            </BtnCard>

          </div>
        </section>

        {/* ── 5. GHOST ─────────────────────────────────────────────────────── */}
        <section>
          <SectionLabel>05 — Ghost</SectionLabel>
          <SectionTitle>Ghost Button</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Transparent fill, thin accent border. Tertiary priority. Hover shifts border to green.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <BtnCard label="Default">
              <GhostBtn>CANCEL</GhostBtn>
            </BtnCard>

            <BtnCard label="With icon">
              <GhostBtn><ExternalLink className="w-3.5 h-3.5" />VIEW DETAILS</GhostBtn>
            </BtnCard>

            <BtnCard label="Disabled">
              <GhostBtn disabled>UNAVAILABLE</GhostBtn>
            </BtnCard>

          </div>
        </section>

        {/* ── 6. TEXT / LINK ───────────────────────────────────────────────── */}
        <section>
          <SectionLabel>06 — Text</SectionLabel>
          <SectionTitle>Text / Link Button</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">No background. Inline navigation, secondary links, "learn more" patterns.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <BtnCard label="Default">
              <TextBtn>LEARN MORE</TextBtn>
            </BtnCard>

            <BtnCard label="In-copy context" desc="Sits naturally in body text">
              <p className="text-sm text-steel-gray">
                Already a member? <TextBtn>Sign in here</TextBtn>
              </p>
            </BtnCard>

          </div>
        </section>

        {/* ── 7. SEMANTIC VARIANTS ─────────────────────────────────────────── */}
        <section>
          <SectionLabel>07 — Semantic</SectionLabel>
          <SectionTitle>Danger & Success</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Used for destructive actions and confirmations. Follow same shape system.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <BtnCard label="Danger" desc="Delete, cancel subscription, destructive">
              <DangerBtn><AlertTriangle className="w-4 h-4" />CANCEL PLAN</DangerBtn>
            </BtnCard>

            <BtnCard label="Danger disabled">
              <DangerBtn disabled><AlertTriangle className="w-4 h-4" />DISABLED</DangerBtn>
            </BtnCard>

            <BtnCard label="Success" desc="Confirm, complete, verify">
              <SuccessBtn><Check className="w-4 h-4" />CONFIRMED</SuccessBtn>
            </BtnCard>

          </div>
        </section>

        {/* ── 8. LOADING STATE ─────────────────────────────────────────────── */}
        <section>
          <SectionLabel>08 — Loading</SectionLabel>
          <SectionTitle>Loading State</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Spinner replaces content during async operations. Button is disabled while loading.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <BtnCard label="Click to trigger" desc="2 second simulated load">
              <LoadingBtn loading={loading} onClick={triggerLoad}>
                <Zap className="w-4 h-4" />BOOK NOW
              </LoadingBtn>
            </BtnCard>

            <BtnCard label="Always loading (static demo)">
              <LoadingBtn loading>SUBMIT</LoadingBtn>
            </BtnCard>

          </div>
        </section>

        {/* ── 9. ICON-ONLY ─────────────────────────────────────────────────── */}
        <section>
          <SectionLabel>09 — Icon Only</SectionLabel>
          <SectionTitle>Icon Buttons</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Square 40px touch targets. Micro-chamfer shape. Used for toolbars, actions, social links.</p>
          <div className="flex flex-wrap gap-6 items-end">
            <BtnCard label="Dark variant">
              <IconBtn icon={<Zap className="w-4 h-4" />} variant="dark" />
              <IconBtn icon={<X className="w-4 h-4" />} variant="dark" />
              <IconBtn icon={<ChevronRight className="w-4 h-4" />} variant="dark" />
            </BtnCard>
            <BtnCard label="Green variant">
              <IconBtn icon={<Zap className="w-4 h-4" />} variant="green" />
              <IconBtn icon={<ArrowRight className="w-4 h-4" />} variant="green" />
              <IconBtn icon={<Check className="w-4 h-4" />} variant="green" />
            </BtnCard>
          </div>
        </section>

        {/* ── 10. SIZES ────────────────────────────────────────────────────── */}
        <section>
          <SectionLabel>10 — Sizes</SectionLabel>
          <SectionTitle>Size Scale</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Four sizes. Same shape, proportional padding and type scale.</p>
          <div className="flex flex-wrap gap-4 items-center">
            <SizedBtn size="sm">SM</SizedBtn>
            <SizedBtn size="md">MD</SizedBtn>
            <SizedBtn size="lg">LG</SizedBtn>
            <SizedBtn size="xl">XL</SizedBtn>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 items-center text-[11px] font-mono text-cool-gray">
            <span>SM — 10px / px-3 py-2</span>
            <span className="text-white/10">·</span>
            <span>MD — 12px / px-5 py-3</span>
            <span className="text-white/10">·</span>
            <span>LG — 14px / px-6 py-4</span>
            <span className="text-white/10">·</span>
            <span>XL — 16px / px-8 py-5</span>
          </div>
        </section>

        {/* ── 11. ON LIGHT BACKGROUND ──────────────────────────────────────── */}
        <section>
          <SectionLabel>11 — Light Context</SectionLabel>
          <SectionTitle>On Light Background</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Variants adapted for use on light/white surfaces (e.g. CTA green section).</p>
          <div className="bg-energy-green p-10 sm:p-16 flex flex-wrap gap-8 items-center" style={{ clipPath: SHAPES.apexAsym }}>
            <BtnCard label="Light primary" desc="Black fill on green bg">
              <LightPrimaryBtn>BOOK NOW</LightPrimaryBtn>
            </BtnCard>
            <BtnCard label="Light secondary" desc="Outlined, transparent">
              <LightSecondaryBtn>LEARN MORE</LightSecondaryBtn>
            </BtnCard>
            <BtnCard label="Light text">
              <button className="group inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-deep-black/60 hover:text-deep-black transition-colors duration-150">
                SEE ALL CLASSES
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>
            </BtnCard>
          </div>
        </section>

        {/* ── 12. SHAPE VARIANTS ───────────────────────────────────────────── */}
        <section>
          <SectionLabel>12 — Shape Variants</SectionLabel>
          <SectionTitle>Shape Exploration</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Same color tokens, different clip-paths. Only Apex Asymmetrical and Micro-Chamfer are part of the official system.</p>
          <div className="flex flex-wrap gap-6 items-center">

            <BtnCard label="Apex Asymmetrical (official)">
              <RawBtn clipPath={SHAPES.apexAsym} className="bg-energy-green text-deep-black hover:bg-[#b5ff1a]">
                PRIMARY
              </RawBtn>
            </BtnCard>

            <BtnCard label="Micro Chamfer (official)">
              <RawBtn clipPath={SHAPES.microChamfer} className="bg-energy-green text-deep-black hover:bg-[#b5ff1a]">
                COMPACT
              </RawBtn>
            </BtnCard>

            <BtnCard label="Sharp / Rectangle">
              <RawBtn clipPath={SHAPES.sharp} className="bg-energy-green text-deep-black hover:bg-[#b5ff1a]">
                SHARP
              </RawBtn>
            </BtnCard>

            <BtnCard label="Pill (rounded)">
              <button className="font-sans font-black italic uppercase text-xs tracking-wider px-6 py-3 bg-energy-green text-deep-black rounded-full hover:bg-[#b5ff1a] transition-colors duration-150 select-none active:scale-[0.97]">
                PILL
              </button>
            </BtnCard>

          </div>
        </section>

        {/* ── 13. BUTTON GROUP ─────────────────────────────────────────────── */}
        <section>
          <SectionLabel>13 — Groups</SectionLabel>
          <SectionTitle>Button Groups</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Paired button patterns used across sections.</p>
          <div className="space-y-10">

            <BtnCard label="Primary + Secondary pair (horizontal)" desc="Standard section CTA pattern">
              <div className="flex flex-wrap gap-4">
                <JumpButton variant="primary" iconType="arrow">BOOK YOUR JUMP</JumpButton>
                <JumpButton variant="secondary">SEE SCHEDULE</JumpButton>
              </div>
            </BtnCard>

            <BtnCard label="Primary + Text pair" desc="Hero section pattern">
              <div className="flex flex-wrap items-center gap-6">
                <JumpButton variant="primary" iconType="arrow">SECURE MY SPACE</JumpButton>
                <TextBtn>HOW IT WORKS</TextBtn>
              </div>
            </BtnCard>

            <BtnCard label="Stacked (mobile full-width)" desc="Used in mobile overlay menu">
              <div className="w-full max-w-xs flex flex-col gap-3">
                <JumpButton variant="primary" fullWidth iconType="arrow">BOOK YOUR JUMP</JumpButton>
                <JumpButton variant="secondary" fullWidth>SEE ALL CLASSES</JumpButton>
              </div>
            </BtnCard>

          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.05] mt-16">
        <div className="max-w-[1600px] mx-auto px-6 py-8 flex items-center justify-between">
          <span className="font-mono text-[10px] text-cool-gray uppercase tracking-widest">Jump Zone Studio — Design System</span>
          <Link
            to="/"
            className="flex items-center gap-1.5 font-mono text-[10px] text-cool-gray hover:text-energy-green transition-colors duration-150 uppercase tracking-wider"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to site
          </Link>
        </div>
      </div>

    </div>
  );
}
