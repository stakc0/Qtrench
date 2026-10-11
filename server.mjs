import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const handler = async (req, res) => {
  try {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = pathname === '/' || !path.extname(pathname) ? path.join(root, 'index.html') : path.join(root, pathname.replace(/^\//, ''));
    const data = await readFile(file);
    res.writeHead(200, {'content-type': mime[path.extname(file)] || 'application/octet-stream', 'cache-control': pathname === '/' ? 'no-cache' : 'public, max-age=3600'});
    res.end(data);
  } catch { res.writeHead(404, {'content-type':'text/plain'}); res.end('Not found'); }
};
http.createServer(handler).listen(port, '0.0.0.0', () => console.log(`Unxiom Terminal on http://localhost:${port}`));
