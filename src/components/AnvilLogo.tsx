import React from 'react';
import { motion } from 'motion/react';

interface AnvilLogoProps {
  className?: string;
  size?: number;
  variant?: 'icon' | 'full' | 'stacked';
  glow?: boolean;
}

export const AnvilLogo: React.FC<AnvilLogoProps> = ({
  className = '',
  size,
  variant = 'icon',
  glow = true
}) => {
  // SVG Icon Component
  const Icon = () => (
    <svg
      width={size || (variant === 'icon' ? 48 : 56)}
      height={size || (variant === 'icon' ? 48 : 56)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${glow ? 'drop-shadow-[0_0_12px_rgba(0,242,254,0.45)]' : ''}`}
    >
      <defs>
        {/* Neon Gradient */}
        <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="50%" stopColor="#00D2FC" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        {/* Dark Metallic Gradient for the Anvil Base */}
        <linearGradient id="anvilBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1C33" />
          <stop offset="50%" stopColor="#030C1A" />
          <stop offset="100%" stopColor="#0F2B4C" />
        </linearGradient>

        {/* Silver Metallic Gradient for Text when using inline SVGs */}
        <linearGradient id="silverMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E2E8F0" />
          <stop offset="70%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>

        {/* Soft Radial Glow behind the anvil */}
        <radialGradient id="behindGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00F2FE" stopOpacity="0" />
        </radialGradient>

        {/* Clip Path for the Left Horn waves to keep them within boundaries */}
        <clipPath id="hornClip">
          <path d="M 76 60 C 58 60, 24 55, 12 60 C 12 60, 36 90, 76 92 Z" />
        </clipPath>
      </defs>

      {/* Subtle background aura */}
      <circle cx="100" cy="100" r="85" fill="url(#behindGlow)" />

      <g transform="translate(0, -6)">
        {/* --- ANVIL BACKGROUND / BODY --- */}
        {/* Left Horn: starts thin at left tip (20, 75), curves up to collar (76, 68), and back down to (76, 95) */}
        {/* Main Body & Right Heel: extends right from collar (76, 68) to heel tip (180, 72), angles down to neck, and spreads to base */}
        {/* Base: robust feet with middle cutout (80 to 120 at bottom) */}
        <path
          d="
            M 20 75 
            C 40 73, 62 70, 76 68 
            L 76 96 
            C 62 96, 38 92, 20 75 Z
          "
          fill="url(#anvilBodyGrad)"
          stroke="url(#neonGlow)"
          strokeWidth="1.5"
        />

        {/* Main Anvil Body & Right Heel and Base */}
        <path
          d="
            M 86 68 
            L 174 68 
            C 174 68, 178 72, 172 78
            L 142 108
            C 130 120, 125 130, 142 165
            L 155 165
            C 155 165, 150 178, 134 178
            L 118 178
            C 112 170, 88 170, 82 178
            L 66 178
            C 50 178, 45 165, 45 165
            L 58 165
            C 75 130, 70 120, 58 108
            L 86 96
            Z
          "
          fill="url(#anvilBodyGrad)"
          stroke="url(#neonGlow)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Collar Band (separation between horn and body) */}
        <rect
          x="76"
          y="65"
          width="10"
          height="34"
          rx="2"
          fill="url(#anvilBodyGrad)"
          stroke="url(#neonGlow)"
          strokeWidth="2"
        />

        {/* --- SOUND WAVES / RIPPLES (Voice AI Aspect - Left Horn) --- */}
        <g opacity="0.85">
          {/* Concentric rings clipping inside left horn */}
          <circle cx="81" cy="82" r="10" stroke="url(#neonGlow)" strokeWidth="1.5" fill="none" />
          <circle cx="81" cy="82" r="18" stroke="url(#neonGlow)" strokeWidth="1.5" fill="none" />
          <circle cx="81" cy="82" r="26" stroke="url(#neonGlow)" strokeWidth="1.5" fill="none" />
          <circle cx="81" cy="82" r="34" stroke="url(#neonGlow)" strokeWidth="1.5" fill="none" />
          <circle cx="81" cy="82" r="42" stroke="url(#neonGlow)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="81" cy="82" r="50" stroke="url(#neonGlow)" strokeWidth="1.5" fill="none" opacity="0.3" />
        </g>

        {/* Left horn parallel detail lines */}
        <path d="M 32 77 C 42 79, 52 81, 62 82" stroke="url(#neonGlow)" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
        <path d="M 36 73 C 46 75, 56 77, 66 78" stroke="url(#neonGlow)" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

        {/* --- HIGH-TECH CIRCUIT TRACES (Automation Aspect - Main Body/Right) --- */}
        <g opacity="0.9">
          {/* Main vertical bus line */}
          <line x1="108" y1="96" x2="108" y2="135" stroke="url(#neonGlow)" strokeWidth="2" />
          <circle cx="108" cy="96" r="3" fill="#00F2FE" />

          {/* Trace 1: Upper Right */}
          <path d="M 108 105 L 138 78 L 164 78" stroke="url(#neonGlow)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="164" cy="78" r="3.5" fill="#00F2FE" className="animate-pulse" />

          {/* Trace 2: Middle Right */}
          <path d="M 108 115 L 128 98 L 152 98" stroke="url(#neonGlow)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="152" cy="98" r="3.5" fill="#00F2FE" />

          {/* Trace 3: Lower Right (angles down towards heel/neck) */}
          <path d="M 108 125 L 130 148" stroke="url(#neonGlow)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="130" cy="148" r="3.5" fill="#3B82F6" />

          {/* Trace 4: Base connections (Automation stability) */}
          <path d="M 108 135 L 90 155 L 70 155" stroke="url(#neonGlow)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="70" cy="155" r="2.5" fill="#3B82F6" />

          <path d="M 108 135 L 120 150 L 134 150" stroke="url(#neonGlow)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="134" cy="150" r="2.5" fill="#00F2FE" />
        </g>

        {/* Intersecting central node */}
        <circle cx="108" cy="135" r="5" fill="#00F2FE" stroke="#0B1C33" strokeWidth="1.5" />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return <Icon />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <Icon />
        
        {/* ANVILAI LLC Text */}
        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-black tracking-widest text-white uppercase font-sans">
            ANVILAI<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan ml-1">LLC</span>
          </h1>
          <p className="mt-2 text-xs md:text-sm font-bold tracking-[0.3em] text-slate-400 uppercase font-mono">
            AI VOICE & AUTOMATION
          </p>
        </div>
      </div>
    );
  }

  // Variant: 'full' (horizontal layout for navbar)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <Icon />
      <div className="flex flex-col">
        <span className="text-xl font-black text-white tracking-tighter leading-none flex items-center">
          ANVILAI
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan font-black ml-1">
            LLC
          </span>
        </span>
        <span className="text-[9px] font-bold tracking-[0.22em] text-slate-400 uppercase font-mono mt-1">
          AI & Voice Automation
        </span>
      </div>
    </div>
  );
};
