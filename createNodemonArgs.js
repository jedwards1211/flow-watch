

module.exports = function createNodemonArgs(argv) {
  var options = []
  var args = []
  var stopSlurping = false
  for (var i = 0; i < argv.length; i++) {
    if (stopSlurping) {
      args.push(argv[i])
      continue
    }
    switch (argv[i]) {
      case '-e':
      case '--ext':
      case '-w':
      case '--watch':
      case '-i':
      case '--ignore':
      case '--delay':
      case '--signal':
        options.push(argv[i])
        options.push(argv[++i])
        break
      case '-q':
      case '--quiet':
      case '-L':
      case '--legacy-watch':
      case '-V':
      case '--verbose':
         options.push(argv[i])
        break
      case '--':
        stopSlurping = true
        break
      default:
        args.push(argv[i])
    }
  }
  if (!options.length) {
    options.push(
      '--ignore', 'node_modules/',
      '--watch', '*.js',
      '--watch', '*.jsx',
      '--watch', '*.js.flow',
      '--watch', '.flowconfig',
      '--ext', 'js,mjs,jsx,json'
    )
  }
  if (args.length) args.unshift('--')
  return options.concat([require.resolve('./runFlow')], args)
}
