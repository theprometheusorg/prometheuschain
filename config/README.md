# PrometheusChain Environment Config

Copyright (c) PrometheusChain Research Team.

This directory contains operator-facing environment manifests for PrometheusChain.
The manifests are intentionally small: they define stable names, chain IDs,
genesis files, native-currency metadata, default endpoints, and reset policy
without baking deployment secrets into the repository.

Each environment declares its native currency in a `[currency]` block. For the
Prometheus public network that is `Prometheus` / `PRM` / 18 decimals. Private and
consortium deployments may set a different symbol for internal accounting; the
EVM's underlying 18-decimal integer denomination is unchanged either way.

Use these files as release inputs for `prometheuschaind`, packaging, infra modules,
and smoke tests. The canonical source repository is
`https://github.com/theprometheusorg/prometheuschain`.
