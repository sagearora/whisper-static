'use strict'

if (process.env.WHISPER_BIN) {
  module.exports = process.env.WHISPER_BIN
} else {
  var os = require('os')
  var path = require('path')

  var binaries = Object.assign(Object.create(null), {
    // darwin: ['x64', 'arm64'],
    // freebsd: ['x64'],
    // linux: ['x64', 'ia32', 'arm64', 'arm'],
    // win32: ['x64', 'ia32']
    darwin: ['x64']
  })

  var platform = process.env.npm_config_platform || os.platform()
  var arch = process.env.npm_config_arch || os.arch()

  var whisperPath = path.join(
    __dirname,
    platform === 'win32' ? 'whisper.exe' : 'whisper'
  )

  if (!binaries[platform] || binaries[platform].indexOf(arch) === -1) {
    whisperPath = null
  }

  module.exports = whisperPath
}
