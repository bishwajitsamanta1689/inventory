const fs = require('fs');
const http = require('http');

// Server
const server = http.createServer((req, res) => {
  res.end('Hello from the Server !!');
});

server.listen(8000,'127.0.0.1', () => {
  console.log('Server has been started to listen request on port 8000')
})