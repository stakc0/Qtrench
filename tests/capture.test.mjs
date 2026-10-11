import {readFile} from 'node:fs/promises';
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
if (!html.includes('Unxiom Terminal — Live Solana trading')) throw new Error('Unxiom Terminal title missing');
for (const marker of ['Wallet','loadChart','loadTrades','Jupiter','GeckoTerminal','signAndSendTransaction']) if (!html.includes(marker)) throw new Error(`Missing terminal marker: ${marker}`);
console.log('Unxiom Terminal contains wallet, chart, trades and Jupiter flows');
