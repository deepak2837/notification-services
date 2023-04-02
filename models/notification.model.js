import mongoose from "mongoose";

const date = new Date()
const ticketNotificationSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  content:{
type: String,
required: true,

  },
  ticketId:{
    type: String,
    required:true,
    

  },
  requester:{
    type: String,
    required:true,
    
  },
  receipientEmails: {
    type: [String],
    required: true,
},
  sentStatus:{
    type: String,
    required:true,
    default: "UN_SENT"
    
  },
  
  createdAt:{
    type:Date,
    immutable:true,
    default: date
  },
  updatedAt:{
    type:Date,
    default: ()=> Date.now()
  },
 
  

});
export const ticketNotification = mongoose.model("Notification",ticketNotificationSchema);