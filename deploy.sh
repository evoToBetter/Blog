#!/usr/bin/env sh

set -e

npm run docs:build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@stonelee:evotobetter/Blog.git master:gh-pages

cd -
