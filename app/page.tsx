'use client';

import { useState } from 'react';
import RSVPForm from './components/RSVPForm';
import GlitchText from './components/GlitchText';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex flex-col lg:flex-row">

      <div className="w-full h-screen flex flex-col lg:flex-row relative">
        {/* Left - Full Bleed GIF */}
        <div className="w-full lg:w-1/2 relative h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/masquerade01.gif"
            alt="Masquerade"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-white/5 mix-blend-overlay animate-pulse" />
          
          {/* Random glitch bars */}
          <div className="absolute top-[20%] left-0 w-full h-[2px] bg-white/30 animate-pulse" />
          <div className="absolute top-[60%] left-0 w-full h-[3px] bg-white/20" style={{ animationDelay: '0.7s' }} />
        </div>

        {/* Vertical Glitchy Running Text Border */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[4px] bg-white/30 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-start py-4 animate-scroll">
            <GlitchText 
              text="MASQUERADE_MASQUERADE_MASQUERADE_MASQUERADE_MASQUERADE_MASQUERADE_MASQUERADE_MASQUERADE_MASQUERADE_MASQUERADE_"
              className="font-mono text-white text-sm tracking-widest opacity-80 transform -rotate-90 origin-center whitespace-nowrap"
              glitchChance={0.08}
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-8 px-12 lg:px-16 xl:px-24">
          <div className="space-y-4">
            <GlitchText 
              text="SYSTEM_ALERT_" 
              className="font-mono text-white text-xs tracking-widest opacity-60"
              glitchChance={0.05}
            />
            <h1 className="font-serif text-6xl lg:text-7xl text-white leading-tight">
              <GlitchText 
                text="Masquerade" 
                glitchChance={0.02}
              />
            </h1>
          </div>
          
          <div className="space-y-3 font-mono text-sm text-white/80">
            <GlitchText 
              text="EVENING_PROTOCOL" 
              className="tracking-wider block"
              glitchChance={0.04}
            />
            <p className="text-white">October 24th, 2025</p>
            <GlitchText 
              text="22:00_HRS" 
              className="tracking-widest block"
              glitchChance={0.04}
            />
            <div className="pt-2 border-t border-white/20 mt-4">
              <p className="text-white/60 text-xs tracking-wider">LOCATION:</p>
              <p className="text-white text-sm">Adams Pool Theater</p>
              <p className="text-white/40 text-xs italic mt-1">Unseen space, hasn't been open in nearly a decade</p>
            </div>
          </div>

          <div className="space-y-4 w-full">
            <button
              onClick={() => setShowForm(true)}
              className="border-2 border-white text-white font-mono text-xs tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            >
              <GlitchText text="[ RSVP_NOW ]" glitchChance={0.03} />
            </button>
            
            <p className="font-mono text-white/40 text-xs tracking-wider">
              <GlitchText 
                text="MASKS_REQUIRED // IDENTITY_OPTIONAL" 
                glitchChance={0.02}
              />
            </p>

            {/* Map Image */}
            <div className="w-[200px] mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/map.png"
                alt="Map to Adams Pool Theater"
                className="w-full h-auto border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Form Modal */}
      {showForm && (
        <RSVPForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
