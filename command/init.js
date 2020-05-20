#!/usr/bin/env node

const download = require('download-git-repo')
const exists = require('fs').existsSync
const path = require('path')
const ora = require('ora')
const home = require('user-home')
const inquirer = require('inquirer')
const rm = require('rimraf').sync
const generate = require('../lib/generate')
const checkVersion = require('../lib/check-version')


const utils = require('../lib/utils')
const logger = utils.logger
const warnings = utils.warnings


module.exports = (program, c) => {
    program.usage('[project-name]').option('-c, --clone', 'use git clone').option('--offline', 'use cached template')

    let template = c,
        url = '',
        rawName = program.args[0]; // 目录

    switch (c) {
        case "redux":
            template = 'react-redux';
            break;
        case "mobx":
            template = 'react-mobx';
            break;
        case "hook":
            template = 'react-mobx-hook';
            break;
        case "vuex":
            template = 'vue-vuex';
            break;
        case "ts":
            template = 'ts-' + rawName;
            break;
    }
    if (c == "ts") rawName = program.args[1]; // ts 目录

    url = `yuminjustin/spotlight-templates-${template}`;

    const inPlace = !rawName || rawName === '.' // 是否在当前目录
    const name = inPlace ? path.relative('../', process.cwd()) : rawName
    const to = path.resolve(rawName || '.') // 目标目录
    const clone = program.clone || false
    // 本地
    const tmp = path.join(home, '.spotlight-templates', template.replace(/\//g, '-'))

    try {
        if (exists(to)) {
            inquirer.prompt([{
                type: 'confirm',
                message: inPlace ? '在当前目录中生成项目' : '此目录已存在，是否继续',
                name: 'ok'
            }]).then(answers => {
                if (answers.ok) run()
            }).catch(logger.fatal)
        } else run()

    } catch (e) {
        warnings.commandError()
    }

    function run() {
        // 检查版本 -> 下载模板
        checkVersion(() => {
            downloadAndGenerate()
        })
    }


    function downloadAndGenerate() {
        const spinner = ora('正在下载模板')
        spinner.start()
        // 删除本地文件
        if (exists(tmp)) rm(tmp)

        download(url, tmp, {
            clone
        }, err => {
            spinner.stop()
            if (err) logger.fatal('下载失败 ' + template + ': ' + err.message.trim())
            generate(name, tmp, to, err => {
                if (err) logger.fatal(err)
                console.log()
                logger.success('Generated "%s".', name)
            })
        })
    }

}