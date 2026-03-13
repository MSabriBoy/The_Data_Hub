const express = require('express')

const router= express.Router()

let blogPosts = []

router.get("/posts",(req, res)=>{
    res.json({blogPosts})
})

router.get("/posts/:id",(req,res)=>{
    const id = req.params.id
    console.log(id)
    res.json({
        message:`post according to the id/:${id}`
    })
})

router.post("/posts",(req,res)=>{
    
    const newPost= {
        id: Date.now(),
        title: req.body.title
    }
blogPosts.push(newPost)
    res.json({
message:"Post added",
data: blogPosts
    })
})

router.put("/posts/:id",(req, res)=>{

    res.json({
        message:`Post updated for id/: ${req.params.id}`

    })
})

router.delete("/posts/:id",(req, res)=>{

    const id=req.params.id
    blogPosts = blogPosts.filter((post)=>post.id!=id)
    res.json({
        message:`Post Deleted with id : ${id}`,
        data: blogPosts
    })
})

//jwt fake authentication
router.post("/login",(req,res)=>{
    const {username, password}= req.body;

    if(username === "admin" && password === "1234"){
        res.json({
            token:"Fake-jwt-token-12345"
        })
        } else {
            res.json({
                message: "Invalid credidentials"
            })
    }
})


module.exports= router