/**
 * Jump Zone Studio — Button System
 * All interactive button variants. Import from here for use across the app.
 *
 * Exports:
 *   JumpButton          — primary & secondary (main system button)
 *   GhostButton         — transparent, bordered, tertiary
 *   TextButton          — link-style, no background
 *   DangerButton        — destructive actions (red)
 *   SuccessButton       — confirmations (emerald)
 *   LoadingButton       — async/spinner state
 *   IconButton          — square 40px icon-only (dark | green)
 *   LightPrimaryButton  — for use on green/light backgrounds
 *   LightSecondaryButton— for use on green/light backgrounds
 */

import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Loader2,
  AlertTriangle,
  Check,
} from "lucide-react";

// ─── Shared constants ─────────────────────────────────────────────────────────

/** Primary system shape — top-left + bottom-right chamfer */
export const CLIP_APEX = "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)";
/** Compact shape — 6px chamfer on all 4 corners */
export const CLIP_MICRO = "polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)";

const LABEL_BASE = "font-sans font-black italic uppercase text-xs tracking-wider leading-none whitespace-nowrap";

// ─── 1. JumpButton (primary + secondary) ─────────────────────────────────────

export interface JumpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  showSlashes?: boolean;
  showIcon?: boolean;
  iconType?: "chevron" | "arrow";
  fullWidth?: boolean;
}

