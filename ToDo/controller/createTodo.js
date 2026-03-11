//import th model
const Todo=require("../models/todo");

//route handler
exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from the request
        const {title,description} =req.body;
        //create a new Todo obl and insert in db
        const response=await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}