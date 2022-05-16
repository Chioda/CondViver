const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3000'
      }
    }
  }
};