'use client';

import { useState } from 'react';
import Image from 'next/image';
import RSVPForm from './components/RSVPForm';

export default function Home() {
  const [activeForm, setActiveForm] = useState<'workshop' | 'party' | null>(null);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex flex-col lg:flex-row">
      {/* Sound wave lines - glitch effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-cream animate-pulse" />
        <div className="absolute top-[40%] left-0 w-full h-[2px] bg-cream opacity-30" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-cream animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-cream opacity-40" />
      </div>

      {/* Left Column - Workshop */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-12 relative z-10">
        <div className="max-w-sm space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-cream text-xs tracking-widest opacity-60">ISSUE 01_</p>
            <h2 className="font-serif text-5xl lg:text-6xl text-cream leading-tight">
              Mask<br/>Making
            </h2>
          </div>
          
          <div className="space-y-3 font-mono text-sm text-cream/80">
            <p className="tracking-wider">WORKSHOP SESSION</p>
            <p className="text-cream">October 24th, 2025</p>
            <p className="tracking-widest">17:30 HRS</p>
          </div>

          <button
            onClick={() => setActiveForm('workshop')}
            className="border border-cream text-cream font-mono text-xs tracking-widest px-6 py-3 hover:bg-cream hover:text-black transition-all duration-300"
          >
            [ RSVP ]
          </button>
        </div>
      </div>

      {/* Center - Full Height GIF */}
      <div className="w-full lg:w-[400px] xl:w-[500px] h-[400px] lg:h-auto relative">
        <div className="absolute inset-0">
          <Image
            src="/masquerade.gif"
            alt="Masquerade"
            fill
            className="object-cover opacity-90"
            priority
            unoptimized
          />
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>
      </div>

      {/* Right Column - Party */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-12 relative z-10 order-3">
        <div className="max-w-sm space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-cream text-xs tracking-widest opacity-60">CONTINUOUS OPERATION</p>
            <h2 className="font-serif text-5xl lg:text-6xl text-cream leading-tight">
              Masque-<br/>rade
            </h2>
          </div>
          
          <div className="space-y-3 font-mono text-sm text-cream/80">
            <p className="tracking-wider">EVENING ASSEMBLY</p>
            <p className="text-cream">October 24th, 2025</p>
            <p className="tracking-widest">22:00 HRS</p>
          </div>

          <button
            onClick={() => setActiveForm('party')}
            className="border border-cream text-cream font-mono text-xs tracking-widest px-6 py-3 hover:bg-cream hover:text-black transition-all duration-300"
          >
            [ RSVP ]
          </button>
        </div>
      </div>

      {/* RSVP Form Modal */}
      {activeForm && (
        <RSVPForm
          eventType={activeForm}
          onClose={() => setActiveForm(null)}
        />
      )}
    </div>
  );
}
