# Your "We've Moved" site

A single-file website that tells visitors your site has moved.

---

## What to edit

Open `index.html` in any text editor and search for `EDIT:` — every
comment marks something you should change:

| Comment | What to change |
|---|---|
| `EDIT: Page title` | Browser tab name |
| `EDIT: Description` | Google search snippet |
| `EDIT: Replace the URL` | Your actual new website URL (appears in two places) |
| `EDIT: Change "Oops!"` | The big word at the top |
| `EDIT: Main heading` | The h1 text |
| `EDIT: Body text` | The paragraph |
| `EDIT: href = your new URL` | Button destination + label |
| `EDIT: footer text` | Footer line at the bottom |
| `COLOURS` block | Accent colour, background, text colours |

---

## Deploy in 2 minutes (free)

### Netlify (easiest)
1. Go to https://app.netlify.com/drop
2. Drag the `site/` folder onto the page
3. Done — you get a live URL instantly
4. Optionally connect your own domain in Site Settings → Domain Management

### GitHub Pages
1. Create a new repo at github.com
2. Upload `index.html` to the root
3. Go to Settings → Pages → Source: main branch → Save
4. Live at `https://yourusername.github.io/reponame`

### Vercel
1. `npm i -g vercel` then `vercel` inside the `site/` folder
2. Follow the prompts

### Any web host
Upload `index.html` to the public root folder (often called `public_html`
or `www`). That's it.

---

## Custom domain
All platforms above let you point your old domain to this site for free.
That way anyone who visits your old address still ends up seeing this page.
