#!/bin/sh
set -e
echo "always-auth=true" >> ${GITHUB_WORKSPACE:-~}/.npmrc
echo "@blueflag:registry=https://npm.pkg.github.com/" >> ${GITHUB_WORKSPACE:-~}/.npmrc
echo "@92green:registry=https://npm.pkg.github.com/" >> ${GITHUB_WORKSPACE:-~}/.npmrc
echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" >>  ${GITHUB_WORKSPACE:-~}/.npmrc
## check
npm whoami --registry=https://npm.pkg.github.com
