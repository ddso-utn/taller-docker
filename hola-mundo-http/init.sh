#!/bin/sh

exit_func() {
  echo "SIGTERM"
  echo
  exit 1
}
trap exit_func SIGTERM SIGINT

node index.js