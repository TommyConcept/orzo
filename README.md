# ORYZO website — portable frontend

This folder contains a portable copy of the publicly delivered https://oryzo.ai/ frontend, captured on 4 October 2026. It retains the original Lusion design, HTML, styles, compiled animation code and referenced visual assets. It is not a newly authored approximation or the original uncompiled Astro/development repository. The original source modules, source maps, authoring files and private services were not available.

## Run it

Install Node.js 18 or newer, open a terminal in this folder and run:

```sh
npm start
```

Visit http://localhost:3000. There are no npm dependencies to install.

**Do not double-click index.html.** The animation loads binary models, WebAssembly and a worker, which require an HTTP server. Use a browser with WebGL 2 and hardware acceleration enabled.

## Push to GitHub

Create an empty GitHub repository. From inside this folder:

```sh
git init
git add .
git commit -m "Add ORYZO website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example remote with your own repository URL. Upload the **contents of this folder**, including `.nojekyll`, rather than the ZIP file.

For GitHub Pages, select **Settings → Pages → Deploy from a branch → main → / (root)**. File paths and the single-page router have been adapted to support a repository subdirectory as well as a domain root. `.nojekyll` is required so `_astro/` is published.

For another static host, run `npm run build` and publish `dist/`. No server backend is required for the visuals.

## What is included

- Original layout, text, navigation, colors, fonts and responsive styling.
- WebGL hero, desk objects and pointer-responsive physics.
- Scroll-driven hand, coaster, table and camera animations.
- Wearable gallery, thumbnail flow, two local video clips and its button interaction.
- Feature transitions, thermal and circularity visualizations.
- Editable coaster message and encode/decode animation.
- Grip, microscopic scene and cork sustainability scenes.
- Rive sustainability animations and local WebAssembly runtimes.
- Reviews, social panels and product stack selector/comparison.
- Footer animation, sharing interaction and original external links.
- Desktop/mobile textures, binary models, Gaussian-splat data and worker.
- Original linked terms/privacy PDFs, logo and favicon assets.

## External dependencies and configuration

The full-screen main promotional video remains a Vimeo embed, as on the reference. It requires internet access and Vimeo's permission to play on your host. The two gallery video clips are local.

The newsletter still uses the original Lusion Mailchimp destination. **It does not create a mailing list for you.** Its validation/loading/success/error implementation is retained, but submissions and the remote service were not tested. Replace `newsletterUrl` in `site-config.js` before collecting subscribers for your own business. Set `videoUrl` there if you want to replace the main video.

Lusion contact/social links and GitHub research links still go to their original destinations. Canonical/social metadata retains the original identity. Review these in `index.html` when adapting the site. The original third-party analytics beacon was removed. The Copy URL interaction now copies your current site location.

## Where to edit

| File/folder | Contents |
| --- | --- |
| `index.html` | Page markup, copy, navigation, SVG symbols, metadata |
| `_astro/index.TL6TuoJb.css` | Original compiled responsive styling |
| `_astro/hoisted.CRsATKbF.js` | Original compiled animation and interaction implementation; small portability patches |
| `_astro/SplatsWorker-DSMxtdkh.js` | 3D splat worker |
| `site-config.js` | Video and newsletter destinations |
| `images/`, `textures/`, `models/`, `splats/` | Original visual assets, mobile variants and animation data |
| `rive/`, `vendor/rive/` | Rive animation and its WebAssembly runtimes |
| `fonts/` | Fonts and 3D text atlas |
| `scripts/` | Dependency-free development server, build and packaging checks |
| `asset-manifest.json` | File inventory and SHA-256 checksums |
| `VERIFICATION.md` | Verification performed and remaining limitations |

The animation bundle is compiled/minified production JavaScript, not clean component source. Editing animation behavior requires working with that bundle or separately rebuilding the original application architecture.

## Attribution

The original website, branding, design and creative assets are by Lusion. Existing credits and embedded dependency license notices are retained. This export adds no new license to third-party work. The GitHub model/paper links do not imply that the complete website is open source.
