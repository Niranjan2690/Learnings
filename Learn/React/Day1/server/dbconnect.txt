const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config.json")

//---------------------------------------------

//------------------Mongoose Connection----------------------------------------
//step 1: Create schema
//step 2: Schema needs an object id


//Step 1

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId; // This ObjectId is used to create model of the object in mongoose
let user = mongoose.model("user", Schema({
    id : ObjectId,
    title: String,
    firstname: String,
    lastname: String,
    city: String,
    power: String
}));

const url = config.url.replace("{{username}}", config.username)
                      .replace("{{Password}}", config.Password)
                      .replace("{{dbasename}}", config.dbasename)
                      .replace("{{dbstring}}", config.dbstring)

//console.log(url)
mongoose.connect(url)
        .then(res=>{console.log("DB is Connected")})
        .catch(error=>{console.log("Error", error)})



//---------------------------Express Connection------------


let app = express()
app.listen(config.port, config.host, function(error){
    if(error){
        console.log("Error", error)
    } else{
        console.log(`Express is connected on ${config.host}:${config.port}`)
    }
})

app.get("/", function(req, res){
    res.send("Welcome to your life Niranjan")
})

app.get("/data", function(req, res){
    res.send("You have reached the data")
})

//-------------CRUD-------------

//1. Create

 let User = new user({
    title: "Practice",
    firstname: "Niranjan",
    lastname: "Purushothaman",
    city: "Chennai",
    power: "100"
})

User.save()
    .then(dbres=>{
        console.log(User.title, " is added to DB")
        console.log(dbres)
    })
    .catch(err=>{
        console.log("Error", err)
    })


//2. Read
setTimeout(function(){
    user.find()
    .then(res=>{console.log(res)})
    .catch(err=>{console.log("Error", err)})
},5000) 

app.get("/object", function(req, res){
    user.find()
        .then(dbrs=>res.send(dbrs))
        .catch(err=>{console.log("Error", err)})
});


//3. Update

 user.findByIdAndUpdate({_id: "65107493bde0501964d5fc28"})
    .then(dbres=>{
        let change = new user(dbres);
        change.power = "20";
        change.firstname = "Dhruvesh";
        change.lastname = "Niranjan";
        change.save().then(update=>{console.log(update)}).catch(err=>{console.log("Error", err)})
    })
    .catch(err=>{
        console.log("Error", err)
    })


//4. Delete

user.findByIdAndDelete({_id: "65107493bde0501964d5fc28"})
    .then(dbres=>{console.log(dbres.title, " is deleted")})
    .catch(err=>{console.log("Error", err)})