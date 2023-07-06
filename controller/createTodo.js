const Todo=require('../model/Todo'); 

//Define Router handler
exports.createTodo=async(req,res)=>{
 try{ 
    //extract title and other fields from req.body
    const { title,description }=req.body;
    //create a new todo object and insert in DB
    const response=await Todo.create({title,description});
    // send a json response with a success flag
    res.status(200).json({
        success:true,
        data:response,
        message:"Todo created successfully"

    })
 }   
 catch(err){
        res.status(500).json({
            success:false,
            message:"Server error"
        })
 }
}