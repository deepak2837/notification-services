import {DB_URL} from './configs/db.config.js'  
import mongoose from "mongoose";
import { ticketNotificationRouter } from './routers/notification.router.js';
import express from "express";

import { cronService } from './cron/cron.js';
var app = express();

cronService();


app.use(express.json());



// mongo db connectiopn 
mongoose.connect(DB_URL)
mongoose.connection.on("error", (err) => {console.log(err)});
mongoose.connection.once("open", () => {console.log("connected to mongo db")});






app.get("/", (req, res) => {
    console.log("hitting notification")
  res.send("hi notification");
});



ticketNotificationRouter(app);







console.log("hi");

const port = 8001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
