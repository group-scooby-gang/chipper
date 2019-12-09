require('dotenv').config();
const { ACCOUNT_SID, AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

module.exports = {
    text: async (req, res) => {
        console.log(req.body)
        const {phone} = req.body
        client.messages
        .create({
            body: 'Thanks for signing up with the Chipper dog walker!',
            from: TWILIO_PHONE_NUMBER,
            to:phone
        })
        res.status(200).json(body)
        // .then(message => console.log(message.sid))
    }
}


    // verify: async (req, res) => {
    //     const {phone_number, first_name, last_name, user_email, contact_id } = req.body
    //     const db = req.app.get('db');

    //     const foundNumber = await db.contacts.checkForNumber(phone_number)

    //     if (!foundNumber[0]) {
    //         await db.contacts.addContact(phone_number, first_name, last_name, user_email, contact_id);
    //         const contacts = await db.contacts.getAll(user_email);           
    //         res.status(200).json(contacts);
    //     }
