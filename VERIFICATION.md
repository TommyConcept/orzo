# Verification

Date: 4 October 2026.

## Passed

- 200 packaged frontend file checksums verified.
- All local HTML image/script/style/link references and CSS font URLs resolved.
- Homepage and 199 public file URLs returned HTTP 200 on the included Node server.
- Local gallery video byte-range response returned HTTP 206 and the requested bytes.
- Production animation JavaScript and splat worker passed Node syntax checks.
- 27 binary model/animation headers parsed successfully.
- 4 desktop/mobile Gaussian-splat archives passed ZIP integrity checks.
- Both Rive WebAssembly binaries passed WebAssembly validation.
- Route normalization checked for root hosting, a repository subdirectory, explicit index.html and repeated normalization.
- Static build completed successfully.

## What was not verified

The inspection browser failed to create a WebGL context on the original https://oryzo.ai/ page. Its script stopped at `App.initEngine` while calling `getExtension` on a null context. Consequently, full desktop/mobile visual playback, timings, hover/drag responses and every end-to-end animation transition could not be visually compared here. The package retains the original production animation implementation and assets rather than substituting reconstructed animation approximations. That is not a claim that every interaction was independently tested.

The Vimeo overlay and newsletter network submission were not tested. The video remains externally hosted and the newsletter points to Lusion's original Mailchimp service. No test subscriptions were sent. The package does not include ownership or server access for either service.

## Reference asset exception

`textures/lens_dirt.jpg` is mentioned in a disabled optional bloom branch (`USE_LENS_DIRT=false`) of the reference bundle. The original asset URL returned 404. It is not included and is not used by the default experience. Enabling that optional feature would require supplying an image.

## Portability changes

- Asset paths made relative for domain-root and GitHub project-page hosting.
- Home route adjusted for a containing folder and explicit index.html.
- Rive WebAssembly and fallback runtime stored locally.
- Main video and newsletter URLs exposed through site-config.js with original defaults.
- Copy URL targets the current hosting location.
- Original Cloudflare analytics beacon removed.
- Webmanifest icon references pointed at included original icons.

Original visual styles, shader code, timelines, scene data, artwork and credits are retained. No source-development repository or source maps were recovered.