export const JumpButton: React.FC<JumpButtonProps> = ({
  children,
  variant = "primary",
  showSlashes = true,
  showIcon = true,
  iconType = "chevron",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const clip = { clipPath: CLIP_APEX };
  const width = fullWidth ? "w-full" : "w-auto min-w-[160px] sm:min-w-[180px]";
  const base = `group relative ${width} py-4 flex items-center justify-center select-none
    transition-transform duration-[120ms] ease-out active:scale-[0.97]
    disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ${className}`;

  if (variant === "primary") {
    return (
      <button disabled={disabled} style={clip} className={base} {...props}>
        <div className="absolute inset-0 bg-energy-green group-hover:bg-[#b5ff1a] group-active:bg-[#92df00] transition-colors duration-150" />
        {!disabled && (
          <div className="absolute inset-0 bg-energy-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none -z-10" />
        )}
        <div className="relative w-full flex items-center justify-between text-deep-black z-10 px-7">
          {showSlashes && (
            <div className="flex space-x-[3px] text-deep-black/30 group-hover:text-deep-black/50 transition-colors duration-150 font-extrabold italic tracking-tighter text-sm select-none shrink-0 pr-3">
              <span>/</span><span>/</span>
            </div>
          )}
          <span className={`flex-1 text-center ${LABEL_BASE}`}>{children}</span>
          {showIcon && (
            <div className="flex items-center shrink-0 pl-3">
              {iconType === "chevron"
                ? <ChevronRight className="w-4 h-4 stroke-[3px]" />
                : <ArrowRight className="w-4 h-4 stroke-[3px]" />}
            </div>
          )}
        </div>
      </button>
    );
  }

  // Secondary — darker fill, static border (no hover color change on border)
  return (
    <button disabled={disabled} style={clip} className={base} {...props}>
      {/* Border layer — stays at bg-white/10 always, no hover change */}
      <div className="absolute inset-0 bg-white/10" style={clip} />
      {/* Inner darker background */}
      <div className="absolute inset-[1px] bg-[#111111] group-hover:bg-[#161616] group-active:bg-[#0d0d0d] transition-colors duration-150" style={clip} />
      <div className="relative w-full flex items-center justify-between z-10 px-7">
        {showSlashes && (
          <div className="flex space-x-[3px] text-white/20 group-hover:text-white/35 transition-colors duration-150 font-extrabold italic tracking-tighter text-sm select-none shrink-0 pr-3">
            <span>/</span><span>/</span>
          </div>
        )}
        <span className={`flex-1 text-center ${LABEL_BASE} text-white`}>{children}</span>
        {showIcon && (
          <div className="flex items-center text-white/40 group-hover:text-white transition-colors duration-150 shrink-0 pl-3">
            {iconType === "chevron"
              ? <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
              : <ArrowRight className="w-4 h-4 stroke-[2.5px]" />}
          </div>
        )}
      </div>
    </button>
  );
};

// ─── 2. GhostButton ──────────────────────────────────────────────────────────

export interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const GhostButton: React.FC<GhostButtonProps> = ({ children, icon, className = "", ...props }) => (
  <button
    style={{ clipPath: CLIP_APEX }}
    className={`group relative inline-flex items-center justify-center gap-2 px-7 py-4 cursor-pointer select-none
      ${LABEL_BASE} text-steel-gray hover:text-white
      transition-[color,transform] duration-150 active:scale-[0.97]
      disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    {...props}
  >
    {/* Border layer — fills the clip shape including the chamfered corners */}
    <div className="absolute inset-0 bg-white/15 group-hover:bg-white/25 transition-colors duration-150" style={{ clipPath: CLIP_APEX }} />
    {/* Inner background — inset 1px reveals border layer as outline */}
    <div className="absolute inset-[1px] bg-[#050505] group-hover:bg-white/[0.04] transition-colors duration-150" style={{ clipPath: CLIP_APEX }} />
    {/* Content */}
    <div className="relative z-10 flex items-center gap-2">
      {icon}
      {children}
    </div>
  </button>
);

// ─── 3. TextButton ───────────────────────────────────────────────────────────

export const TextButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = "", ...props }) => (
  <button
    className={`group inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider
      text-steel-gray hover:text-white transition-colors duration-150 select-none
      disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    {children}
    <ArrowRight className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
  </button>
);

// ─── 4. DangerButton ─────────────────────────────────────────────────────────

export interface DangerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const DangerButton: React.FC<DangerButtonProps> = ({ children, icon, className = "", ...props }) => (
  <button
    style={{ clipPath: CLIP_APEX }}
    className={`group inline-flex items-center gap-2 px-7 py-4 cursor-pointer select-none
      ${LABEL_BASE} text-white
      bg-red-600/90 hover:bg-red-500 active:bg-red-700
      transition-[background-color,transform] duration-150 active:scale-[0.97]
      disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    {...props}
  >
    {icon ?? <AlertTriangle className="w-4 h-4 shrink-0" />}
    {children}
  </button>
);

// ─── 5. SuccessButton ────────────────────────────────────────────────────────

export interface SuccessButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const SuccessButton: React.FC<SuccessButtonProps> = ({ children, icon, className = "", ...props }) => (
  <button
    style={{ clipPath: CLIP_APEX }}
    className={`group inline-flex items-center gap-2 px-7 py-4 cursor-pointer select-none
      ${LABEL_BASE} text-deep-black
      bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500
      transition-[background-color,transform] duration-150 active:scale-[0.97]
      disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    {...props}
  >
    {icon ?? <Check className="w-4 h-4 shrink-0" />}
    {children}
  </button>
);

// ─── 6. LoadingButton ────────────────────────────────────────────────────────

export interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({ children, loading = false, className = "", ...props }) => (
  <button
    disabled={loading}
    style={{ clipPath: CLIP_APEX }}
    className={`group inline-flex items-center justify-center gap-2 px-7 py-4 select-none min-w-[160px]
      ${LABEL_BASE} text-deep-black
      bg-energy-green hover:bg-[#b5ff1a] active:bg-[#92df00]
      transition-[background-color,transform] duration-150 active:scale-[0.97]
      ${loading ? "cursor-wait" : "cursor-pointer"}
      disabled:cursor-wait disabled:opacity-80 ${className}`}
    {...props}
  >
    {loading
      ? <><Loader2 className="w-4 h-4 animate-spin shrink-0" /><span>LOADING…</span></>
      : children}
  </button>
);

// ─── 7. IconButton ───────────────────────────────────────────────────────────

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "dark" | "green";
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, variant = "dark", className = "", ...props }) => {
  if (variant === "green") {
    return (
      <button
        style={{ clipPath: CLIP_MICRO }}
        className={`relative inline-flex items-center justify-center w-10 h-10 cursor-pointer select-none
          bg-energy-green text-deep-black hover:bg-[#b5ff1a]
          transition-[background-color,transform] duration-150 active:scale-[0.95]
          disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
        {...props}
      >
        {icon}
      </button>
    );
  }
  return (
    <button
      style={{ clipPath: CLIP_MICRO }}
      className={`group relative inline-flex items-center justify-center w-10 h-10 cursor-pointer select-none
        text-steel-gray hover:text-white
        transition-[color,transform] duration-150 active:scale-[0.95]
        disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      {...props}
    >
      {/* Border layer — fills the micro clip shape at all corners */}
      <div className="absolute inset-0 bg-white/[0.08]" style={{ clipPath: CLIP_MICRO }} />
      {/* Inner background — inset 1px reveals border layer */}
      <div className="absolute inset-[1px] bg-white/[0.06] group-hover:bg-white/10 transition-colors duration-150" style={{ clipPath: CLIP_MICRO }} />
      <div className="relative z-10">{icon}</div>
    </button>
  );
};

// ─── 8. LightPrimaryButton ───────────────────────────────────────────────────

export const LightPrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = "", ...props }) => (
  <button
    style={{ clipPath: CLIP_APEX }}
    className={`group inline-flex items-center gap-3 px-7 py-4 cursor-pointer select-none
      ${LABEL_BASE} text-white
      bg-deep-black hover:bg-[#111] active:bg-black
      transition-[background-color,transform] duration-150 active:scale-[0.97]
      disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    {...props}
  >
    {children}
    <ArrowRight className="w-4 h-4 stroke-[2.5px] shrink-0" />
  </button>
);

// ─── 9. LightSecondaryButton ─────────────────────────────────────────────────

export const LightSecondaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = "", ...props }) => (
  <button
    style={{ clipPath: CLIP_APEX }}
    className={`group relative inline-flex items-center justify-center px-7 py-4 cursor-pointer select-none
      ${LABEL_BASE} text-deep-black
      transition-transform duration-150 active:scale-[0.97]
      disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    {...props}
  >
    {/* Border layer — black/30 at all clip corners */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black transition-colors duration-150" style={{ clipPath: CLIP_APEX }} />
    {/* Inner background — matches the green CTA surface */}
    <div className="absolute inset-[1px] bg-energy-green group-hover:bg-energy-green/90 transition-colors duration-150" style={{ clipPath: CLIP_APEX }} />
    <span className="relative z-10">{children}</span>
  </button>
);

export { JumpButton as default };
