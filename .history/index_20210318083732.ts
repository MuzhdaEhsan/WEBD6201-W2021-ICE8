import fs = require('fs');
//const http = require('http');
//const url = require("url");


import express = require('express');



const app = express();



const PORT = 3000;
const HOST = "localhost";

 
// routing 
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://${HOST}:${PORT}/`)
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