#!/usr/bin/env node
// @flow

var spawn = require('child_process').spawn

spawn(
  'node',
  [
    require.resolve('nodemon/bin/nodemon'),
  ].concat(
    process.argv.length > 2
      ? process.argv.slice(2)
      : [
          '--ignore', 'node_modules/',
          '--watch', '*.js',
          '--watch', '*.js.flow',
          '--watch', '.flowconfig',
        ],
    require.resolve('./runFlow')
  ),
  {
    stdio: 'inherit'
  }
)
