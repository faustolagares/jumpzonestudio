import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

interface JumpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  showSlashes?: boolean;
  showIcon?: boolean;
  iconType?: "chevron" | "arrow";
  fullWidth?: boolean;
}

const CLIP = {
  clipPath: "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
};

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
  const widthClass = fullWidth ? "w-full" : "w-auto min-w-[160px] sm:min-w-[180px]";

  if (variant === "primary") {
    return (
      <button
        disabled={disabled}
        className={`group relative ${widthClass} py-4 flex items-center justify-center select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
          transition-transform duration-[120ms] ease-out active:scale-[0.97] ${className}`}
        style={CLIP}
        {...props}
      >
        <div className="absolute inset-0 bg-energy-green group-hover:bg-[#b5ff1a] group-active:bg-[#92df00] transition-colors duration-150" />
        {!disabled && (
          <div className="absolute inset-0 bg-energy-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none -z-10" />
        )}
        <div className="relative w-full flex items-center justify-between text-deep-black z-10 px-7">
          {showSlashes && (
            <div className="flex space-x-[3px] text-deep-black/30 group-hover:text-deep-black/50 transition-colors duration-150 font-extrabold italic tracking-tighter text-sm sm:text-base select-none shrink-0 pr-3">
              <span>/</span>
              <span>/</span>
            </div>
          )}
          <span className="flex-1 text-center font-sans font-black italic uppercase text-xs sm:text-[13px] tracking-wider leading-none whitespace-nowrap">
            {children}
          </span>
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

  return (
    <button
      disabled={disabled}
      className={`group relative ${widthClass} py-4 flex items-center justify-center select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
        transition-transform duration-[120ms] ease-out active:scale-[0.97] ${className}`}
      style={CLIP}
      {...props}
    >
      {/* Static border — no hover color change */}
      <div className="absolute inset-0 bg-white/10" style={CLIP} />
      {/* Darker inner background */}
      <div className="absolute inset-[1px] bg-[#111111] group-hover:bg-[#161616] group-active:bg-[#0d0d0d] transition-colors duration-150" style={CLIP} />

      <div className="relative w-full flex items-center justify-between z-10 px-7">
        {showSlashes && (
          <div className="flex space-x-[3px] text-white/20 group-hover:text-white/35 transition-colors duration-150 font-extrabold italic tracking-tighter text-sm sm:text-base select-none shrink-0 pr-3">
            <span>/</span>
            <span>/</span>
          </div>
        )}
        <span className="flex-1 text-center font-sans font-black italic uppercase text-xs sm:text-[13px] tracking-wider leading-none text-white transition-colors duration-150 whitespace-nowrap">
          {children}
        </span>
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
