# PrometheusChain Releases

PrometheusChain releases produce signed `prometheuschaind` artifacts, Docker images,
environment manifests, and operator notes.

## Release PR

- Create a branch such as `release/vx.y.z`.
- Ensure tests, lints, and smoke checks pass for the release commit.
- Update workspace versions and release manifests.
- Confirm `config/environments/` and `genesis/` match the intended network.
- Commit with `release: vx.y.z`.
- Require review from maintainers responsible for node, release, and operator
  readiness.

## Publish

- Tag the merge commit as `vx.y.z`.
- Push the tag to `theprometheusorg/prometheuschain`.
- Build and publish `prometheuschaind` artifacts.
- Publish Docker images under `ghcr.io/theprometheusorg/prometheuschain`.
- Publish operator notes on `https://docs.prometheuschain.org`.

Devnet may reset by release. Testnet must not reset casually. Mainnet releases
require an explicit operator notice and rollback plan.
