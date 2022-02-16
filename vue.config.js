const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
// const CircularDependencyPlugin = require('circular-dependency-plugin')

// const isLib = process.env.TYPE === 'lib'

module.exports = {
    chainWebpack(config) {
        config.plugin('monaco').use(new MonacoWebpackPlugin())
    },
    pwa: {},
}