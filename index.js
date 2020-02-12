const fs = require('fs');
const http = require('http');
const url = require('url');

// Server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is from Overview Page!!')
  } else if (pathName === '/product') {
    res.end('This is from Product Page');
  } else if (pathName === '/api') {
    res.end ('This is from API!!')
  }else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    })
    res.end('<h1>Page Not Found !!</h1>');
  }
});

server.listen(8000,'172.31.34.107', () => {
  console.log('Server has been started to listen request on port 8000')
})
