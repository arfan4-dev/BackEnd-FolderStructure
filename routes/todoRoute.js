const express=require('express');
const router=express.Router();


//import controller
const {createTodo}=require('../controller/createTodo');
const {getTodo,getTodoById}=require('../controller/getTodo');
const {updateTodo}=require('../controller/createTodo');


 
// define API routes
router.get('/getTodo/:id',getTodoById)
router.get('/getTodo',getTodo)

router.post('/createTodo',createTodo);
router.put('/updateTodo/:id',updateTodo);
module.exports=router; 