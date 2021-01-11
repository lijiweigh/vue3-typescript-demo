const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  lintOnSave: false,
  publicPath: '/test/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/common/style/less-variables.less'),
      ]
    }
  },
  configureWebpack: config => {
    return {
      plugins: [
        new WebpackManifestPlugin()
      ]
    }
  }
}