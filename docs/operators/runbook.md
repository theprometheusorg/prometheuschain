# PrometheusChain Operator Runbook

Copyright (c) PrometheusChain Research Team.

## Build

```sh
cargo build --bin prometheuschaind --profile maxperf
```

## Local Single Node

```sh
target/maxperf/prometheuschaind node \
  --chain genesis/local-single.json \
  --datadir .prometheus/local-single \
  --http --http.addr 127.0.0.1 --http.port 8545 \
  --http.api eth,net,web3,debug,trace \
  --metrics 127.0.0.1:9001
```

## Smoke Test

```sh
PROMETHEUSCHAIND_BIN=target/maxperf/prometheuschaind \
PROMETHEUSCHAIN_RPC_URL=http://127.0.0.1:8545 \
scripts/prometheus-smoke.sh
```

## Public Environments

Use the environment manifests under `config/environments/` as release inputs.
Devnet may reset by release. Testnet should not reset casually. Mainnet
changes require release approval, signed artifacts, and a published operator
notice on `https://docs.prometheuschain.org`.
