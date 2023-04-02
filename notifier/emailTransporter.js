import nodemailer from 'nodemailer';




export const transporter = nodemailer.createTransport({
    service: 'gmail',
    debug : true,
    auth: {
        user:"peenu000@gmail.com",
        pass:"oraislwawbgyrzgq"
    }
});