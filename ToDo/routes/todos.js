const express=require("express");
const router=express.Router();

const {createTodo}=require("../controller/createTodo");
const {getTodo, getTodobyid}=require("../controller/getTodo");
const {updateTodo}=require("../controller/updateTodo");
const {deleteTodo}=require("../controller/deleteTodo");

//define  API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodobyid);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports=router;