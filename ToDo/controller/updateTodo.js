const Todo = require("../models/todo");

exports.updateTodo = async (req,res)=>{
    try{

        const id = req.params.id;
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            id,
            {title,description,updatedAt:Date.now()},
            {new:true}
        );

        res.status(200).json({
            success:true,
            data:todo,
            message:"Entry Updated Successfully"
        });

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        });
    }
}