
// imports
import http from "http";
import express from "express";


const port = 3000;
const app = express();

app.use(express.static('./public'));

//rotas TODO!

const server = http.createServer(app);
server.listen(process.env.port || port);