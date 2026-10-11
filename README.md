# Julian Hon Portfolio

A simple, responsive portfolio for Julian Hon, built with plain HTML, CSS, and JavaScript. It highlights software projects, technical skills, and contact information without a build step or framework.

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
| `script.js` | Project detail dialog content and interaction |
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
