#! /usr/bin/env node
// @flow

var spawn = require('child_process').spawn

var opts = {stdio: 'inherit'}

var flow
try {
  flow = require('flow-bin')
} catch (error) {
  flow = 'flow'
}

function exec() {
  var child = require('child_process').exec.apply(undefined, arguments)
  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)
}

exec('clear', opts, function () {
  exec("printf '\\e[3J'", opts, function () {
    spawn(flow, opts)
  })
})
