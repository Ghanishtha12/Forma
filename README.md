# FORMA

FORMA is a small, static Astro storefront for a considered home and lifestyle brand. It uses Astro components and file-based routing, with sample product data and vanilla JavaScript for browser interactions.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The static build is written to `dist/`.

## Pages

- `/` — Homepage
- `/shop` — Product catalog with search and category filters
- `/about` — Brand story and values
- `/products/[slug]` — Product details generated from `src/data/products.js`

## Project notes

- `src/components/` contains the shared header, footer, and product card.
- `src/data/products.js` is the sample catalog; `src/data/cart.js` stores the demo cart in browser local storage.
- Cart actions and newsletter validation are frontend-only. There is no checkout, subscription submission, backend, or database.
- Product and lifestyle photography is loaded from Unsplash; fonts are loaded from Google Fonts.
