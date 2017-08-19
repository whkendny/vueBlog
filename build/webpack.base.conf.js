/*webpack基础配置*/
//使用 NodeJS 自带的文件路径插件, 用于处理文件与目录的路径
var path = require('path')
//引入 config/index.js
var config = require('../config')
// 引入一些小工具
var utils = require('./utils')

/*
* path.resolve(): 把一个路径或路径片段的序列解析为一个绝对路径。
* __dirname:  全局变量，存储的是文件所在的文件目录
* */
// 拼接我们的工作区路径为一个绝对路径
var projectRoot = path.resolve(__dirname, '../')
// 将 NodeJS 环境作为我们的编译环境
var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file

// 是否在 dev 环境下开启 cssSourceMap ，在 config/index.js 中可配置
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)

// 是否在 production 环境下开启 cssSourceMap ，在 config/index.js 中可配置
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)

// 最终是否使用 cssSourceMap
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd


module.exports = {
  entry: {
    // 编译文件入口
    app: './src/main.js'
  },
  output: {
    //编译文件输出的根目录
    path: config.build.assetsRoot,
    // 正式发布环境下编译输出的发布路径
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    // 编译输出的文件名
    filename: '[name].js'
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['', '.js', '.vue', '.json'],
    // 不进行自动补全或处理的文件或者文件夹
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     include: [
    //       path.join(projectRoot, 'src')
    //     ],
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     include: [
    //       path.join(projectRoot, 'src')
    //     ],
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
