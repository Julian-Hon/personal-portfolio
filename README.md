# Julian Hon Portfolio

A responsive portfolio for Julian Hon, built with plain HTML, CSS, and JavaScript. The landing page has a minimal black and white theme with switchable waveform and CD animations. The CD archive page is a placeholder for a future collection.

## Local preview

Open `index.html` directly in a browser, or run a local server from the project folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page structure and portfolio content |
| `styles.css` | Layout, typography, responsive styling, and image presentation |
| `theme.css` | Minimal theme, responsive layout, landing animations, and CD archive styling |
| `script.js` | Project detail dialog content and interaction |
| `cd-library.html` | Placeholder page for the future digital CD library |
| `images/` | Portrait and project preview images |

## Updating content

- Edit `index.html` to update the introduction, project card text, skills, contact details, and image file paths.
- Edit the `projects` list in `script.js` to update the descriptions displayed after a project card is selected.
- Add new images to `images/` and reference them from the matching project card in `index.html`.

## Deployment with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. GitHub will publish the portfolio at `https://<your-github-username>.github.io/<repository-name>/`.

Because this is a static site, no installation, build command, or server configuration is needed. You can later connect a custom domain from the same GitHub Pages settings page.
