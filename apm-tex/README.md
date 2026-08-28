# APM TEX

A standalone editorial fashion showroom site for APM TEX, Vadakankulam. No build step is required.

Run with VS Code Live Server, `npx serve .`, or `python -m http.server 8000` from this folder.

The page uses optional Google Fonts, Unsplash imagery and GSAP CDNs. It remains navigable with native scrolling, system fonts, image fallbacks and IntersectionObserver motion if any CDN is unavailable.

## Updating business data and photography

All business details, WhatsApp/map links, collection categories, and temporary image URLs live in `data.js`. Replace only those values when APM TEX supplies original photography; the galleries, viewers, and motion system will continue to work without HTML changes.

Temporary images are sourced from Unsplash for the presentational build and should be replaced with licensed APM TEX-owned imagery before public launch.
