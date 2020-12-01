const http = require("http")
const express = require("express")
const app = express();
const port = 4430

const server = http.createServer(app)
let people = require ("./people.json")

app.get("/", (req,res)=>{
    res.send("<h1>Some content</h1>")
})

//this will send all of the people.
app.get("/api/people", (req,res)=>{
    res.send(people)
})

app.get("api/people/gender:gender", (req,res)=>{
    console.log(req.params)
    const {gender} = req.params;
    let results = people.filter(person=>person.gender == gender)
    res.send(results)
})

app.get("/api/people/email:email",(req,res)=>{
    const {email} = req.params;
    let results = people.find(person=>person.email == email)
    res.send(results)    
})

server.listen(port)



