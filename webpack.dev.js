const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9110
  },
  plugins: [
    new Dotenv({
      systemvars: true,
    })
  ]
})