# Isha Jha · Personal portfolio

A small, dependency-free portfolio built as a static website. Its visual language is an editorial field notebook: warm paper, botanical green, quiet data diagrams, and a tiny sleeping desk cat.

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server. For example, with Python:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000`. The site uses native JavaScript ES modules, so opening it directly with `file://` may be blocked by some browsers; use a local server when needed.

## Pages and routes

The hash router supports Home, About, Experience, Toolkit, Projects, three individual project pages, Notes, individual note pages, and Contact. Hash URLs work on static hosts, including GitHub Pages, without server rewrite rules. Back/forward navigation and direct links are supported.

## Update content

- Edit `data/profile.js` to change the introduction, role, interests, skills, timeline, project text, and project links.
- `email`, `linkedin`, `github`, and the included `Isha_DataAnalyst_2yrs.pdf` résumé are configured in `data/profile.js`. Update them there when they change.
- Project directory cards and detail pages are generated from the `projects` array. Each project has a GitHub source link and a live demo URL supplied by Isha.
- Add original articles in `data/articles.js` as objects with `slug`, `title`, `date` (`YYYY-MM-DD`), optional `topic` and `description`, and a `body` array of paragraphs. The Notes index and article pages are generated from that list.
- Replace the CSS project diagrams in `src/app.js` with screenshots when genuine screenshots are available. Current source project folders did not contain screenshots.

## Deploy to GitHub Pages

1. Put this folder in a GitHub repository and push the `main` branch.
2. In repository **Settings → Pages**, set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes the static site on each push to `main` and on manual dispatch.

The portfolio repository remote and public deployment URL are not configured in this workspace yet. GitHub displays the site URL after the first successful Pages deployment.

## Project source review

The portfolio descriptions were checked against the READMEs and implementation modules in the sibling directories `automated_pipeline`, `financial-reconciliation-engine`, and `customer-retention-revenue-intelligence`. Their repositories and the three supplied live app URLs are linked in the project data. The source projects remain separate and untouched. No screenshot files were found. Synthetic-data and local-app limitations are included on each detail page.

## Implementation notes

The site uses semantic HTML, responsive CSS, native JS modules and a small hash router. It has no runtime dependencies, backend, secrets, or external data services. Google Fonts are an optional remote font enhancement; system serif/sans fallbacks are provided. The GitHub Pages workflow publishes the checked-in static files directly.
