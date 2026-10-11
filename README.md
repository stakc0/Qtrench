# Qtrench terminal clone

This repository captures the working Qtrench terminal surface from `qtrench.fun` as a runnable standalone page.

## Run

```bash
npm run build
npm start
```

Open `http://localhost:4173/`.

The terminal keeps its live market behavior: GeckoTerminal OHLCV/trades, Jupiter quotes, wallet connectors, limit/market controls, and the Q-Vault UI. The server is only the local static shell; provider calls remain client-side exactly as the reference terminal uses them.
