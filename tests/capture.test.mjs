import {readFile} from 'node:fs/promises';
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
if (!html.includes('Qtrench: the quantum-proof terminal')) throw new Error('Qtrench title missing');
for (const marker of ['Q-Vault','loadChart','loadTrades','Jupiter','GeckoTerminal']) if (!html.includes(marker)) throw new Error(`Missing terminal marker: ${marker}`);
console.log('Qtrench capture contains terminal, chart, trades and provider flows');
