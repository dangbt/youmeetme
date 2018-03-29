const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

<<<<<<< HEAD
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
})

=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710

module.exports = {
  entry:'./client/index.jsx',
  output: {
    path: path.resolve(__dirname,'public'),
    publicPath:'/',
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
<<<<<<< HEAD
      },
      {
        test: /.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            fallback: "style-loader"
        })
    },
    ]
  },
  devServer: {
    historyApiFallback: true
},
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass,
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
  }),

<<<<<<< HEAD
<<<<<<< HEAD
  ],
   watch: true
=======
  ]
>>>>>>> build client success !!!
=======
  ],
   watch: true
>>>>>>>  deploy mern to heroku
=======
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig

  ],
   watch: true
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710

}
