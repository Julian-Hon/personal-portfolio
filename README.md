# Julian Hon Portfolio

A responsive portfolio for Julian Hon, built with plain HTML, CSS, and JavaScript. The CD archive presents a small collection as interactive jewel cases on a virtual shelf.

## Local preview

Open `index.html` directly in a browser, or run a local server from the project folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Home page, projects, and contact information |
| `about.html` | About page, portrait, and technical skills |
| `styles.css` | Layout, typography, responsive styling, and image presentation |
| `theme.css` | Theme, responsive layout, and landing animations |
| `archive.css` | Virtual shelf, jewel cases, and album detail layout |
| `script.js` | Project detail dialog content and interaction |
| `archive.js` | CD selection and album information |
| `cd-library.html` | Interactive CD archive page |
| `images/` | Portrait and project preview images |
| `files/Julian_Hon_Resume.pdf` | Resume linked from the contact section |

## Updating content

- Edit `index.html` to update the introduction, project card text, contact details, and project image paths.
- The contact links in `index.html` point to LinkedIn, GitHub, email, the resume PDF, and Credly. Replace the PDF in `files/` when the resume changes.
- Edit `about.html` to update the biography, skills, and portrait.
- Edit the `projects` list in `script.js` to update the descriptions displayed after a project card is selected.
- Edit the album entries in `archive.js` and the matching cases in `cd-library.html` to update the CD collection. Keep album covers in `images/albums/`.
- Add new images to `images/` and reference them from the matching project card in `index.html`.

## Deployment with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. GitHub will publish the portfolio at `https://<your-github-username>.github.io/<repository-name>/`.

Because this is a static site, no installation, build command, or server configuration is needed. You can later connect a custom domain from the same GitHub Pages settings page.
