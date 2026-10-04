import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = new URL('../dist/', import.meta.url);
export const publicFiles = ['index.html', 'site-config.js', '.nojekyll', '_astro', 'fonts', 'images', 'meta', 'models', 'rive', 'splats', 'textures', 'vendor', 'privacy_policy.pdf', 'terms_and_conditions.pdf'];
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of publicFiles) await cp(root + name, new URL(name, output), { recursive: true });
console.log('Built static website in dist/ — no dependencies or compilation required.');
