const fs = require("fs")
const http = require("http")
const uuid = require("uuid")
const randomColor = require("randomcolor")
const port = 5555;

let hmtlFile = ``;
const serveFile = (res)=>{

}
const server = http.createServer((req,res)=>{
    res.setHead(200,{
        "Content-Type": "text/html"
    });
    res.write(hmtlFile)
    res.end()
});
server.listen(port,()=>{
    console.log('port is intializes on: ${port}');
});