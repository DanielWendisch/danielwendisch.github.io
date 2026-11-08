# Daniel Wendisch — personal website

Static website in the Ruby & Forest palette. No installation or build step is needed.

## Contents

- `index.html`: professional biography, MD/PhD title, research, publications, background, GitHub and Google Scholar links.
- `styles.css`: layout and colors.
- `site.js`: section navigation.
- `assets/cv_graph.png`: publication graph only, not a CV document.
- `.nojekyll`: tells GitHub Pages to serve the files directly.
- `README.md`: these instructions.

No CV document, phone number, street address, personal email, or referee contact information is included. The site does contain your name, cities, university affiliations, research interests, and publications. It has no analytics, third-party scripts, or external fonts.

The `noindex` meta tag requests exclusion from cooperating search engines. It is not access control: a public website and public repository remain readable and downloadable. No robots.txt rule blocks crawlers from seeing the noindex tag.

## Start with a new repository

1. Extract this new ZIP into a new folder and open `index.html` to review the content locally.
2. Create a new repository under `DanielWendisch` named `danielwendisch.github.io`. Choose Private initially and enable Add README.
3. Choose Add file → Upload files. Drag in the extracted contents, including the `assets` folder. `index.html` must be at the repository root. Commit the files.
4. Review the repository files before publishing. Do not restore the deleted repository, upload an older ZIP, or push an old Git clone: those can bring old content or history back.
5. When ready for the site and its files to be public, change the repository to Public under Settings → General → Danger Zone → Change repository visibility.
6. Under Settings → Pages, choose Deploy from a branch, then main and /(root), and Save.
7. Allow up to 10 minutes, then use Visit site in the Pages settings.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Section URLs use `#about`, `#research`, `#publications`, and `#background`. Relative asset paths support both account sites and project sites. Without JavaScript, all sections remain readable.

## Palette

| Use | Hex |
| --- | --- |
| Background | `#171B18` |
| Sidebar | `#344A3D` |
| Selected navigation | `#6B1328` |
| Accents | `#CE284E` |
| Text | `#CDC7BC` |
