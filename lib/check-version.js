const request = require('request')
const semver = require('semver')
const chalk = require('chalk')
const packageConfig = require('../package.json')

module.exports = done => {
  // Ensure minimum supported node version is used
  if (!semver.satisfies(process.version, packageConfig.engines.node)) {
    return console.log(chalk.red(
      '  你必须升级的node/ have to upgrade you node  >=' + packageConfig.engines.node + '.x 才能使用/to use spotlight'
    ))
  }

  request({
    url: 'https://registry.npmjs.org/spotlight-cli',
    timeout: 1000
  }, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      const latestVersion = JSON.parse(body)['dist-tags'].latest
      const localVersion = packageConfig.version
      if (semver.lt(localVersion, latestVersion)) {
        console.log(chalk.yellow('  目前有新版的/A newer version of spotlight.'))
        console.log()
        console.log('  最新版本/latest: ' + chalk.green(latestVersion))
        console.log('  当前安装/installed: ' + chalk.red(localVersion))
        console.log()
      }
    }
    done()
  })
}
