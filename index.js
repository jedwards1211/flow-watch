#!/usr/bin/env node

'use strict'

var spawn = require('cross-spawn')
var createNodemonArgs = require('./createNodemonArgs')

spawn(
  process.execPath,
  [
    require.resolve('nodemon/bin/nodemon'),
  ].concat(createNodemonArgs(process.argv.slice(2))),
  {
    stdio: 'inherit'
  }
)
