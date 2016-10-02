#!/usr/bin/env node
// @flow

var spawn = require('child_process').spawn

spawn(
  'node',
  [
    require.resolve('nodemon/bin/nodemon'),
    '--ignore', 'node_modules/',
    '--watch', '.flowconfig',
  ].concat(process.argv.slice(2), require.resolve('./runFlow')),
  {
    stdio: 'inherit'
  }
)
