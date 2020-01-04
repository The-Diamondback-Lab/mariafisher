const fs = require('fs')
const argv = require('yargs').argv

function cp(cb) {
  console.log(argv)
  fs.copyFile(argv.src, argv.dest, cb)
}

module.exports = {
  cp
}
