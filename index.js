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
  } else {
    res.end('Page Not Found !!');
  }
});

server.listen(8000,'172.31.34.107', () => {
  console.log('Server has been started to listen request on port 8000')
})
