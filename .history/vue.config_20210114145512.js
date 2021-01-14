module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    host: '0.0.0.0',
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://ec2-18-232-188-25.compute-1.amazonaws.com:8112/api'
      }
    }, // 设置代理
    before: app => { }
  },
}