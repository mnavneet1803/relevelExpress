const express = require('express')
const app = express()
app.use(express.json())
app.get('/user:name',(req,res)=>{
    let  obj={
        paramR:"Hii" + req.params.name,
        queryR:""
    }

    // const response= req.params
    //  "hey",response
    console.log(req.params)
    if(req.query.q === "what is your name"){
        obj.queryR = "My name is lakhan"
    }
    else{
        obj.queryR = "My age is 24"
    }
    res.send(obj)
})
app.post('/navneet',(req,res)=>{

        console.log(req.body)
        if(req.body.age<18){
            res.send("xyz")
        }
        else{
            res.send("abc")
        }
})

app.listen(8888 , ()=>{
    console.log("server is running at 8888")
})