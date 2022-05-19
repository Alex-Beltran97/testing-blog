const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:'index.js',
  },
  resolve:{
    extensions:['.js']
  },
  module:{
    rules:[
      {
        test: /\.m?js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use:[
          miniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset/resource',
        generator:{
          filename:'static/images/[hash][ext][query]'
        }
      },
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      inject:true,
      template:'./public/index.html',
      filename:"./index.html"
    }),
    new miniCssExtractPlugin(),
    new copyWebpackPlugin({
      patterns:[
        {
          from:path.resolve(__dirname,"src","assets/img"),
          to:"assets/images"
        }
      ]
    })
  ]
};