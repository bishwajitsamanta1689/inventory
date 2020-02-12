// Module Section Declaration
// ---------------------------

const fs = require('fs');
const http = require('http');
const url = require('url');

// Server Section Declaration
//----------------------------

//Data Declaration at the top level
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`);
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`)
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`)
const dataObj = JSON.parse(data);

//Create Server Call Back Function
const server = http.createServer((req, res) => {
  const pathName = req.url;

  //Overview Page
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(tempOverview)

    // Product Page
  } else if (pathName === '/product') {
    res.end('This is from Product Page');

    //API Route
  } else if (pathName === '/api') {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end (data);

    //Not Found  
  }else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    })
    res.end('<h1>Page Not Found !!</h1>');
  }
});

//Listening on Port 8000
server.listen(8000,'172.31.34.107', () => {
  console.log('Server has been started to listen request on port 8000')
})
