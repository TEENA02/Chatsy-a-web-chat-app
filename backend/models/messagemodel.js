import mongoose from "mongoose";
const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true, 
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true, 
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})
//the time stamp will automatically generate the created at and update d at field
const Message= mongoose.model("Message",messageSchema)
export default Message;