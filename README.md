# 🎭 Masquerade RSVP Website

A stunning masquerade-themed RSVP website featuring a unique aesthetic that blends old oil paintings with modern tech/CV frame overlays in vibrant colors. Built with Next.js and designed for quick deployment on Vercel.

## ✨ Features

- **Dual Event RSVP System**: Separate RSVPs for Mask Making Workshop (5:30 PM) and Masquerade Party (10:00 PM)
- **Unique Design Aesthetic**: Old-world Cooper BT typography mixed with pixel fonts and neon tech overlays
- **Smooth Modal Forms**: Beautiful form transitions with tech-inspired styling
- **Airtable Integration**: All RSVPs automatically saved to your Airtable base
- **Responsive Design**: Works beautifully on desktop and mobile devices

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

### 3. Airtable Schema

Your Airtable table should have these fields:
- `name` (Single line text)
- `email` (Email)
- `house` (Single line text)
- `event` (Multiple select with options: "workshop", "party")

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## 🎨 Customization

### Replace the GIF
The masquerade GIF is located at `/public/masquerade.gif`. Replace it with your own GIF (keep the same filename or update the path in `app/page.tsx`).

### Update Event Details
Edit the event dates and times in `app/page.tsx` and `app/components/RSVPForm.tsx`.

### Modify Colors
The design uses Tailwind CSS with custom colors:
- Cyan (`cyan-400`, `cyan-500`) for tech overlays
- Pink/Purple (`pink-500`, `purple-500`) for gradients
- Lime (`lime-400`, `lime-500`) for accents
- Amber (`amber-100`, `amber-200`) for classic text

## 📦 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add your environment variables in the Vercel dashboard
5. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Fonts**: Cooper BT (serif) + Press Start 2P (pixel font)
- **Backend**: Next.js API Routes
- **Database**: Airtable
- **Deployment**: Vercel

## 📝 Notes

- The site uses Google Fonts for the pixel font (Press Start 2P)
- Cooper BT falls back to Copperplate and Georgia if unavailable
- All form submissions are validated before sending to Airtable
- The design includes scanline effects and animated CV frames for that retro-futuristic aesthetic

## 🎭 Event Details

- **Mask Making Workshop**: October 24th, 2025 at 5:30 PM
- **Masquerade Party**: October 24th, 2025 at 10:00 PM

---

Built with 💜 for an unforgettable masquerade experience
