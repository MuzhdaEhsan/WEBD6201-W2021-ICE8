const fs = require('fs');
//const http = require('http');
//const url = require("url");


const express = require('express');

const app = express();



const PORT = 3000;
const HOST = "localhost";

 

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

   





/*fs.readFile(file, function (err,data) 
{
    if (err) 
    {
        res.writeHead(404);
        res.end("ERROR: 404 - PAGE NOT FOUND!");
        return;
    }
    res.setHeader("X-Content-Type-Options", "nosniff");
    let mime = lookup(path);
    res.writeHead(200, { "Content-type": mime });
    res.end(data);
});*/