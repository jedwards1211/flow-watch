#! /usr/bin/env node
// @flow

var flow
try {
  flow = require('flow-bin')
} catch (error) {
  flow = 'flow'
}

// Only clear the console if it's an interactive terminal.
if (process.stdout.isTTY) {
  process.stdout.write('\u001b[2J')
  process.stdout.write('\u001b[1;1H')
  process.stdout.write('\u001b[3J')
}

require('child_process').spawn(flow, {stdio: 'inherit'})

