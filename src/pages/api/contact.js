import nodemailer from 'nodemailer';
import { generateEmailTemplate } from '@/utils/emailTemplate';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, msg } = req.body;

        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const year = new Date().getFullYear();
        const emailTemplate = generateEmailTemplate(name, email, msg, year);


        try {

            // Send the email
            const mailOptions = {
                from: process.env.MAIL_USER,
                to: process.env.MAIL_TO,
                subject: `New Contact Form Submission from ${name}`,
                replyTo: email,
                html: emailTemplate, // Send inlined HTML
            };

            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
