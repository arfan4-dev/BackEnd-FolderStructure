const Todo=require('../model/Todo');
//Define Router handler
exports.getTodo=async(req,res)=>{
 try{ 
    
        //fetch all todos from DB
        //find() method returns all the documents from a collection, 
        //it is equivalent to select * from table in SQL
    const response=await Todo.find();
    // send a json response with a success flag
   res.status(200).json({
    success:true,
    message:"Get Todo success",
    data:response
   })
 }   
 catch(err){
        res.status(500).json({
            success:false,
            message:"Error in getting Todos"
        })
 }
}



exports.getTodoById=async(req,res)=>{
    try{ 
       
           //fetch by Id todo from DB
           //find() method returns all the documents from a collection, 
        const {id}=req.params;
       const response=await Todo.findById({_id:id});
       // send a json response with a success flag

       //check if todo not found
       if(!response){
        return res.status(404).json({
            success:false,
            message:"Todo not found",
        })
       }
      res.status(200).json({
       success:true,
       message:"Get Todo by Id successful",
       data:response
      })
    }   
    catch(err){
           res.status(500).json({
               success:false,
               message:"Error in getting Todo by Id"
           })
    }
   }