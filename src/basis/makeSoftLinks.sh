#!/bin/zsh

FILES=(
  .babelrc
  .eslintrc
  .gitignore
  package.json
  tsconfig.json
)

SCRIPT_DIR=$(cd $(dirname $0); pwd)
ROOT=$(dirname $(dirname ${SCRIPT_DIR}))

for file in ${FILES}; do
  ln -sf ${SCRIPT_DIR}/${file} ${ROOT}
done
