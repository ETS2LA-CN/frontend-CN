# ETS2LA Design System

## 1. Visual Theme & Atmosphere

ETS2LA (Euro Truck Simulator 2 Local Assistant) uses a modern, dashboard-style interface with a focus on functionality and clarity. The design is built on a "dark-first" philosophy, where the interface is designed to be non-intrusive for users who are often playing in low-light environments. The visual language is clean, using subtle borders and shadows to create depth, while maintaining a compact layout that maximizes screen real estate.

The interface supports both Light and Dark modes, with the Dark mode being the primary experience (`#131316` background). It uses the **Geist** font family for its clean, geometric look, which is well-suited for a technical application. The overall atmosphere is professional, utilitarian, and responsive, adapting seamlessly to both desktop and mobile views.

**Key Characteristics:**
- **Primary Dark Theme**: Near-black background (`#131316`) with high-contrast text (`#fafafa`).
- **Clean Geometry**: Consistent `8px` (0.5rem) border radius across all components.
- **Geist Typography**: Modern sans-serif and monospace fonts for readability.
- **Sidebar-Centric Layout**: A persistent sidebar for navigation, providing a structured hierarchy.
- **Dynamic Elements**: Seasonal effects like snowfall and fireworks for user engagement.
- **Tactile Feedback**: Subtle hover states and smooth transitions (`transition-all`).

---

## 2. Color Palette & Roles

### Backgrounds & Surfaces (Dark Mode)
- **Base Background**: `#131316` (`hsl(240 6% 8%)`) - The deepest layer of the application.
- **Sidebar Background**: `#18181b` (`hsl(240 5.9% 10%)`) - Slightly lighter than the base background.
- **Card Surface**: `#09090b` (`hsl(240 10% 3.9%)`) - Used for elevated content blocks.
- **Popovers/Menus**: `#09090b` (`hsl(240 10% 3.9%)`) - Consistent with card surfaces.

### Text & Accents
- **Foreground**: `#fafafa` (`hsl(0 0% 98%)`) - Primary text for maximum readability.
- **Muted Text**: `#a1a1aa` (`hsl(240 5% 64.9%)`) - For secondary labels and metadata.
- **Primary Accent**: `#fafafa` - The primary action color in dark mode (inverted).
- **Secondary Accent**: `#27272a` (`hsl(240 3.7% 15.9%)`) - Used for inactive states and borders.

### Semantic Colors
- **Destructive**: `#7f1d1d` (`hsl(0 62.8% 30.6%)`) - For dangerous actions (e.g., delete).
- **Ko-fi Brand**: `#FF5E5B` - Dedicated color for support/donation buttons.
- **Borders**: `#27272a` (`hsl(240 3.7% 15.9%)`) - Subtle dividers for structure.

---

## 3. Typography Rules

### Font Families
- **Sans (UI/Body)**: `Geist Sans`, Fallbacks: `Arial, Helvetica, sans-serif`.
- **Mono (Code/Data)**: `Geist Mono`, Fallbacks: `monospace`.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Heading 1** | Sans | 24px (1.5rem) | 700 | 1.2 | Page titles |
| **Heading 2** | Sans | 20px (1.25rem) | 600 | 1.25 | Section headers |
| **Body (Bold)** | Sans | 14px (0.875rem) | 600 | 1.5 | Emphasis |
| **Body (Regular)** | Sans | 14px (0.875rem) | 400 | 1.5 | Standard text |
| **Small/Caption** | Sans | 12px (0.75rem) | 400 | 1.4 | Metadata, small labels |
| **Mono Data** | Mono | 14px (0.875rem) | 400 | 1.5 | Technical data, code |

---

## 4. Component Stylings

### Buttons
All buttons use `rounded-md` (8px) and `text-sm font-medium`.

- **Primary**: Background `#fafafa`, Text `#18181b`. High contrast for main actions.
- **Secondary**: Background `#27272a`, Text `#fafafa`. For secondary actions.
- **Outline**: Transparent background, border `#27272a`, Text `#fafafa`.
- **Ghost**: No background/border, background on hover. For low-priority actions.
- **Destructive**: Background `#7f1d1d`, Text `#fafafa`. For irreversible actions.

### Cards & Containers
- **Background**: `#09090b` (Dark) / `#ffffff` (Light).
- **Border**: `1px solid #27272a` (Dark) / `#e4e4e7` (Light).
- **Radius**: `8px` (0.5rem).
- **Padding**: Standardized at `16px` (1rem) or `24px` (1.5rem).

### Inputs & Forms
- **Background**: `#18181b` (Dark) / `#f4f4f5` (Light).
- **Border**: `1px solid #27272a`.
- **Focus**: Ring color `hsl(240 4.9% 83.9%)` (Dark) / `hsl(240 10% 25%)` (Light).
- **Radius**: `8px`.

---

## 5. Layout Principles

### Spacing System
- **Base Unit**: 4px.
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.
- **Gaps**: Standard gap between elements in a list or grid is `12px` or `16px`.

### Structure
- **Sidebar**: Persistent navigation on the left (collapsible on mobile).
- **Sidebar Inset**: The main content area that "sits" inside the sidebar structure.
- **Responsiveness**:
  - **Desktop**: Full sidebar visible, multi-column grids.
  - **Mobile**: Collapsed sidebar (trigger via hamburger), single-column layouts.

---

## 6. Depth & Elevation

| Level | Background | Shadow | Use |
| :--- | :--- | :--- | :--- |
| **Base (0)** | `#131316` | None | Main page background |
| **Surface (1)** | `#09090b` | None | Cards, Sidebar |
| **Elevated (2)** | `#09090b` | Subtle | Popovers, Dropdowns |
| **Interactive** | Hover lightens | Shadow-sm | Buttons, Hoverable Cards |

---

## 7. Do's and Don'ts

### Do
- Maintain the `8px` radius for consistency across all elements.
- Use `Geist Sans` for UI text and `Geist Mono` for technical/numeric data.
- Ensure all interactive elements have visible hover and focus states.
- Keep the interface clean by using spacing instead of heavy borders where possible.
- Use `hsl` variables from `globals.css` to ensure theme compatibility.

### Don't
- Don't use pure black (`#000000`) for backgrounds; use `#131316`.
- Don't hardcode colors; always use Tailwind utility classes or CSS variables.
- Don't mix different border radii in the same view.
- Don't clutter the UI; prioritize content using the existing spacing system.

---

## 8. Agent Prompt Guide

### Quick Color Reference
- **Background**: `#131316` (Dark) / `#ffffff` (Light)
- **Foreground**: `#fafafa` (Dark) / `#3f3f46` (Light)
- **Primary**: `#fafafa` (Dark) / `#18181b` (Light)
- **Radius**: `0.5rem` (8px)

### Example Component Prompts
- "Create a dark card: #09090b background, 1px solid #27272a border, 8px radius. Title in 16px Geist Sans, bold."
- "Design a primary button: white background, black text, 8px radius, sm size (h-9)."
- "Build a sidebar item: Geist Sans 14px, muted text (#a1a1aa) when inactive, white text when active."
