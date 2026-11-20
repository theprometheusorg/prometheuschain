#!/usr/bin/env bash
set -eo pipefail

DOCS_ROOT="$(dirname "$(dirname "$0")")"
PROMETHEUSCHAIND=${1:-"$(dirname "$DOCS_ROOT")/target/debug/prometheuschaind"}
VOCS_PAGES_ROOT="$DOCS_ROOT/vocs/docs/pages"
echo "Generating CLI documentation for prometheuschaind at $PROMETHEUSCHAIND"

echo "Using docs root: $DOCS_ROOT"
echo "Using vocs pages root: $VOCS_PAGES_ROOT"
cmd=(
  "$(dirname "$0")/help.rs"
  --root-dir "$DOCS_ROOT/"
  --root-indentation 2
  --root-summary
  --sidebar
  --verbose
  --out-dir "$VOCS_PAGES_ROOT/cli/"
  "$PROMETHEUSCHAIND"
)
echo "Running: $" "${cmd[*]}"
"${cmd[@]}"
