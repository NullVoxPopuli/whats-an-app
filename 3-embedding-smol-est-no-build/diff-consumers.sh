#!/usr/bin/env bash


dir="$(dirname $(readlink -f $0))"

src="$dir/../2-embedding-smol-est/2-embedding-in-to-plain-html"
target="$dir/2-embedding-in-to-plain-html"

diff $src $target \
  --color \
  --minimal \
  --ignore-all-space
