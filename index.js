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

//Replace Function Template
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
  output = output.replace(/{%IMAGE%}/g,product.image);
  output = output.replace(/{%PRICE%}/g,product.price);
  output = output.replace(/{%FROM%}/g,product.from);
  output = output.replace(/{%NUTRIENTS%}/g,product.nutrients);
  output = output.replace(/{%QUANTITY%}/g,product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g,product.description);
  output = output.replace(/{%ID%}/g,product.id);

// Condition for Organic and Non Organic Items
  if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
  return output;
}

//Create Server Call Back Function
const server = http.createServer((req, res) => {
  const pathName = req.url;

//Overview Page
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {'Content-type': 'text/html'});
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard,el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
    res.end(output)

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

//Node CLI Output => Listening on Port 8000
server.listen(8000,'172.31.34.107', () => {
  console.log('Server has been started to listen request on port 8000')
})
