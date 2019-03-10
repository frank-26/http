const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    const host = req.headers.host
    res.writeHead(200, {
      'content-type': 'text/html',
      'Set-Cookie': ['id=111;max-age=10','foo=foo;httpOnly','bar=bar;httpOnly']
    })

    res.end(html)
  }
}).listen(8888)