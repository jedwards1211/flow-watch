'use strict'

var createNodemonArgs = require('../createNodemonArgs')
var expect = require('chai').expect

describe('createNodemonArgs', function () {
  it('with no input args', function () {
    expect(createNodemonArgs([])).to.deep.equal([
      '--ignore', 'node_modules/',
      '--watch', '*.js',
      '--watch', '*.jsx',
      '--watch', '*.js.flow',
      '--watch', '.flowconfig',
      '--ext', 'js,mjs,jsx,json',
      require.resolve('../runFlow')
    ])
  })
  it('with no nodemon-specific input args', function () {
    expect(createNodemonArgs(['--foo'])).to.deep.equal([
      '--ignore', 'node_modules/',
      '--watch', '*.js',
      '--watch', '*.jsx',
      '--watch', '*.js.flow',
      '--watch', '.flowconfig',
      '--ext', 'js,mjs,jsx,json',
      require.resolve('../runFlow'),
      '--',
      '--foo'
    ])
  })
  it('with nodemon-specific input args', function () {
    expect(createNodemonArgs(['--watch', '*.js.flow', '--foo'])).to.deep.equal([
      '--watch', '*.js.flow',
      require.resolve('../runFlow'),
      '--',
      '--foo'
    ])
  })
  it('with nodemon-specific input args and --', function () {
    expect(createNodemonArgs(['--watch', '*.js.flow', '--', '--verbose', '--foo'])).to.deep.equal([
      '--watch', '*.js.flow',
      require.resolve('../runFlow'),
      '--',
      '--verbose',
      '--foo'
    ])
  })
})
