const http = require('http');
const fs = require('fs');
http
  .createServer((req, res) => {
    if (req.url === '/') {
      const html = fs.readFileSync('test.html', 'utf8');
      const host = req.headers.host;
      console.log(host);
      res.writeHead(200, {
        'content-type': 'text/html',
        'Access-Control-Allow-Credentials': true, // Access to fetch at 'http://127.0.0.1:8888/' from origin 'https://www.baidu.com' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'.
        'Access-Control-Allow-Origin': 'https://www.baidu.com',
        // 'Access-Control-Allow-Origin': '*',//Access to fetch at 'http://127.0.0.1:8888/' from origin 'https://www.baidu.com' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'./s?wd=https%3A%2F%2Fwww.baidu.com%2F&rsv_spt=1&rsv_iqid=0xbd5e324b0006f63b&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_dl=ib&rsv_enter=1&rsv_sug3=2:1
        'Set-Cookie': [
          'id=111;max-age=10',
          'secure=secure;secure',
          'foo=foo;httpOnly',
          'bar=bar;httpOnly'
        ]
      });

      res.end(html);
    }
    if (req.url === '/path') {
      res.end(req.headers.cookie);
    }
  })
  .listen(8888);
// cookie 和跨域没关系，只和域名有关，和端口无关。准确的说，cookie 不能跨域名，而不是 cookie 不能跨域。
