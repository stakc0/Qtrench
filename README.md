# Unxiom Terminal

A standalone Solana terminal with live market data, charts, wallet tracking, and direct Jupiter execution. Unxiom is the default terminal surface.

## Run

```bash
npm run build
npm start
```

Open `http://localhost:4173/`.

Market data uses GeckoTerminal. Quotes, swaps, holdings, and routing use Jupiter. Wallet approval and transaction signing happen in the connected Phantom, Solflare, or Backpack wallet.