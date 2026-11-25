# Anay Gokarn — Design Portfolio

A plain HTML/CSS/JS portfolio site. It has no build step and no dependencies. Open `index.html` in a browser, or host it on GitHub Pages.

## Structure

```
index.html          Home: photo, name, intro and the featured case studies
portfolio.html      All visible projects in a 3-column card grid
project.html        Case-study template, filled in from the ?p=<slug> URL
resume.html         Resume page with a Download PDF button
data/site.js        Your name, photo, tagline, resume and contact links
data/projects.js    Every project and its case-study content (edit this)
data/resume.js      Resume content shown on resume.html
js/main.js          Rendering logic (you rarely need to touch it)
css/styles.css      All styling. Colours and fonts are variables in :root
assets/             Put your images here (e.g. assets/projects/<slug>/...)
```

## Managing projects

Everything happens in **`data/projects.js`**. Each project is one `{ ... }` block in the `window.PROJECTS` list.

| Task | How |
|---|---|
| **Add** | Copy the template at the bottom of the file, give it a unique `slug`, and fill in the fields. Make sure a comma separates it from the block before it. |
| **Remove** | Delete the project's `{ ... }` block. |
| **Edit** | Change any field. Changes appear on refresh. |
| **Hide** | Set `hidden: true`. The project disappears from the home page, the portfolio grid and next/previous links. To preview it, open `project.html?p=<slug>&preview`. |
| **Reorder** | Move blocks up or down. The list order is the order shown on the site. |
| **Feature on home** | Set `featured: true`. The home page shows the first `highlightsCount` featured projects (set in `data/site.js`). |

### Project fields

| Field | Purpose |
|---|---|
| `slug` | Unique ID used in the URL (`project.html?p=slug`). Lowercase, with dashes. |
| `title` | Card and page title. |
| `summary` | The one-line description on the card and under the case-study title. |
| `thumbnail` | Card image (a 4:3 ratio works best). If it's missing, a placeholder shows. |
| `cover` | *(optional)* Large image at the top of the case study. Defaults to `thumbnail`. |
| `hidden` | `true` hides the project from the public site. |
| `featured` | `true` shows the project in the home-page highlights. |
| `year`, `role`, `tools`, `tags` | Shown in the case-study fact bar. The first 3 `tags` also show on the card. |
| `sections` | The case-study content, rendered top to bottom (see below). |
| `theme` | *(optional)* Restyle just this project's case-study page with its own colours and fonts. The site header and footer, and all other pages, stay the same. Keys: `bg`, `surface`, `text`, `muted`, `line`, `accent`, `accentInk`, `fontSans`, `fontDisplay`, `displayWeight` (heading weight, default 400), `googleFonts`. See the Sprout project for an example. |

### Case-study section types

```js
{ type: "text",    heading: "Problem", body: "Paragraph one.\n\nParagraph two." }
{ type: "image",   src: "assets/projects/x/flow.png", alt: "User flow", caption: "...", wide: true }
                   // optional outline: true  (thick border for images whose edges match the page background)
                   // optional key under the image:
                   // legend: [{ label: "Decision", color: "#615299", shape: "diamond" }]  (circle|dot|rect|pill|diamond)
                   // legendBackground: "#022401", legendColor: "#FFFFFF"
{ type: "gallery", heading: "Wireframes", images: [{ src, alt, caption }, ...] }
                   // optional: columns: 4  (fixed column count)
                   // optional: layout: "row" + grow: <width> per image (one row, equal heights)
{ type: "list",    heading: "Key insights", items: ["...", "..."] }
{ type: "quote",   text: "It finally just works.", cite: "Usability participant" }
{ type: "stats",   items: [{ value: "4", label: "rounds of testing" }] }
{ type: "table",   heading: "Comparison", columns: ["A", "B"], highlightColumn: 2,
                   rows: [["Row label", "A value", "B value"]], caption: "..." }
{ type: "wordmarks", background: "#FEDF9E", color: "#022401", googleFonts: ["Bagel Fat One"],
                   groups: [{ label: "Final", box: "#85C02A", lines: [{ font: "'Bagel Fat One'", size: "xl",
                   parts: [{ text: "Sprout", color: "#022401" }] }] }] }
{ type: "uiDemo",    intro: "Try the components…", background: "#022401", panel: "#29530D", color: "#fff",
                   font: "'Bagel Fat One'", googleFonts: ["Bagel Fat One"],
                   buttons: [{ label, bg, fg, hoverBg, activeBg, focusBorder }],
                   field: { label, placeholder, bg, fg, border, hoverBg, caret, errorBorder, errorText, errorMessage, pattern } }
{ type: "palette",   background: "#FEDF9E", color: "#022401", googleFonts: ["Bagel Fat One"],
                   groups: [{ label: "Primary", swatches: [{ name: "Spring Green", hex: "1E750C" }] }],
                   samples: { label: "Contrast", items: [{ text: "12.95 : 1", bg: "#FEDF9E", fg: "#022401" }] } }
```

`body` can be a string, with a blank line between paragraphs, or an array of paragraphs. It can include simple HTML such as `<strong>` or `<a href="...">`.

## Updating the resume

The resume page is built from `data/resume.js`. The **Download PDF** button serves `assets/resume/Anay-Gokarn-Resume.pdf`. When you update your resume:

1. Replace the PDF in `assets/resume/`. Keep the same file name, or update `pdf` in `data/resume.js`.
2. Update the matching text in `data/resume.js` so the page and the PDF stay in sync.

## Images

The starter data points to images on your current Squarespace site. To make the site independent of Squarespace, save each image into `assets/` and update its path, for example `assets/projects/sprout-festival-design/thumb.jpg`. Do the same for `photo` in `data/site.js`.

## Previewing locally

Double-clicking `index.html` works. For a closer match to the live site, run a local server from this folder:

```
python -m http.server 8000
```

Then open http://localhost:8000. If an edit to `data/projects.js` doesn't show up, hard-refresh with Ctrl+Shift+R.

## Deploying to GitHub Pages

1. Push to `main`.
2. On GitHub, open **Settings → Pages**, set **Source** to *Deploy from a branch*, then choose `main` and `/ (root)`.
3. The site goes live at `https://<username>.github.io/portfolio/`. To use your own domain, add it under the same Pages settings.
