const { defineConfig } = require('@vue/cli-service');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '40th.im.tku.edu.tw', // 你的自定义域名
    port: 443, // HTTPS 默认端口
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'C:/Users/ETHCI/Desktop/test/tkuim-frontend/key.pem')), // 私钥文件路径
      cert: fs.readFileSync(path.resolve(__dirname, 'C:/Users/ETHCI/Desktop/test/tkuim-frontend/cert.pem')) // 证书文件路径
    },
    // 其他 devServer 选项，例如：
    // proxy: 'http://backend-api-server' // 如果你需要代理 API 请求
  }
});
