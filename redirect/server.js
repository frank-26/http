const http = require('http')
http.createServer((req, res) => {
    console.log(req.url)
    if(req.url==='/'){
        res.writeHead(200, {//301（慎用）,302的区别
        //   'Location': '/new',
        })
        res.end()
    }
    if(req.url==='/new'){
        res.writeHead(200, {
          'Content-Type': 'text/html',
        })
        res.end('<div>hello</div>')
    }
}).listen(8888)