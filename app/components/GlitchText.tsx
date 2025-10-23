'use client';

import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchChance?: number; // 0-1, probability of a character glitching
}

const glitchChars = [
  '█', '▓', '▒', '░', '▀', '▄', '▌', '▐', '■', '□',
  'Ω', 'Σ', 'Δ', 'Π', 'Ψ', 'Φ', 'Θ', 'Λ', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ',
  '∆', '∑', '∏', '∫', '∂', '∞', '≈', '≠', '≤', '≥',
  '¡', '¿', '§', '¶', '†', '‡', '‰', '‱',
  'Ⓐ', 'Ⓑ', 'Ⓒ', 'Ⓓ', 'Ⓔ', 'Ⓕ', 'Ⓖ', 'Ⓗ',
  '₿', '₽', '₹', '₺', '₴', '₵',
  '⚡', '⚠', '⚙', '⚛', '⚝', '⚞', '⚟',
  'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

export default function GlitchText({ text, className = '', glitchChance = 0.03 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = text.split('');
      const glitched = chars.map((char) => {
        // Don't glitch spaces
        if (char === ' ' || char === '\n') return char;
        
        // Random chance to glitch this character
        if (Math.random() < glitchChance) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      });
      setDisplayText(glitched.join(''));
    }, 150); // Glitch every 150ms

    return () => clearInterval(interval);
  }, [text, glitchChance]);

  return <span className={className}>{displayText}</span>;
}
