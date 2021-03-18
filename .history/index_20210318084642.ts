import fs = require('fs');
//const http = require('http');
//const url = require("url");
import path = require('path');

import express = require('express');
import { ServerResponse } from 'node:http';



const app = express();



const PORT = 3000;
const HOST = "localhost";


// static files
app.use(express.static(path.join(__dirname, "node_modules")));
 
// routing 
  app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
  });


  // kicks off the server and listens on PORT
  app.listen(PORT, () => {
    console.log(`Example app listening at http://${HOST}:${PORT}/`)
  });

   function displaySPA(res:any): void
   {
    fs.readFile("index.html", (err,data) =>
    {
        if (err) 
        {
            res.writeHead(404);
            res.end("ERROR: 404 - PAGE NOT FOUND!");
            return;
        }
     
        
        res.writeHead(200);
        res.end(data);
    });
   }





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