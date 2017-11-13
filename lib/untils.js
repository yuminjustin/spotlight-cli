const path = require('path')
const chalk = require('chalk')
const format = require('util').format
const match = require('minimatch')
const prefix = '   spotlight'
const sep = chalk.gray('·')

module.exports = {
    isLocalPath(templatePath) {
        return /^[./]|(^[a-zA-Z]:)/.test(templatePath)
    },
    getTemplatePath(templatePath) {
        return path.isAbsolute(templatePath) ?
            templatePath :
            path.normalize(path.join(process.cwd(), templatePath))
    },
    warnings: {
        commandError() {
            console.log(chalk.red('  命令错误'))
            console.log()
            console.log(chalk.yellow('  格式： spotlight init <template-name> <project-name>'))
            console.log()
        }
    },
    logger: {
        log: function (...args) {
            const msg = format.apply(format, args)
            console.log(chalk.white(prefix), sep, msg)
        },
        fatal: function (...args) {
            if (args[0] instanceof Error) args[0] = args[0].message.trim()
            const msg = format.apply(format, args)
            console.error(chalk.red(prefix), sep, msg)
            process.exit(1)
        },
        success: function (...args) {
            const msg = format.apply(format, args)
            console.log(chalk.white(prefix), sep, msg)
        }
    },
    filters(files, filters, data, done) {
        if (!filters) {
            return done()
        }
        const fileNames = Object.keys(files)
        Object.keys(filters).forEach(glob => {
            fileNames.forEach(file => {
                if (match(file, glob, {
                        dot: true
                    })) {
                    const condition = filters[glob]
                    if (!this.evaluate(condition, data)) {
                        delete files[file]
                    }
                }
            })
        })
        done()
    },
    evaluate(exp, data) {
        const fn = new Function('data', 'with (data) { return ' + exp + '}')
        try {
            return fn(data)
        } catch (e) {
            console.error(chalk.red('评估过滤条件时出错: ' + exp))
        }
    }
}
