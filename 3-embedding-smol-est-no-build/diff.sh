#!/usr/bin/env bash


dir="$(dirname $(readlink -f $0))"

src="$dir/../1-smol-est"
target="$dir/1-smol-est-as-library-no-build"

diff $src $target \
  --color \
  --minimal \
  --ignore-all-space
