#!/usr/bin/env sh

set -e

git pull

npm run docs:build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:evoToBetter/Blog.git master:gh-pages

cd -
