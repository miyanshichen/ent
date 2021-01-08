module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    host: '0.0.0.0',
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => { }
  },
}