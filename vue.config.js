// vue.config.js
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    // 相对路径配置
    config.resolve.alias
      .set('common', resolve('src/common'))
      .set('src', resolve('src'))
      .set('components', resolve('src/components'))
  }
}
