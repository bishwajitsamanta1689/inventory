const fs = require('fs');
const http = require('http');
const url = require('url');

// Server

//Data Declaration at the top level
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is from Overview Page!!')
  } else if (pathName === '/product') {
    res.end('This is from Product Page');
  } else if (pathName === '/api') {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end (data);
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
