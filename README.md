# PrometheusChain

PrometheusChain is a Rust-first, Reth-based, EVM-compatible blockchain for the
Prometheus AGE ecosystem. The primary node binary is `prometheuschaind`, and the
native currency of the Prometheus public network is **PRM**.

- Official website: https://www.prometheuschain.org
- Documentation: https://docs.prometheuschain.org
- Canonical repository: https://github.com/theprometheusorg/prometheuschain
- Copyright: PrometheusChain Research Team

## Native currency

| Field    | Value      |
| -------- | ---------- |
| Name     | Prometheus |
| Symbol   | PRM        |
| Decimals | 18         |

PRM is the native asset of the Prometheus public network — the asset that pays
gas and moves as value in ordinary EVM transactions. It is not an ERC-20
contract. Private and consortium deployments may configure a different internal
accounting unit; that choice is explicit per environment in
`config/environments/*.toml`.

## Status

This repository is the PrometheusChain chain-core workspace. It preserves standard
Ethereum JSON-RPC behavior and EVM semantics while adding PrometheusChain branding,
environment manifests, genesis artifacts, packaging, and operator workflows.

The upstream Reth implementation remains the execution-client foundation. Keep
PrometheusChain-specific behavior layered around owned crates, manifests, and
configuration so upstream sync remains practical.

PrometheusChain is derived from the CreditChain chain core; see
[`MIGRATION.md`](MIGRATION.md) for what changed and what deliberately did not.

## Build

```sh
cargo build --bin prometheuschaind --profile maxperf
```

For a debug build:

```sh
cargo build --bin prometheuschaind
```

## Run A Local Node

```sh
target/maxperf/prometheuschaind node \
  --chain genesis/local-single.json \
  --datadir .prometheus/local-single \
  --http --http.addr 127.0.0.1 --http.port 8545 \
  --http.api eth,net,web3,debug,trace \
  --metrics 127.0.0.1:9001
```

Then check the node:

```sh
PROMETHEUSCHAIND_BIN=target/maxperf/prometheuschaind \
PROMETHEUSCHAIN_RPC_URL=http://127.0.0.1:8545 \
scripts/prometheus-smoke.sh
```

## Environments

PrometheusChain treats environments as first-class release artifacts:

- `local-single`: one-node local developer network.
- `local-multinode`: local bootnode, validators, and RPC integration network.
- `devnet`: public resettable network by release.
- `testnet`: public stable network with no casual resets.
- `mainnet`: public production network.

Environment manifests live in `config/environments/`. Genesis files live in
`genesis/`.

## Compatibility

PrometheusChain should remain straightforward for wallets, explorers, SDKs, and
operators:

- Preserve standard Ethereum JSON-RPC methods.
- Preserve EVM execution semantics unless a protocol change is explicitly
  designed and reviewed.
- Keep the `reth` RPC namespace available while PrometheusChain-specific RPC
  additions mature in isolated modules.

## Packaging

Preferred public package and service names:

- `prometheuschaind`
- `prometheus-validator`
- `prometheus-rpc`
- `prometheuschaind.service`
- `prometheus-validator.service`
- `prometheus-rpc.service`

The Docker image is expected under `ghcr.io/theprometheusorg/prometheuschain`.
