import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Zap, X, ChevronRight, Copy, CheckCheck, ExternalLink,
} from 'lucide-react';
import {
  JumpButton,
  GhostButton,
  TextButton,
  DangerButton,
  SuccessButton,
  LoadingButton,
  IconButton,
  LightPrimaryButton,
  LightSecondaryButton,
  HeaderButton,
  CLIP_APEX,
  CLIP_MICRO,
} from '../components/Buttons';

// ─── Design tokens ────────────────────────────────────────────────────────────

const COLOR_TOKENS = [
  { name: '--color-energy-green', value: '#A8FF00', role: 'Primary action, focus rings, accents' },
  { name: '--color-lime-accent',  value: '#C6FF33', role: 'Hover state of primary buttons' },
  { name: '--color-deep-black',   value: '#0A0A0A', role: 'Button text on primary bg' },
  { name: '--color-card-black',   value: '#1A1A1A', role: 'Reference — secondary inner was here' },
  { name: '--color-dark-charcoal',value: '#121212', role: 'Dark background references' },
  { name: '--color-cool-gray',    value: '#888888', role: 'Ghost / disabled text' },
  { name: '--color-steel-gray',   value: '#CCCCCC', role: 'Secondary label, muted text' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Swatch({ token }: { token: (typeof COLOR_TOKENS)[0]; key?: React.Key }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(token.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="flex items-center gap-4 py-3 border-b border-white/[0.05]">
      <div className="w-10 h-10 shrink-0 rounded-sm border border-white/10" style={{ backgroundColor: token.value }} />
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[11px] text-energy-green truncate">{token.name}</p>
        <p className="text-[11px] text-steel-gray mt-0.5">{token.role}</p>
      </div>
      <button onClick={copy} className="shrink-0 font-mono text-[10px] text-cool-gray hover:text-white transition-colors flex items-center gap-1">
        {copied ? <CheckCheck className="w-3 h-3 text-energy-green" /> : <Copy className="w-3 h-3" />}
        {token.value}
      </button>
    </div>
  );
}

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
        <p className="text-sm text-steel-gray font-sans max-w-xl leading-relaxed mb-4">
          All interactive button variants for the Jump Zone Studio design system.
          Import from <code className="text-energy-green font-mono text-xs">src/components/Buttons.tsx</code>.
        </p>
        <div className="font-mono text-[11px] text-cool-gray space-y-1">
          <p>import {'{'} JumpButton, GhostButton, TextButton, DangerButton, SuccessButton {'}'} from <span className="text-energy-green">'../components/Buttons'</span>;</p>
          <p>import {'{'} LoadingButton, IconButton, LightPrimaryButton, LightSecondaryButton {'}'} from <span className="text-energy-green">'../components/Buttons'</span>;</p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-16 space-y-24">

        {/* 01 — COLOR TOKENS */}
        <section>
          <SectionLabel>01 — Color Tokens</SectionLabel>
          <SectionTitle>Design Tokens</SectionTitle>
          <p className="text-sm text-cool-gray mb-8 max-w-xl">Defined in <code className="text-energy-green font-mono text-xs">src/index.css</code> under <code className="text-energy-green font-mono text-xs">@theme</code>. Click hex to copy.</p>
          <div className="max-w-2xl">
            {COLOR_TOKENS.map(t => <Swatch key={t.name} token={t} />)}
          </div>
        </section>

        {/* 02 — SHAPE TOKENS */}
        <section>
          <SectionLabel>02 — Shape Tokens</SectionLabel>
          <SectionTitle>Clip-Path System</SectionTitle>
          <p className="text-sm text-cool-gray mb-8 max-w-xl">Exported as <code className="text-energy-green font-mono text-xs">CLIP_APEX</code> and <code className="text-energy-green font-mono text-xs">CLIP_MICRO</code> from Buttons.tsx.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              { name: 'CLIP_APEX', clip: CLIP_APEX, desc: 'Top-left & bottom-right 10px — primary system shape' },
              { name: 'CLIP_MICRO', clip: CLIP_MICRO, desc: '6px all 4 corners — icon / compact variant' },
            ].map(s => (
              <div key={s.name} className="p-5 border border-white/[0.06] bg-white/[0.02]" style={{ clipPath: CLIP_APEX }}>
                <div className="w-full h-10 bg-energy-green/20 border border-energy-green/30 mb-4" style={{ clipPath: s.clip }} />
                <p className="font-mono text-[11px] text-energy-green">{s.name}</p>
                <p className="text-[11px] text-cool-gray mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — PRIMARY */}
        <section>
          <SectionLabel>03 — Primary</SectionLabel>
          <SectionTitle>JumpButton — Primary</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Energy-green fill. Black text. Main CTA on every section.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <BtnCard label="Default" desc="Slashes + chevron icon">
              <JumpButton variant="primary">BOOK YOUR JUMP</JumpButton>
            </BtnCard>
            <BtnCard label="Arrow icon" desc="Navigation / forward actions">
              <JumpButton variant="primary" iconType="arrow">FIND A CLASS</JumpButton>
            </BtnCard>
            <BtnCard label="HeaderButton" desc="Compact navbar CTA">
              <HeaderButton>RESERVAR</HeaderButton>
            </BtnCard>
            <BtnCard label="No icon">
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

        {/* 04 — SECONDARY */}
        <section>
          <SectionLabel>04 — Secondary</SectionLabel>
          <SectionTitle>JumpButton — Secondary</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Dark fill with static subtle border. Hover darkens background only.</p>
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

        {/* 05 — GHOST */}
        <section>
          <SectionLabel>05 — Ghost</SectionLabel>
          <SectionTitle>GhostButton</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Transparent fill, thin static border. Tertiary priority.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <BtnCard label="Default">
              <GhostButton>CANCEL</GhostButton>
            </BtnCard>
            <BtnCard label="With icon">
              <GhostButton icon={<ExternalLink className="w-3.5 h-3.5 shrink-0" />}>VIEW DETAILS</GhostButton>
            </BtnCard>
            <BtnCard label="Disabled">
              <GhostButton disabled>UNAVAILABLE</GhostButton>
            </BtnCard>
          </div>
        </section>

        {/* 06 — TEXT */}
        <section>
          <SectionLabel>06 — Text</SectionLabel>
          <SectionTitle>TextButton</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">No background. Inline navigation, secondary links.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <BtnCard label="Default">
              <TextButton>LEARN MORE</TextButton>
            </BtnCard>
            <BtnCard label="In-copy context">
              <p className="text-sm text-steel-gray">
                Already a member? <TextButton>Sign in here</TextButton>
              </p>
            </BtnCard>
          </div>
        </section>

        {/* 07 — SEMANTIC */}
        <section>
          <SectionLabel>07 — Semantic</SectionLabel>
          <SectionTitle>DangerButton & SuccessButton</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Destructive actions and confirmations. Same shape system.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <BtnCard label="Danger" desc="Delete, cancel, destructive">
              <DangerButton>CANCEL PLAN</DangerButton>
            </BtnCard>
            <BtnCard label="Danger disabled">
              <DangerButton disabled>DISABLED</DangerButton>
            </BtnCard>
            <BtnCard label="Success" desc="Confirm, complete, verify">
              <SuccessButton>CONFIRMED</SuccessButton>
            </BtnCard>
          </div>
        </section>

        {/* 08 — LOADING */}
        <section>
          <SectionLabel>08 — Loading</SectionLabel>
          <SectionTitle>LoadingButton</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Spinner replaces content during async operations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <BtnCard label="Click to trigger" desc="2 second simulated load">
              <LoadingButton loading={loading} onClick={triggerLoad}>
                BOOK NOW
              </LoadingButton>
            </BtnCard>
            <BtnCard label="Always loading (static demo)">
              <LoadingButton loading>SUBMIT</LoadingButton>
            </BtnCard>
          </div>
        </section>

        {/* 09 — ICON ONLY */}
        <section>
          <SectionLabel>09 — Icon Only</SectionLabel>
          <SectionTitle>IconButton</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">40×40px touch targets. Micro-chamfer shape.</p>
          <div className="flex flex-wrap gap-10 items-end">
            <BtnCard label="Dark variant">
              <div className="flex gap-3">
                <IconButton icon={<Zap className="w-4 h-4" />} variant="dark" />
                <IconButton icon={<X className="w-4 h-4" />} variant="dark" />
                <IconButton icon={<ChevronRight className="w-4 h-4" />} variant="dark" />
              </div>
            </BtnCard>
            <BtnCard label="Green variant">
              <div className="flex gap-3">
                <IconButton icon={<Zap className="w-4 h-4" />} variant="green" />
                <IconButton icon={<ArrowLeft className="w-4 h-4" />} variant="green" />
                <IconButton icon={<ChevronRight className="w-4 h-4" />} variant="green" />
              </div>
            </BtnCard>
          </div>
        </section>

        {/* 10 — SIZES */}
        <section>
          <SectionLabel>10 — Sizes</SectionLabel>
          <SectionTitle>Size Scale</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Sizes are overridden via className. Base is MD (px-7 py-4).</p>
          <div className="flex flex-wrap gap-4 items-center">
            {[
              { label: 'SM', cls: 'text-[10px] !px-4 !py-2 !min-w-[100px]' },
              { label: 'MD', cls: '' },
              { label: 'LG', cls: '!text-sm !px-8 !py-4 !min-w-[200px]' },
              { label: 'XL', cls: '!text-base !px-10 !py-5 !min-w-[240px]' },
            ].map(s => (
              <JumpButton key={s.label} variant="primary" showSlashes={false} showIcon={false} className={s.cls}>
                {s.label}
              </JumpButton>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-[11px] font-mono text-cool-gray">
            <span>SM — 10px / px-4 py-2</span><span className="text-white/10">·</span>
            <span>MD — 12px / px-7 py-4 (base)</span><span className="text-white/10">·</span>
            <span>LG — 14px / px-8 py-4</span><span className="text-white/10">·</span>
            <span>XL — 16px / px-10 py-5</span>
          </div>
        </section>

        {/* 11 — LIGHT CONTEXT */}
        <section>
          <SectionLabel>11 — Light Context</SectionLabel>
          <SectionTitle>On Light Background</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Variants for use on green or white surfaces (e.g. CTA section).</p>
          <div className="bg-energy-green p-10 sm:p-16 flex flex-wrap gap-8 items-center" style={{ clipPath: CLIP_APEX }}>
            <BtnCard label="LightPrimaryButton">
              <LightPrimaryButton>BOOK NOW</LightPrimaryButton>
            </BtnCard>
            <BtnCard label="LightSecondaryButton">
              <LightSecondaryButton>LEARN MORE</LightSecondaryButton>
            </BtnCard>
            <BtnCard label="TextButton (light context)">
              <button className="group inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-deep-black/60 hover:text-deep-black transition-colors duration-150">
                SEE ALL CLASSES
                <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>
            </BtnCard>
          </div>
        </section>

        {/* 12 — BUTTON GROUPS */}
        <section>
          <SectionLabel>12 — Groups</SectionLabel>
          <SectionTitle>Button Groups</SectionTitle>
          <p className="text-sm text-cool-gray mb-10 max-w-xl">Paired patterns used across sections.</p>
          <div className="space-y-10">
            <BtnCard label="Primary + Secondary" desc="Standard section CTA">
              <div className="flex flex-wrap gap-4">
                <JumpButton variant="primary" iconType="arrow">BOOK YOUR JUMP</JumpButton>
                <JumpButton variant="secondary">SEE SCHEDULE</JumpButton>
              </div>
            </BtnCard>
            <BtnCard label="Primary + Text" desc="Hero section pattern">
              <div className="flex flex-wrap items-center gap-6">
                <JumpButton variant="primary" iconType="arrow">SECURE MY SPACE</JumpButton>
                <TextButton>HOW IT WORKS</TextButton>
              </div>
            </BtnCard>
            <BtnCard label="Stacked full-width" desc="Mobile overlay / forms">
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
          <Link to="/" className="flex items-center gap-1.5 font-mono text-[10px] text-cool-gray hover:text-energy-green transition-colors duration-150 uppercase tracking-wider">
            <ArrowLeft className="w-3 h-3" />
            Back to site
          </Link>
        </div>
      </div>

    </div>
  );
}
