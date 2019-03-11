const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    const host = req.headers.host
    res.writeHead(200, {
      'Content-Type': 'text/html',
    //   'Content-Security-Policy': 'default-src http: https'
    //   'Content-Security-Policy': 'default-src \'self\' ;'
    //   'Content-Security-Policy': 'default-src \'self\'; form-action \'self\'; '// 禁止form表单提交 外链跳转
    //   'Content-Security-Policy': 'script-src \'self\'; form-action \'self\'; '// 禁止form表单提交 外链script跳转
      'Content-Security-Policy-Report': 'script-src \'self\'; form-action \'self\'; '// report
    })

    res.end(html)
  } else {
    res.writeHead(200, {
      'Content-Type': 'application/javascript',
    })
    res.end('console.log(2222)')
  }
}).listen(8888)

/**default-src \'self\'：
 * Refused to load the script 'https://code.jquery.com/jquery-3.3.1.min.js' 
 * because it violates the following Content Security Policy directive: "default-src 'self'".
 * Note that 'script-src-elem' was not explicitly set, so 'default-src' is used as a fallback.
*/



/**form-action \'self\';
 * localhost/:1 Refused to send form data to 'http://baidu.com/' 
 * because it violates the following Content Security Policy directive: "form-action 'self'".
 * 
 */