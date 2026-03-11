const Todo=require("../models/todo");

exports.getTodo=async(req,res)=>{
    try{
        //fetch all todo items
        const todos=await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todo data is fetched"
        });
    }
    catch(err){
        console.error(err);
        response.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}

exports.getTodobyid=async(req,res)=>{
    try{
        //extract todo with id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data Found with the given ID"
            })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`todo with id : ${id} was found`
        });
    }
    catch(err){
        console.error(err);
        response.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}