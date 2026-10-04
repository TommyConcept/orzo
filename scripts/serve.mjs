import { createServer } from 'node:http';
import { stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json', '.webmanifest':'application/manifest+json', '.wasm':'application/wasm', '.png':'image/png', '.webp':'image/webp', '.avif':'image/avif', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.woff2':'font/woff2', '.mp4':'video/mp4', '.pdf':'application/pdf' };
createServer(async (req,res) => {
  try {
    if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const parts = pathname.split('/');
    if (parts.some(p=>p.startsWith('.')) || parts.includes('scripts') || pathname === '/package.json') { res.writeHead(404);res.end();return; }
    let file = resolve(root, '.' + pathname);
    if (file !== resolve(root) && !file.startsWith(root.endsWith(sep) ? root : root+sep)) { res.writeHead(403);res.end();return; }
    let info = await stat(file);
    if (info.isDirectory()) { file = resolve(file, 'index.html'); info = await stat(file); }
    const headers = { 'Content-Type':mime[extname(file)] || 'application/octet-stream', 'Accept-Ranges':'bytes', 'Cache-Control':'no-cache' };
    const range = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range || '');
    let start = 0, end = info.size - 1, code = 200;
    if (range) {
      start = Number(range[1]); end = range[2] ? Math.min(Number(range[2]), end) : end;
      if (start > end || start >= info.size) { res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return; }
      code=206;headers['Content-Range']=`bytes ${start}-${end}/${info.size}`;
    }
    headers['Content-Length'] = end - start + 1;
    res.writeHead(code, headers);
    if (req.method === 'HEAD') res.end();
    else createReadStream(file, {start,end}).on('error',()=>res.destroy()).pipe(res);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port, '0.0.0.0', () => console.log(`ORYZO: http://localhost:${port}`));
