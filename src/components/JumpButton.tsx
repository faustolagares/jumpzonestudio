import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

interface JumpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  // Octagon clip path style - set to chosen MODEL 02 APEX ASYMMETRICAL Top-L & Bottom-R styling
  const clipPathStyle = {
    clipPath: "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
  };

  const widthClass = fullWidth ? "w-full" : "w-auto min-w-[160px] sm:min-w-[180px]";

  if (variant === "primary") {
    return (
      <button
        disabled={disabled}
        className={`group relative ${widthClass} py-4 flex items-center justify-center select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 border border-transparent
          transition-transform duration-[120ms] ease-out active:scale-[0.97] ${className}`}
        style={clipPathStyle}
        {...props}
      >
        {/* Fill Background - Neon Energy Green */}
        <div className="absolute inset-0 bg-energy-green group-hover:bg-[#b5ff1a] group-active:bg-[#92df00] transition-colors duration-150" />
        
        {/* Subtle Ambient Glow behind on Hover */}
        {!disabled && (
          <div className="absolute inset-0 bg-energy-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none -z-10" />
        )}
        
        {/* Inner Content block */}
        <div className="relative w-full flex items-center justify-between text-deep-black z-10 px-7">
          {/* Double Slashes on the Left */}
          {showSlashes && (
            <div className="flex space-x-[3px] text-deep-black/30 group-hover:text-deep-black/50 transition-colors duration-150 font-extrabold italic tracking-tighter text-sm sm:text-base select-none shrink-0 pr-3">
              <span>/</span>
              <span>/</span>
            </div>
          )}

          {/* Centered slanted label */}
          <span className="flex-1 text-center font-sans font-black italic uppercase text-xs sm:text-[13px] tracking-wider leading-none whitespace-nowrap">
            {children}
          </span>

          {/* Action icon */}
          {showIcon && (
            <div className="flex items-center shrink-0 pl-1">
              {iconType === "chevron" ? (
                <ChevronRight className="w-4 h-4 stroke-[3px]" />
              ) : (
                <ArrowRight className="w-4 h-4 stroke-[3px]" />
              )}
            </div>
          )}
        </div>
      </button>
    );
  }

  // Secondary dark button variant following the exact same shape, padding, and height as primary
  return (
    <button
      disabled={disabled}
      className={`group relative ${widthClass} py-4 flex items-center justify-center select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
        transition-transform duration-[120ms] ease-out active:scale-[0.97] ${className}`}
      style={clipPathStyle}
      {...props}
    >
      {/* Outer Outline Border (clipped with clip-path) */}
      <div 
        className="absolute inset-0 bg-white/15 group-hover:bg-white/22 transition-colors duration-200"
        style={clipPathStyle}
      />

      {/* Inner Background (1px inset to reveal the border outline, also clipped) */}
      <div 
        className="absolute inset-[1px] bg-[#111111] group-hover:bg-[#161616] group-active:bg-[#0d0d0d] transition-colors duration-200"
        style={clipPathStyle}
      />
      
      {/* Subtle Ambient Glow behind on Hover */}
      {!disabled && (
        <div className="absolute inset-0 bg-energy-green/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none -z-10" />
      )}
      
      {/* Inner Content block */}
      <div className="relative w-full flex items-center justify-between z-10 px-7">
        {/* Slanted dividers */}
        {showSlashes && (
          <div className="flex space-x-[3px] text-white/20 group-hover:text-white/35 transition-colors duration-150 font-extrabold italic tracking-tighter text-sm sm:text-base select-none shrink-0 pr-3">
            <span>/</span>
            <span>/</span>
          </div>
        )}

        {/* Centered label */}
        <span className="flex-1 text-center font-sans font-black italic uppercase text-xs sm:text-[13px] tracking-wider leading-none text-white group-hover:text-white transition-colors duration-150 whitespace-nowrap">
          {children}
        </span>

        {/* Arrow vector mark */}
        {showIcon && (
          <div className="flex items-center text-white/30 group-hover:text-white transition-colors duration-150 shrink-0 pl-1">
            {iconType === "chevron" ? (
              <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
            ) : (
              <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
            )}
          </div>
        )}
      </div>
    </button>
  );
};
