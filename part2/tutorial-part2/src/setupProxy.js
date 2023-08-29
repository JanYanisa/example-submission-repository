/* eslint-disable no-undef */
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(createProxyMiddleware('/api',
    { target: 'http://localhost:3001/', changeOrigin: true, }
  ))
}
//ref: https://stackoverflow.com/questions/52605997/when-specified-proxy-in-package-json-must-be-a-string