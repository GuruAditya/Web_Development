const express=require("express");
const app=express();


const bodyParser=require("body-parser");

//specifically parse Json Data and add it to the request body
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("server Started at port number 3000");
});
app.get('/',(req,res)=>{
    res.send("Hello je, kaise ho");
});

app.post("/api/cars",(request,response)=>{
    const {name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted Successfully");
})
const mongoose=require("mongodb");
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection Successful")})
.catch((error)=>{console.log("recieved an error")});