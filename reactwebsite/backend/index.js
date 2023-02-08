const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const Jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/guidingangles',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() =>{
    console.log("DB connected")
})

/*mongoose.connect('mongodb+srv://aryan23:sirodkar10@cluster0.kxxsedt.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() =>{
    console.log("DB connected")
})*/

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    age : Number
})

//creating model for schema
const User = new mongoose.model("user",userSchema)

app.post("/login",(req,res) => {
    const {email, password} = (req.body)
    //res.send("Guiding Angles")
    User.findOne({email : email}, (err,user)=>{
        if(err)
        {
            res.send(err)
        }
        if(user)
        {
            if(password == user.password)
            {
                res.send({message : "Login successful, click login to enter", user : user, flag : "1"})
            }
            else
            {
                res.send({message : "Password did not match "})
                
            }
        }
        else
        {
            res.send({message : "User dosent exist"})
            //alert("user does'nt exist")
        }
    })
})

app.post("/register",(req,res) => {
    const {name, email, password, age} = (req.body)
    User.findOne({email : email}, (err,user)=>{
        if(err)
        {
            res.send(err)
        }
        if(user)
        {
            res.send({message : "User already exists. Kindly login"})
            //alert("User already exists. Kindly login")
        }
        else
        {
            const user = new User({
            name : name,
            email : email,
            password : password,
            age : age
            })
            user.save(err => {
            if(err)
            {
                res.send(err)
            }
            else
            {
                res.send({message: "sucessfully registered. Kindly login"})
                
              //  alert("Sucessfully")
            }
            })
        }
    })
    
})

app.listen(9002,() => {
    console.log("Its working")
})