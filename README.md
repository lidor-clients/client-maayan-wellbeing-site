# מעין גבסו רג'ואן - אתר בריאות בפשטות

אתר תדמית לליווי נשים לבריאות טבעית, פייס יוגה ומערכת עצבים.

## Tech Stack

- **React 19** + TypeScript
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation bar (responsive)
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services overview
│   ├── Workshop.tsx      # Grow & Glow workshop details
│   ├── LeadMagnets.tsx   # Free gifts with email capture
│   ├── Newsletter.tsx    # WhatsApp & email signup
│   ├── Footer.tsx        # Footer
│   ├── Button.tsx        # Reusable button component
│   └── SectionTitle.tsx  # Reusable section title
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles & Tailwind config
```

## Customization

### Colors

The color palette is defined in `src/index.css` using CSS custom properties:

- **Sage** (`--color-sage-*`) - Primary green tones
- **Warm** (`--color-warm-*`) - Neutral background tones
- **Blush** (`--color-blush-*`) - Accent coral/pink tones

### Contact Information

Update the following placeholders with real information:

1. **WhatsApp number** - Search for `972501234567` and replace
2. **Email address** - Update in `Footer.tsx`
3. **Instagram link** - Update in `Footer.tsx`
4. **WhatsApp group link** - Update in `Newsletter.tsx`

### Images

Replace the placeholder in `Hero.tsx` with Maayan's actual photo.

### Workshop Dates

Update the dates in `Workshop.tsx` and `Services.tsx` if the schedule changes.

## Form Integration

The email capture forms are currently visual only. To connect them to an email service:

1. **Mailchimp** - Use their embedded form or API
2. **ConvertKit** - Use their form builder
3. **Custom backend** - Connect to your own API

Forms are located in:
- `LeadMagnets.tsx` - Free gift downloads
- `Newsletter.tsx` - Email newsletter signup

## Fonts

The site uses Google Fonts loaded via CDN in `index.html`:
- **Heebo** - Primary Hebrew font
- **Rubik** - Secondary Hebrew font

## RTL Support

The site is configured for Hebrew (RTL) in `index.html`:
```html
<html lang="he" dir="rtl">
```

## License

Private project - All rights reserved.
