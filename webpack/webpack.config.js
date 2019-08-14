var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: './src/main.js',     // 可以有多个入口文件，也可以有一个，如果有一个，就默认从这个入口开始分析
    output: {
        path: path.resolve(__dirname, 'dist'),  //相对转绝对，path.resolve
        // path: path.resolve('/webpack/main.js'),
        filename: 'build.js'
    },
    mode: 'production', // 设置mode
    watch: true     //文件监视改动，自动产出main.js
}