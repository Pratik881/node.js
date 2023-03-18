const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const url=req.url;
  const method=req.method;
  if(url==='/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><?body>');
    return res.end();

  }  
  if(url ==='/message' && method==="POST"){
    const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk); 
    });
    req.on('end',()=>{
      const parsedBody=Buffer.concat(body).toString();
      const message=parsedBody.split('=')[1];
      fs.writeFileSync('message.txt',message);
    })
    
    res.statusCode=302;
    res.setHeader('Location','/');   
    return res.end();
  }
  
  res.write('Hello');
  res.write('My name is');
  res.end();
  
});

server.listen(300);
