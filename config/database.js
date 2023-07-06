const mongoose=require('mongoose')
require('dotenv').config();
const mongoosDB=()=>{
    mongoose.connect(process.env.BATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Database connected"))
    .catch((err)=>{
        console.log(err.message);
        process.exit(1);
    }
        )
}

module.exports=mongoosDB;