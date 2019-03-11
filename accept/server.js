const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
http.createServer((req, res) => {
    if(req.url==='/'){
        const html = fs.readFileSync('test.html')
        res.writeHead(200, {
          'content-type': 'text/html',
          'Content-Encoding':'gzip'
        })
        res.end(zlib.gzipSync(html))
    }
    if(req.url==='/script.js'){
        res.writeHead(200, {
          'content-type': 'text/javascript',
          'Cache-Control':'public,max-age=100'
        })
        res.end('console.log("hello js! 123 abc 123gffghgh123" )')
    }
}).listen(8888)