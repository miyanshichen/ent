const path = require('path')
module.exports = {
  publicPath: './',
  outputDir: 'ent',
  devServer: {
    host: '0.0.0.0',
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://ec2-18-232-188-25.compute-1.amazonaws.com:8112/',
        changeOrigin: true,//如果需要跨域  
        pathRewrite: {
          '^/api': 'https://ec2-18-232-188-25.compute-1.amazonaws.com:8112/api',//调用接口直接写‘/api/user/add’即可  
        }
      }
    }, // 设置代理
    before: app => { }
  }
}