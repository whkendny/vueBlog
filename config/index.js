// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  // production(生产) 环境
  build: {
    // 使用 config/prod.env.js 中定义的编译环境
    env: require('./prod.env'),
    // 编译输入的 index.html 文件
    index: path.resolve(__dirname, '../dist/index.html'),
    // 编译输出的静态资源根路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 编译输出的二级目录
    assetsSubDirectory: 'static',
    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: '/',
<<<<<<< HEAD
    // 是否开启 cssSourceMap
    productionSourceMap: true,
=======
    productionSourceMap: false,
>>>>>>> 055cf1b3a186aa5c112ec4775302fd2728431161
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 是否开启 gzip
    productionGzip: false,
    // 需要使用 gzip 压缩的文件扩展名
    productionGzipExtensions: ['js', 'css']
  },
  // dev (开发)环境
  dev: {
    // 使用 config/dev.env.js 中定义的编译环境
    env: require('./dev.env'),
    // 运行测试页面的端口
    port: 8088,
    // 编译输出的二级目录
    assetsSubDirectory: 'static',
    // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    assetsPublicPath: '/',
<<<<<<< HEAD
    // 需要 proxyTable 代理的接口（可跨域）
=======
    // 解决前后端跨域
>>>>>>> 055cf1b3a186aa5c112ec4775302fd2728431161
    proxyTable: {
      '/api':{
        target:'http://127.0.0.1:3009/api',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
