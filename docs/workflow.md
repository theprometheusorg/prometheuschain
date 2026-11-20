# PrometheusChain Workflow

Feature work should keep PrometheusChain-specific logic layered around owned
modules, environment manifests, protocol contracts, and operator tooling. Avoid
deep execution-layer divergence unless it is explicitly designed and reviewed.

## Pull Requests

- Keep changes scoped to the feature or fix.
- Preserve Ethereum JSON-RPC compatibility unless the change explicitly targets
  a PrometheusChain extension.
- Update environment manifests, genesis files, docs, and smoke checks when an
  operator-facing behavior changes.
- Mark release-note-worthy changes for the changelog.

## CI

Every PR should run formatting, linting, unit tests, integration tests, and
targeted smoke checks for the touched surface. Release candidates also need a
live environment validation pass before publication.
