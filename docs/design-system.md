# Design System Specification

This document details the visual components, typography scales, color palettes, and responsive behavior definitions for the portfolio project.

---

## 🎨 1. Color System

We utilize a custom Tailwinds-compatible semantic color system:

| Role | HEX Code | CSS Variable | Description |
| :--- | :--- | :--- | :--- |
| **Background** | `#020617` | `--background` | Base app background (slate-950 alternative). |
| **Surface** | `#0F172A` | `--card` | Background for cards, lists, dialog wrappers. |
| **Primary** | `#2563EB` | `--primary` | Major buttons, interactive active accents. |
| **Secondary** | `#38BDF8` | `--secondary` | Supplementary highlights, secondary borders. |
| **Success** | `#22C55E` | `--success` | "Available for work" badges, success toasts. |
| **Text** | `#FFFFFF` | `--text-primary` | Standard heading and body text. |
| **Gray** | `#94A3B8` | `--text-muted` | Muted descriptions, metadata labels. |
| **Border** | `#1E293B` | `--border` | Subtle dividers (slate-800). |

---

## ✍️ 2. Typography

The typeface is **Geist** (Sans & Mono).

### Text Sizes
- **Hero Title**: `text-5xl md:text-7xl font-extrabold tracking-tight`
- **Section Title**: `text-3xl md:text-4xl font-bold tracking-tight`
- **Card Title**: `text-xl font-semibold`
- **Body Text**: `text-base text-slate-400 font-normal leading-relaxed`
- **Metadata/Labels**: `text-sm font-medium tracking-wide`

---

## 📏 3. Spacing & Borders

### Spacing Scale
This project adheres to the standard Tailwind spacing system with an emphasis on large, premium whitespace:
- **Hero Padding**: `py-20 md:py-32`
- **Section Spacing**: `py-16 md:py-24`
- **Card Padding**: `p-6 md:p-8`
- **Gap Scale**: `gap-4` (small), `gap-6` (medium), `gap-10` (large layout columns).

### Rounded Corners (Radius Scale)
- **Buttons / Badges**: `rounded-full` or `rounded-lg`
- **Cards / Containers**: `rounded-2xl`
- **Wrappers**: `rounded-3xl`

---

## ✨ 4. Visual Effects & Glassmorphism

To match premium designs (Vercel, Linear), we use modern CSS effects:
- **Glassmorphism rules**:
  - Background: `bg-slate-950/70` or `bg-slate-900/50`
  - Backdrop Blur: `backdrop-blur-md`
  - Border: `border border-slate-800/50`
- **Shadow System**:
  - Subtle cards: `shadow-2xl shadow-slate-950/20`
  - Hover glow: `hover:shadow-blue-500/10` with custom glow layout animations.

---

## 🎬 5. Animation Tokens

Animations are managed with Framer Motion:

| Preset Name | Properties | Transitions |
| :--- | :--- | :--- |
| **Fade In** | `opacity: [0, 1]` | Duration: `0.5s`, ease: `easeOut` |
| **Slide Up** | `y: [20, 0]`, `opacity: [0, 1]` | Duration: `0.6s`, ease: `[0.16, 1, 0.3, 1]` |
| **Scale Hover**| `scale: 1.02` | Duration: `0.2s`, ease: `easeInOut` |
| **Glow Pulse** | `opacity: [0.3, 0.6, 0.3]` | Duration: `4s`, infinite loop |
