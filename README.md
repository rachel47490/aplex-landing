# Apex Solutions Landing Page

A responsive B2B landing page for Apex Solutions, built with plain HTML, CSS and a small amount of JavaScript. The code is organized around a design-token system so the brand can be changed in one place.

## Features
- Sticky navigation with a mobile menu
- Hero, features, results and call-to-action sections
- Fully responsive, mobile-first layout
- Accessible: skip link, visible focus states, keyboard-friendly menu

## Project structure
```
apex-landing/
├── index.html
├── main.css          # imports everything in order
├── tokens.css        # all design tokens (colors, spacing, type)
├── reset.css         # box-model reset
├── base.css          # global element styles
├── layout.css        # container, sections, grid
├── button.css        # components
├── navbar.css
├── hero.css
├── card.css
├── stat.css
├── cta.css
├── footer.css
└── nav.js            # mobile menu toggle
```

## Engineering standards
- **No magic numbers:** every color, spacing value, font size and radius is a custom property defined in `tokens.css`. Other files only use `var(--token)`.
- **No inline styles:** all styling lives in the CSS files.
- **Specificity management:** single-class BEM selectors (`.card__title`), no IDs, no `!important`.
- **Box-model precision:** global `box-sizing: border-box` and zero default margins in `reset.css`.
- **Modularity:** one CSS file per component, imported through `main.css`.

## Responsive breakpoints
| Name | Min width |
|------|-----------|
| md   | 48rem (768px) |
| lg   | 64rem (1024px) |

Media queries cannot read custom properties, so these values are repeated in the `@media` rules and documented in `tokens.css`.

## Run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/rachel47490/aplex-landing.git
   ```
2. Open `index.html` in a browser.

## Customizing the brand
Edit the values in `tokens.css`. Changes apply across the whole page.

## Git workflow
- `main` is always stable; no direct commits.
- Work happens on feature branches such as `feature/apex-landing-page`.
- Commits are small and use the format `type: description` (`feat`, `fix`, `docs`, `refactor`).
- Changes are merged through reviewed pull requests.

## Author
AYUEN RACHEL LUETH