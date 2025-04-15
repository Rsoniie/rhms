import nodemailer from 'nodemailer';

async function sendMail(email, message) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: `${process.env.EMAIL}`, 
                pass: `${process.env.APP_PASSWORD}`
            }
        });

        const mailOptions = {
            from: `${process.env.EMAIL}`, 
            to: email,
            subject: 'Test Email',
            text: message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export default sendMail;