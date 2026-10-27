# Maison Éloi Brand and Accessibility Guide

Use this guide as the shared visual and accessibility rule for every page. New pages should extend the shared layout and use the existing global CSS tokens rather than introducing their own palette or typography.

## Color palette

- `#0B3D2E` — deep forest green for primary brand surfaces and strong emphasis.
- `#145A43` — dark green for buttons, links, and secondary brand elements.
- `#2F8F6F` — medium sea green for accents and focus indicators; do not use for small text on white unless its contrast is verified.
- `#D7C7A1` — beige/sand for subtle surfaces and decorative dividers, not for text on white.
- `#0F0F0F` — near-black for primary text. This corrects the invalid `#OFOFOF` value, which used letter O instead of zero.
- `#FFFFFF` — clean white for page backgrounds and high-contrast content surfaces.

Keep the overall page clean and restrained: white as the primary background, forest greens for brand structure and actions, and sand as a limited warm accent. Use dark text on light surfaces and white text on dark green surfaces. Meet WCAG AA contrast targets: at least 4.5:1 for normal text and 3:1 for large text and meaningful UI boundaries.

## Typography

- Use Papyrus for display headings and small brand flourishes only; provide a readable fallback because Papyrus is not available on every device.
- Use DM Sans or a comparable clean sans-serif for body copy, navigation, product details, forms, and controls.
- Keep type sizes readable, line lengths comfortable, and heading levels semantic and ordered.

## Shared page and accessibility rules

- Reuse the shared navbar and footer across all pages; keep page-specific content inside the main content area.
- Use semantic landmarks (`header`, `nav`, `main`, `section`, and `footer`) and one clear `h1` per page, followed by ordered section headings.
- Give inputs, buttons, menus, and navigation landmarks accessible names. Keep all interactive elements keyboard-operable and visibly focused.
- Provide meaningful alt text for informative images and empty alt text for decorative images.
- Do not rely on color alone to communicate meaning. Avoid low-contrast sand or medium-green text on white.
- Preserve responsive layouts, readable content at mobile sizes, and reduced-motion preferences.
