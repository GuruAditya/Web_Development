const mongoose=require("mongoose");

require("dotenv").config();
const Dbconnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB connection successful"))
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.log(error.message);
        process.exit(1);
    })
}
module.exports=Dbconnect;