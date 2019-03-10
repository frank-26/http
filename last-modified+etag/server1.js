const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.end(html)
  }
  if (req.url === '/script.js') {
    const etag = req.headers['if-none-match']//TODO: ??? wtf

    if (etag === '777') {
      res.writeHead(304, {
        'content-type': 'text/javascript',
        'Cache-Control': 'max-age=200000,no-store', //不使用本地缓存
        'Last-Modified': '123',
        'Etag': '777'
      })
      res.end('') // 304 不需要返回内容
    } else {
      res.writeHead(200, {
        'content-type': 'text/javascript',
        'Cache-Control': 'max-age=200000,no-store', //不使用本地缓存
        'Last-Modified': '123',
        'Etag': '777'
      })
      res.end('console.log("hello js!" )')
    }
  }
}).listen(8888)