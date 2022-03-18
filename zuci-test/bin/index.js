#!/usr/bin/env node
const lib = require('zuci-test-lib')

console.log('Welcome zuci-test!!!')

// 注册命令 zuci init
const argv = require('process').argv

const command = argv[2]

// 实现参数解析 init --name test
const options = argv.slice(3)
if(options.length > 0) {
  let [option, param] = options
  option = option.replace('--', '')

  if(command) {
    if(lib[command]) {
      lib[command]({option, param})
    }else {
      console.log('命令不存在')
    }
  }else {
    console.log('请输入命令')
  }
}



// 实现参数解析 --version 
if(command.startsWith('--') || command.startsWith('-')) {
  const globalOption = command.replace(/--|-/g, '')
  if(globalOption === 'version' || globalOption === 'V') {
    console.log('1.0.0')
  }
}