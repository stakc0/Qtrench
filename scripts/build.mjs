import {copyFile, cp, mkdir} from 'node:fs/promises';
await mkdir('dist', {recursive:true});
await copyFile('index.html','dist/index.html');
await cp('assets','dist/assets',{recursive:true});
console.log(JSON.stringify({built:true, entry:'dist/index.html'}));
