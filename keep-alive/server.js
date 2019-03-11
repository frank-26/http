const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  const html = fs.readFileSync('test.html', 'utf8')
  const img=fs.readFileSync('test.jpg')

  if (req.url === '/') {
    res.writeHead(200, {
      'content-type': 'text/html',
      // 'Connection':'close'//close
    })
    res.end(html)
  }else{
    res.writeHead(200, {
      'content-type': 'image/jpg',
      // 'Connection':'close'//close
    })
    res.end(img)
  }
}).listen(8888)