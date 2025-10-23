# 🎭 Masquerade Party RSVP

A cyberpunk-themed RSVP website for a masquerade party with glitchy aesthetics and dynamic text effects. Built with Next.js and designed for quick deployment.

## ✨ Features

- **Glitchy Cyberpunk Design**: White borders with pulsing animations and scanline effects
- **Dynamic Glitch Text**: Text randomly changes characters to Greek letters, symbols, and katakana
- **Square GIF Display**: Left-side square GIF with glowing white border
- **Airtable Integration**: RSVPs are automatically saved to Airtable
- **Responsive Layout**: Works on mobile and desktop

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory with your Airtable credentials:

```bash
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=RSVPs
```

**How to get your Airtable credentials:**

1. **API Key**: Go to [airtable.com/account](https://airtable.com/account) → Generate a personal access token
2. **Base ID**: Open your Airtable base → Help (?) → API documentation → The base ID is in the URL
3. **Table Name**: Should match your table name exactly (default: "RSVPs")

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open Browser

Open [http://localhost:3000](http://localhost:3000)

## Customization

### Change the GIF
Update the image URL in `app/page.tsx` (line 39):
```tsx
src="https://i.imgur.com/TbLZRlq.gif"
```

### Adjust Glitch Intensity
Modify the `glitchChance` prop in `GlitchText` components (0-1 scale):
```tsx
<GlitchText text="Your Text" glitchChance={0.03} />
```

### Event Details
Update date/time in `app/page.tsx` (line 74) and `app/components/RSVPForm.tsx` (line 59)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Next.js API Routes
- **Database**: Airtable API

## 📝 Notes

- The React/Next.js TypeScript errors in the IDE are normal and will resolve when running the dev server
- All form submissions are validated before sending to Airtable
- The glitch effect runs every 150ms and randomly changes characters
- The design includes scanline effects and pulsing borders for a cyberpunk aesthetic

---

Built with 💜 for an unforgettable masquerade experience
