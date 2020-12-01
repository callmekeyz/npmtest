const http = require("http")
const express = require("express");
const app = express();
const serrver = http.createServer(app)
const port = 4430;

db = {
    posts:[
        {
            id:"001",
            title: "Good things", content:  "lorium ipsum"
        },
        {
            id:"002",
            title:"bad thingd", content:"FooBar"
        }
    ],
    people:[
        {
            id:"p001",
            name:"keyz"
        },
        {
            id:"p002",
            name:"rick"
        }
    ]
}

app.get("api/post/:id",(req,res)=>{
    const {id} = req.params;
    const foundPost = db.posts.find(post=>post.id ==id)
    res.send(foundPost)
})

app.get("api/post/:id",(req,res)=>{
    const {type} = req.params;
    res.send(db[type])
})
serrver.listen(port, ()=>console.log('listening on port ${port}'))