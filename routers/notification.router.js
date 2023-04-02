import { ticketNotificationStatus,ticketNotificationCreate } from "../controllers/notification.controller.js";

export const ticketNotificationRouter = function (app) {
  app.get("/crm/api/notification/:id", ticketNotificationStatus);
  
  app.post("/crm/api/notification", ticketNotificationCreate);
};
