#! /usr/bin/env node
'use strict'

var flow
try {
  flow = require('flow-bin')
} catch (error) {
  flow = 'flow'
}

// Only clear the console if it's an interactive terminal & no env var override.
if (process.stdout.isTTY && !process.env.FLOW_WATCH_NO_CLEAR_CONSOLE) {
  process.stdout.write('\u001b[2J')
  process.stdout.write('\u001b[1;1H')
  process.stdout.write('\u001b[3J')
}

require('cross-spawn')(flow, process.argv.slice(2), {stdio: 'inherit'})
