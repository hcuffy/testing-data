#!/usr/bin/env bash
set -euo pipefail

oneTimePassword=""
for argument in "$@"; do
  case "$argument" in
    --otp=*) oneTimePassword="${argument#--otp=}" ;;
  esac
done
oneTimePassword="${oneTimePassword:-${NPM_OTP:-}}"

if ! npmUser="$(npm whoami 2>/dev/null)"; then
  echo ""
  echo "Not logged in to npm. Run:"
  echo ""
  echo "  npm login"
  echo ""
  exit 1
fi

echo "Publishing as ${npmUser}…"

oneTimePasswordFlag=""
if [[ -n "$oneTimePassword" ]]; then
  oneTimePasswordFlag=" --otp=${oneTimePassword}"
fi

npm publish --access public${oneTimePasswordFlag}
