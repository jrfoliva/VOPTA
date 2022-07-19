
// imports
import http from "http";
import express from "express";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));


const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});