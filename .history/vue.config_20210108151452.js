module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    host: '127.0.0.1',
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => { }
  },
}