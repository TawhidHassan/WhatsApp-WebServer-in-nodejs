const express = require("express");
var http = require("http");
const app = express();
const cors=require("cors")
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server,{
    cors:
    {
        origin:"*"
    }
});


//middlewre
app.use(express.json());
app.use(cors());
var clients = {};


io.on("connection",(socket) => {

    console.log("conneted");

})



server.listen(port, "0.0.0.0", () => {
    console.log("server started");
  });