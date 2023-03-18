const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const data = querystring.parse(body);
      console.log(data);
      res.end('Data received and parsed!');
    });
  } else {
    res.end('Hello, World!');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

