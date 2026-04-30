# Blessed Francis Xavier Seelos Catholic Church — Website

Static site for the parish of Blessed Francis Xavier Seelos, located at 3037 Dauphine Street in the Bywater of New Orleans. Deployed on **Cloudflare Pages** from this GitHub repo.

- Production URL: https://seeloschurchno.org/ (target — connect via Cloudflare Pages)
- Repo: https://github.com/Kpedeaux/BlessedSeelos
- Maintainer: Kevin (volunteer) — handover-ready.

---

## Stack

- **Static HTML / CSS / JS** — no build step, no framework. Edit a page, push to `main`, Cloudflare deploys.
- **Cloudflare Pages** — hosting, CDN, free TLS, global edge.
- **Google Fonts** — Cormorant Garamond (display) + Source Sans 3 (body), loaded with `display=swap`.
- **Optimized images** — JPEG + WebP at 4 responsive widths each, served via `<picture>` with `srcset` + `sizes`.

## Project layout

```
.
├── index.html               # Home
├── mass-times.html          # Mass / Confession / Adoration
├── sacraments.html          # Baptism, Marriage, RCIA, etc.
├── ministries.html          # Liturgical / Formational / Service / Communities
├── history.html             # Parish history + Stories from the Fire
├── staff.html               # Pastor + parish staff
├── visit.html               # Address, map, contact
├── 404.html                 # Friendly Not Found
├── sitemap.xml
├── robots.txt
├── _headers                 # Cloudflare Pages: security + caching
├── _redirects               # Cloudflare Pages: legacy URL → new path
├── assets/
│   ├── css/styles.css       # Single design-token-driven stylesheet
│   ├── js/main.js           # Mobile nav, schedule "today" highlight
│   ├── img/                 # Optimized JPG + WEBP at multiple widths
│   └── icons/               # favicon (.ico, .png variants)
└── README.md
```

## Editing content

Each page is a complete HTML file with the header and footer baked in. Find the section, edit the prose, save, push.

- **Mass times** — `mass-times.html` and the home-page teaser block in `index.html`. Update the `<div class="schedule__row">` blocks.
- **Staff** — `staff.html`. Each row of the `.contact-table` is one person.
- **History** — `history.html`. Timeline entries are `<div class="timeline__entry">`.
- **Sacraments** — `sacraments.html`. Anchor IDs (`#baptism`, `#marriage`, etc.) are linked from the on-page nav.

## Local preview

Any static server. The simplest:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy to Cloudflare Pages

The site is plain static files — no build command needed.

1. In Cloudflare dashboard → **Pages → Create a project → Connect to Git**.
2. Pick this repo (`Kpedeaux/BlessedSeelos`).
3. Production branch: `main`.
4. **Build command:** *(leave blank)*
5. **Build output directory:** `/`
6. Click **Save and Deploy**.

After the first successful deploy, attach a custom domain (e.g. `seeloschurchno.org`) under **Custom domains** in the Pages project. Cloudflare will issue and renew the TLS cert automatically.

## Update a single page (the typical workflow)

```bash
# pull the latest
git pull

# edit a page in your editor of choice
# ...

# push the change
git add .
git commit -m "Update Mass times for Holy Week"
git push origin main
```

Cloudflare Pages will redeploy within ~30 seconds.

## License & credits

All photos courtesy of Kevin Pedeaux (parishioner). Content compiled from the parish&rsquo;s eCatholic site and verified with independent sources (Wikipedia, SAH Archipedia, Archdiocese of New Orleans). No third-party copyrighted material is reproduced beyond fair-use bounds.
