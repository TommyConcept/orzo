import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(await readFile(resolve(root,'asset-manifest.json'),'utf8'));
for(const asset of manifest.files){
 const bytes = await readFile(resolve(root,asset.path));
 if(createHash('sha256').update(bytes).digest('hex') !== asset.sha256) throw Error(`Modified or damaged: ${asset.path}`);
}
const html = await readFile(resolve(root,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|srcset|href)="(\.\/[^"#]+)"/g)) await access(resolve(root,match[1]));
const css = await readFile(resolve(root,'_astro/index.TL6TuoJb.css'),'utf8');
for(const match of css.matchAll(/url\((\.\.\/[^)]+)\)/g)) await access(resolve(root,'_astro',match[1]));
console.log(`PASS: ${manifest.files.length} file checksums, HTML assets and CSS font references.`);
console.log('This verifies packaging, not visual animation playback.');
