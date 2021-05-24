module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/scss/main.scss'),
        path.resolve(__dirname, './src/scss/_mixins.scss'),
        path.resolve(__dirname, './src/scss/_variables.scss'),
        path.resolve(__dirname, './src/scss/_home.scss'),
      ],
    })
}