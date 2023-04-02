import {ticketNotification}from "../models/notification.model.js";



export const ticketNotificationStatus = async (request, response) => {
    console.log("hitting notification status")
    const ticketId = request.params.id;
    console.log(ticketId)
    try{
    const status = await ticketNotification.findOne({ticketId:ticketId})
response.status(200).json(status);    
}
    catch(error){
        response.status(500).json({ message: error.message });

};
}

export const ticketNotificationCreate = async (request, response) => {
    console.log("hitting notification create")
    console.log(request.body.content)
    const notification = {
        subject: request.body.subject,
        content: request.body.content,
        ticketId: request.body.ticketId,
       
        receipientEmails: request.body.receipientEmails,
         requester: request.body.requester,
        
    };
    // console.log(notification)
    try {
        const newNotification = await ticketNotification.create(notification);
        response.status(201).json(newNotification);

    }
    catch (error) {
        response.status(500).json({ message: error.message });

}
}