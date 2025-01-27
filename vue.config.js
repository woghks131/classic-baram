const target = 'http://127.0.0.1:9091';
module.exports = {
  devServer: {
    port: 9090,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true
      },
      '^/download': {
        target,
        changeOrigin: true
      },
    }
  }
}
