'use client';

import { useState } from 'react';

interface RSVPFormProps {
  onClose: () => void;
}

export default function RSVPForm({ onClose }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    house: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black border-2 border-white max-w-md w-full p-8 relative shadow-[0_0_30px_rgba(255,255,255,0.3)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white/60 text-2xl font-mono"
        >
          ×
        </button>

        <h2 className="font-serif text-3xl text-white mb-2">Masquerade Party</h2>
        <p className="font-mono text-white/60 text-xs tracking-wider mb-8">October 24th, 2025 • 10:00 PM</p>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <p className="font-mono text-white text-sm tracking-widest mb-2">CONFIRMED</p>
            <p className="font-serif text-white/60 italic">See you there...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-white/60 text-xs tracking-wider mb-2">NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-white/30 px-4 py-2 text-white focus:border-white focus:outline-none font-serif"
              />
            </div>

            <div>
              <label className="block font-mono text-white/60 text-xs tracking-wider mb-2">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-white/30 px-4 py-2 text-white focus:border-white focus:outline-none font-serif"
              />
            </div>

            <div>
              <label className="block font-mono text-white/60 text-xs tracking-wider mb-2">HOUSE</label>
              <input
                type="text"
                required
                value={formData.house}
                onChange={(e) => setFormData({ ...formData, house: e.target.value })}
                className="w-full bg-black border border-white/30 px-4 py-2 text-white focus:border-white focus:outline-none font-serif"
                placeholder="Your house name"
              />
            </div>

            {submitStatus === 'error' && (
              <p className="font-mono text-red-400 text-xs tracking-wider">ERROR: Please try again</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-2 border-white text-white font-mono text-xs tracking-widest py-3 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              {isSubmitting ? 'SUBMITTING...' : '[ CONFIRM ]'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
