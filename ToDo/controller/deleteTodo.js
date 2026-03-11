const Todo = require("../models/todo");

exports.deleteTodo = async (req,res)=>{
    try{

        const id = req.params.id;

        const todo = await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo Deleted Successfully"
        });

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }
}