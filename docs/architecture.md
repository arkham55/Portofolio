# Software Architecture & Requirements Specification

This document details the software architecture, design requirements, error handling guidelines, and security policies for the Premium Personal Portfolio Website.

---

## 📋 1. Functional Specifications

### navbar

- **Layout**: Fixed top, screen-wide with glassmorphism backdrop filter (`backdrop-blur`).
- **Features**:
  - Logo branding linking to top.
  - Active section indicator dynamically highlighting navigation links on scroll.
  - Scroll progress bar at the very top of the screen.
  - Theme toggle supporting Dark (default) and Light themes.
  - Mobile Menu: Dynamic slide-out Drawer or overlay menu for mobile viewports.

### hero

- **Layout**: Full-screen or large viewport height layout with large, premium typography.
- **Visuals**: Animated interactive grid background with hover glow effect.
- **Dynamic Content**:
  - Auto-typing titles: "Web Developer", "Backend Developer", "Laravel Developer", "Software Engineer".
- **CTA Actions**:
  - "Download CV" (direct download of local PDF asset).
  - "View Projects" (smooth scroll to projects section).
  - "Contact Me" (smooth scroll to contact form).
  - "GitHub" (opens external GitHub profile in a new tab).

### about

- **Layout**: Split grid layout with visual profile area on one side and structured info card grid on the other.
- **Info displayed**: Name, University, Major, Faculty, GPA, Location, Email, GitHub.

### education

- **Layout**: Custom card layouts highlighting degree, university, timeline (2023 - Present), and GPA badge (3.54 / 4.00).

### achievements

- **Layout**: Counter metrics showing GPA, Projects counts, GitHub repositories, Certificates count, and Years of Learning.

### technical skills & tech stack

- **Layout**: Categorized grid structure showing languages (PHP, Python, JS, TS, HTML, CSS), Frameworks (Laravel, Next.js, React, Bootstrap, TailwindCSS), Databases (MySQL), and Tools (Git, GitHub, Postman, VS Code, Figma).
- **Interactions**: Interactive hover zoom and gradient border glow effects on category cards.

### featured projects & project details

- **Layout**: Interactive card grid layout.
- **Details per project**:
  - Media/Screenshot gallery.
  - Context: Overview, Problem, Research, Solution, Architecture diagram layout, Tech Stack tag system.
  - Lessons Learned, Challenges, and Future Improvements.
  - CTA links to GitHub repository and Live Demo deployment.

### organization & certificates

- **Layout**: Vertically aligned timeline for organization experience (Engineering Technology Student Organization) and horizontal scroll/grid layouts for certificates (Internship Preparation Certificate).

### github activity

- **Source**: Dynamic API integration fetching data from GitHub REST API (`api.github.com`).
- **Data displayed**:
  - Pinned/featured repositories.
  - Repository list, followers, and language statistics.
  - Contribution activity matrix.
  - Latest commit feed.

### contact

- **Layout**: Dedicated contact section with status badges ("Available for Internship").
- **CTAs**: Copy email address button, open GitHub, open WhatsApp.

---

## ⚡ 2. Error Handling & State Machine

Every asynchronous request (specifically GitHub API fetch) must support five explicit states to prevent layout shifts or empty screens:

| State       | UI Representation                                                     | Actions / User Feedback                            |
| :---------- | :-------------------------------------------------------------------- | :------------------------------------------------- |
| **Loading** | Tailwind CSS pulsing skeleton containers matching card dimensions.    | Interactivity is locked; skeleton remains visible. |
| **Success** | Gracefully replaces skeleton loaders with raw animated data cards.    | Interactive links active.                          |
| **Empty**   | Styled clean illustration or icon with "No data found" alert message. | Standard messaging, fallback static data defaults. |
| **Error**   | Red/yellow warning border with "Failed to load data" banner.          | Safe failure boundaries, error logs to console.    |
| **Retry**   | "Retry connection" interactive action button.                         | Reload action trigger to fetch API again.          |

---

## 🔒 3. Security Headers & CSP

The application must be configured to supply secure request headers:

### Content Security Policy (CSP)

```text
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;
style-src 'self' 'unsafe-inline';
img-src 'self' blob: data: https://avatars.githubusercontent.com https://images.unsplash.com;
connect-src 'self' https://api.github.com https://vitals.vercel-insights.com;
frame-src 'self';
```

### Security Directives

- **X-Frame-Options**: `DENY` (prevents clickjacking attacks).
- **X-Content-Type-Options**: `nosniff` (stops MIME sniffing).
- **Referrer-Policy**: `strict-origin-when-cross-origin`.
- **Permissions-Policy**: `camera=(), microphone=(), geolocation=()`.
