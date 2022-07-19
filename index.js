
// imports
import http from "http";
import express from "express";


const port = 80;
const app = express();

app.use(express.static('./public'));

//rotas TODO!

const server = http.createServer(app);
server.listen(port, ()=> {
    console.log('Server started at port: ', port);
});