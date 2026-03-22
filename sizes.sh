#!/usr/bin/env bash

# Requires
# https://github.com/bootandy/dust
dust \
  --ignore-hidden \
  --no-percent-bars \
  --apparent-size \
  --invert-filter "yaml$" \
  --invert-filter "md$" \
  --invert-filter sizes.sh 
