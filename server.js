const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 80;

// 确保目录存在
const authDir = path.join(__dirname, 'public/.well-known/pki-validation/');
fs.mkdirSync(authDir, { recursive: true });

// 下载验证文件
const downloadAuthFile = async (url, destination) => {
  const writer = fs.createWriteStream(destination);
  const response = await axios.get(url, { responseType: 'stream' });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

// 替换为实际的 Auth File URL
const authFileUrl = 'https://example.com/path/to/authfile.txt';
const authFilePath = path.join(authDir, 'authfile.txt');

downloadAuthFile(authFileUrl, authFilePath)
  .then(() => console.log('Auth file downloaded successfully'))
  .catch(err => console.error('Error downloading auth file:', err));

// 设置静态文件目录
app.use('/.well-known/pki-validation', express.static(path.join(__dirname, 'public/.well-known/pki-validation')));

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
