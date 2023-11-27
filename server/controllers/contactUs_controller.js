const express = require("express");
const app = express();
app.use(express.json());
const nodemailer = require('nodemailer');
var cors = require('cors');
app.use(cors());
const db = require("../Models/config/db");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohammedhassouna000@gmail.com',
        pass: 'iyfyzqcsphpdwgvz',
    },
    auth: {
        user: 'psmohammad780@gmail.com',
        pass: 'lpvkrxpgamkzlwzl',
    },
});

const sendMessageEmail = async (fullname, email, message, subject) => {
    const mailOptions = {
        from: email,
        to: 'mohammedhassouna000@gmail.com',
        // to: email,
        subject: subject,
        html: `<p><strong>fullname:</strong> ${fullname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };
    // console.log(email);
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};



const saveContactToDatabase = async (fullname, email, message, subject) => {
    try {
        const result = await db.query(
            'INSERT INTO contact_us (fullname, email, message, subject) VALUES ($1, $2, $3, $4)',
            [fullname, email, message, subject]
        );
        console.log('Contact saved to database:', result.rows);
    } catch (error) {
        console.error('Error saving contact to database:', error);
    }
};

const sendEmailContact = async (req, res) => {
    try {
        const fullname = req.body.fullname;
        const email = req.body.email;
        const message = req.body.message;
        const subject = req.body.subject;

        await sendMessageEmail(fullname, email, message, subject);
        await saveContactToDatabase(fullname, email, message, subject);

        res.status(200).json({ message: 'Email has been sent and contact details saved.' });
    } catch (error) {
        console.error('Error sending email or saving contact:', error);
        res.status(500).json({ error: 'An error occurred while sending the email or saving contact details.' });
    }
};

//is deleted 
// update flase to true & true to false
const getContact =  async (req, res) => {
    try {

        const result = await db.query('SELECT * FROM contact_us WHERE is_deleted = false');

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contact not found or already deleted.' });
        }
        const contactDetails = result.rows[0];
        res.status(200).json({ contact: contactDetails });
    } catch (error) {
        console.error('Error fetching contact details:', error);
        res.status(500).json({ error: 'An error occurred while fetching contact details.' });
    }
};

const getContactById =  async (req, res) => {
    try {
        const contactId = req.params.id;

        // Fetch contact details from the database
        const result = await db.query('SELECT * FROM contact_us WHERE contact_id = $1 AND is_deleted = false', [contactId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contact not found or already deleted.' });
        }
        const contactDetails = result.rows[0];
        res.status(200).json({ contact: contactDetails });
    } catch (error) {
        console.error('Error fetching contact details:', error);
        res.status(500).json({ error: 'An error occurred while fetching contact details.' });
    }
};
module.exports = {
    sendEmailContact,

    getContact,
    
    getContactById
}
