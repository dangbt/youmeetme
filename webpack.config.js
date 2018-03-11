const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry:'./client/index.jsx',
  output: {
    path: path.resolve(__dirname,'public'),
    publicPath:'/',
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {test: /\.jsx$/, use: 'babel-loader'},
      { test: /\.css$/, use:['style-loader','css-loader']},
      { test: /\.scss$/, use:['css-loader','sass-loader']},
      { test: /\.js$/, use: 'babel-loader'}
    ]
  }

}
