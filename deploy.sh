#!/usr/bin/env sh

set -e

git pull

npm install
npm run docs:build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/evoToBetter/Blog.git master:gh-pages

cd -
