const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      const html = fs.readFileSync('test.html', 'utf8');
      res.writeHead(200, {
        'content-type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(html);
    }
  })
  .listen(8887);
