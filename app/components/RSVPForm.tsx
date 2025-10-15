'use client';

import { useState } from 'react';

interface RSVPFormProps {
  eventType: 'workshop' | 'party';
  onClose: () => void;
}

export default function RSVPForm({ eventType, onClose }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    house: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const eventDetails = eventType === 'workshop' 
    ? { title: 'Mask Making Workshop', time: 'October 24th, 2025 • 5:30 PM' }
    : { title: 'Masquerade Party', time: 'October 24th, 2025 • 10:00 PM' };

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
        body: JSON.stringify({
          ...formData,
          eventType,
        }),
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
      <div className="bg-black border border-cream max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cream hover:text-cream/60 text-2xl font-mono"
        >
          ×
        </button>

        <h2 className="font-serif text-3xl text-cream mb-2">{eventDetails.title}</h2>
        <p className="font-mono text-cream/60 text-xs tracking-wider mb-8">{eventDetails.time}</p>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <p className="font-mono text-cream text-sm tracking-widest mb-2">CONFIRMED</p>
            <p className="font-serif text-cream/60 italic">See you there...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-cream/60 text-xs tracking-wider mb-2">NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-cream/30 px-4 py-2 text-cream focus:border-cream focus:outline-none font-serif"
              />
            </div>

            <div>
              <label className="block font-mono text-cream/60 text-xs tracking-wider mb-2">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-cream/30 px-4 py-2 text-cream focus:border-cream focus:outline-none font-serif"
              />
            </div>

            <div>
              <label className="block font-mono text-cream/60 text-xs tracking-wider mb-2">HOUSE</label>
              <input
                type="text"
                required
                value={formData.house}
                onChange={(e) => setFormData({ ...formData, house: e.target.value })}
                className="w-full bg-black border border-cream/30 px-4 py-2 text-cream focus:border-cream focus:outline-none font-serif"
                placeholder="Your house name"
              />
            </div>

            {submitStatus === 'error' && (
              <p className="font-mono text-red-400 text-xs tracking-wider">ERROR: Please try again</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border border-cream text-cream font-mono text-xs tracking-widest py-3 hover:bg-cream hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'SUBMITTING...' : '[ CONFIRM ]'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
