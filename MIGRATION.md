# Migration: CreditChain → PrometheusChain

PrometheusChain is the chain core of the Prometheus AGE ecosystem. It is derived
from the CreditChain chain core, which is itself a fork of Reth. This document
records exactly what the rebranding changed, what it deliberately did not change,
and how protocol-level decisions are kept separate from branding.

## What changed

The rebranding is a source-level identity migration. It does not alter execution
or consensus semantics.

| Surface | Before | After |
| --- | --- | --- |
| Product name | CreditChain | PrometheusChain |
| Node binary | `creditchaind` | `prometheuschaind` |
| Internal crate | `cc-cli` / `cc_cli` | `prometheus-cli` / `prometheus_cli` |
| Mainnet chain alias | `creditchain-mainnet` | `prometheus-mainnet` |
| Data directory | `~/.local/share/creditchain` | `~/.local/share/prometheuschain` |
| Config file | `prometheus.toml` (in datadir) | `prometheuschain.toml` |
| Metrics prefix | `creditchain_` | `prometheus_` |
| Registry image | `ghcr.io/openibank/creditchain` | `ghcr.io/theprometheusorg/prometheuschain` |
| Repositories | `github.com/openibank/creditchain` | `github.com/theprometheusorg/prometheuschain` |
| Websites | `creditchain.org` | `prometheuschain.org` |
| Environment variables | `CREDITCHAIN_*` | `PROMETHEUSCHAIN_*` |
| Native currency | (unset) | `Prometheus` / `PRM` / 18 decimals |

Environment variables that were renamed:

- `CREDITCHAIN_RPC_URL` → `PROMETHEUSCHAIN_RPC_URL`
- `CREDITCHAIN_SNAPSHOTS_BASE_URL` → `PROMETHEUSCHAIN_SNAPSHOTS_BASE_URL`
- `CREDITCHAIN_SNAPSHOTS_API_URL` → `PROMETHEUSCHAIN_SNAPSHOTS_API_URL`
- `CREDITCHAIND_BIN` → `PROMETHEUSCHAIND_BIN`

There is no compatibility shim for the old names. Operators migrating an
existing deployment must update their scripts and unit files; the new names are
the only supported spellings.

## What deliberately did not change

These are protocol or upstream-interface decisions, not branding decisions.
Changing them would break compatibility or misattribute work.

- **EVM semantics.** Transaction encoding, signing, gas accounting, precompiles,
  and state transition rules are unchanged.
- **JSON-RPC.** Standard Ethereum namespaces (`eth`, `net`, `web3`, `debug`,
  `trace`) keep their method names and behavior.
- **Reth crate names and imports.** Upstream `reth-*` crates are untouched so
  upstream sync stays practical. `prometheuschaind` is a thin wrapper over them.
- **Genesis chain IDs.** The chain IDs (`2026042401`–`2026042405`) are preserved
  for the environments defined in this repository. A public launch that needs a
  registered chain ID is a separate decision, documented below.
- **Genesis allocations and gas limits.** Untouched; only `extraData` branding
  changed.
- **Upstream issue links.** During the fork, `paradigmxyz/reth` issue and pull
  links were mechanically rewritten to `openibank/creditchain`, producing links
  to issue numbers that do not exist in that repository. They have been restored
  to their `paradigmxyz/reth` originals.
- **Vendored libmdbx.** Not modified. The `CCC` string inside libmdbx is a C++
  compiler environment variable and has nothing to do with any token.

## Genesis and chain identity boundary

`extraData` in each genesis file now reads `PrometheusChain <environment>`
(hex-encoded). `extraData` is not part of the state, but it *is* part of the
header, so it changes the genesis block hash. Any node, snapshot, or test vector
tied to a previous genesis hash must be regenerated. Local and dev environments
are ephemeral and may be reset freely; `testnet` and `mainnet` are marked
non-resettable, so this migration must not be applied to an already-running
`testnet`/`mainnet` deployment without an explicit network migration plan.

## Native currency (PRM)

Before this migration the repository declared no native currency at all — the
EVM's 18-decimal integer denomination was implicit and unlabelled. Each
environment manifest now declares:

```toml
[currency]
name = "Prometheus"
symbol = "PRM"
decimals = 18
```

PRM is the native asset of the Prometheus public network: it pays gas and moves
as value in ordinary EVM transactions. It is **not** an ERC-20 contract, and
renaming a currency symbol does not create a token, migrate balances, or change
denominations. Balance representation is unchanged (18-decimal integers).

Private and consortium deployments may declare a different `symbol` for internal
accounting. That is a per-deployment policy choice, not a change to the EVM.

## Open decisions

These are tracked here rather than resolved by the migration itself:

1. **Public chain ID.** The current mainnet chain ID is reserved for this
   repository until a public launch registers metadata. Do not assume it is
   registered externally.
2. **Token supply, issuance, and validator rewards.** Not defined in this
   repository. Any supply policy is a protocol decision requiring a design and
   review separate from branding.
3. **Testnet/mainnet reset.** Applying this genesis change to a live network
   requires an explicit network migration plan.
4. **Consensus for private and consortium profiles.** The execution client is
   shared across profiles; a permissioned BFT consensus integration for
   consortium networks is future work and is not implemented here.
