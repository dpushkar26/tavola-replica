'use client';

import React from 'react';

export interface TavolaIconProps {
  className?: string;
  size?: number | string;
  color?: string;
  accentColor?: string;
}

/**
 * Bespoke Tavola "T" Monogram Mark
 * 100% original, copyright-free vector mark.
 * Combines a minimalist architectural table surface with an elegant hospitality pedestal.
 */
export function TavolaIcon({
  className = '',
  size = 32,
  color = '#0B3B24',
  accentColor = '#BCE440',
}: TavolaIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ${className}`}
      aria-label="Tavola Mark"
    >
      {/* Outer rounded squircle container */}
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="9.5"
        fill={color}
        className="transition-colors duration-200"
      />
      {/* Subtle top reflection / edge illumination */}
      <path
        d="M6 10C6 7.79086 7.79086 6 10 6H26C28.2091 6 30 7.79086 30 10"
        stroke="white"
        strokeOpacity="0.08"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Architectural "T" crossbar with soft beveled corners (Table Top) */}
      <path
        d="M8.5 12C8.5 10.8954 9.39543 10 10.5 10H25.5C26.6046 10 27.5 10.8954 27.5 12C27.5 13.1046 26.6046 14 25.5 14H10.5C9.39543 14 8.5 13.1046 8.5 12Z"
        fill="white"
      />
      {/* Architectural "T" stem (Pedestal / Central Column) */}
      <path
        d="M16 13.5H20V24.5C20 25.6046 19.1046 26.5 18 26.5C16.8954 26.5 16 25.6046 16 24.5V13.5Z"
        fill="white"
      />
      {/* Tavola signature hospitality spark / cloche accent */}
      <circle
        cx="25.5"
        cy="9.5"
        r="2"
        fill={accentColor}
      />
    </svg>
  );
}

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  variant?: 'landing' | 'dashboard' | 'icon-only';
  collapsed?: boolean;
  showIcon?: boolean;
}

export function BrandLogo({
  className = '',
  size = 'md',
  color = '#0B3B24',
  variant = 'landing',
  collapsed = false,
  showIcon = false,
}: BrandLogoProps) {
  // If collapsed or icon-only, show the bespoke "T" monogram mark
  if (collapsed || variant === 'icon-only') {
    const iconDimensions = {
      sm: 28,
      md: 34,
      lg: 40,
      xl: 48,
    }[size];

    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`} aria-label="Tavola">
        <TavolaIcon size={iconDimensions} color={color} />
      </div>
    );
  }

  const textSizeClasses = {
    sm: 'text-[22px]',
    md: 'text-[27px] sm:text-[29px]',
    lg: 'text-[34px] sm:text-[38px]',
    xl: 'text-[42px] sm:text-[46px]',
  }[size];

  const secondarySizeClasses = {
    sm: 'text-[10px]',
    md: 'text-[11px] sm:text-[12px]',
    lg: 'text-[13px] sm:text-[14px]',
    xl: 'text-[15px] sm:text-[16px]',
  }[size];

  const iconDimensions = {
    sm: 24,
    md: 28,
    lg: 32,
    xl: 38,
  }[size];

  // Dashboard variant: Pure "Tavola" wordmark (no "serve" tag)
  if (variant === 'dashboard') {
    return (
      <div className={`inline-flex items-center gap-2 select-none group ${className}`} aria-label="Tavola">
        {showIcon && <TavolaIcon size={iconDimensions} color={color} />}
        <span
          className={`font-script font-bold tracking-[-0.02em] leading-none transition-transform duration-150 group-hover:scale-[1.01] inline-flex items-baseline ${textSizeClasses}`}
          style={{
            fontFamily: 'var(--font-script), "Dancing Script", "Brush Script MT", cursive',
            color: color,
          }}
        >
          Tavola
        </span>
      </div>
    );
  }

  // Landing variant: "Tavola" as main word + "serve" as secondary refined word
  return (
    <div className={`inline-flex items-center gap-2 select-none group ${className}`} aria-label="Tavola Serve">
      {showIcon && <TavolaIcon size={iconDimensions} color={color} />}
      <span
        className={`font-script font-bold tracking-[-0.02em] leading-none transition-transform duration-150 group-hover:scale-[1.01] inline-flex items-baseline ${textSizeClasses}`}
        style={{
          fontFamily: 'var(--font-script), "Dancing Script", "Brush Script MT", cursive',
          color: color,
        }}
      >
        Tavola
        <span
          className={`font-sans font-normal lowercase tracking-normal ml-2 text-[#141414] ${secondarySizeClasses}`}
          style={{
            fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
          }}
        >
          serve
        </span>
      </span>
    </div>
  );
}

export default BrandLogo;
