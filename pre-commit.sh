#!/usr/bin/env bash
# This script tries to autofix lint errors in staged files and then stages them again.
git diff --staged --diff-filter=dx --name-only HEAD | grep -e ".*\.js$" -e ".*\.scss$" -e ".*\.jsx $" | xargs -I % sh -c './node_modules/.bin/eslint --fix %; git add %'