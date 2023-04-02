import cron from 'node-cron';
import { ticketNotification } from '../models/notification.model.js';
import { transporter } from '../notifier/emailTransporter.js';





export const cronService =()=> {cron.schedule('*/5 * * * * *', async () => {
    const notifications = await ticketNotification.find({
        sentStatus: "UN_SENT"
    })

    console.log(`Count of unsent notification: ${notifications.length}`)

    notifications.forEach(notification => {
        const mailData = {
            from: 'anshulyadav9898@gmail.com',
            to: notification.receipientEmails,
            subject: notification.subject,
            text: notification.content
        }
        console.log(mailData)

        transporter.sendMail(mailData, async (err, info) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log(info)
                const savedNotification = await ticketNotification
                    .findOne({ _id: notification._id })
                savedNotification.sentStatus = "SENT"
                await savedNotification.save()
            }
        })
    })
})}