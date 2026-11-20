# Deployment Profiles

PrometheusChain shares one execution layer (EVM, JSON-RPC, `prometheuschaind`)
across three deployment profiles. The profiles differ in permissioning,
governance, and economics — not in execution semantics.

## Prometheus Public

Public, permissionless network with PRM as the native currency.

- Chain: `prometheuschaind node --chain prometheus-mainnet`
- Consensus: Ethereum-compatible execution client with a beacon consensus
  client (`prometheusbeacon`). The existing CreditChain execution/consensus
  architecture is carried forward.
- Validators: open participation under the published protocol rules.
- RPC: public endpoints as published in `config/environments/mainnet.toml`.
- Currency: PRM (native), 18 decimals.

## Prometheus Private

Enterprise-controlled deployment.

- One or more validators under a single operator, ideally across independent
  failure domains. A single validator is not fault tolerant.
- Permissioned RPC and peer access at the network layer.
- Internal accounting unit is configurable in the environment manifest. PRM may
  be used as the native gas asset, or a separate internal unit declared with its
  own `[currency]` block.
- Blockchain use is optional: AGE engineering and knowledge operations can run
  entirely off-chain and only touch the chain for settlement, provenance, or
  authorization.

## Prometheus Consortium

Shared infrastructure between multiple trusted organizations.

- Multiple validator operators with permissioned membership.
- Organization identity and member onboarding/removal are governance concerns.
- **Status: not implemented.** The execution client is ready, but a permissioned
  BFT consensus integration does not yet exist in this repository. Do not
  describe a consortium network as production-ready before a multi-validator
  admission/rejection test passes.

## Shared foundation

All profiles reuse: EVM execution, JSON-RPC, `prometheuschaind`, the `reth` RPC
namespace, monitoring, and packaging. Consensus, permissioning, and economics
are configured per profile and must not leak into the public consensus rules.

## Isolation rules

- Never point two profiles at the same data directory.
- Never reuse a database across a genesis change; the genesis block hash changes
  with `extraData` and state roots are not comparable across chains.
- Private and consortium networks must use isolated datadirs and network
  identities (`--datadir` and distinct chain IDs).
