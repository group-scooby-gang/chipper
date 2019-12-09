require("dotenv").config();
const express = require("express")
const session = require("express-session")
const massive = require("massive")
const twilio = require("twilio")
const app = express()
const {TWILIO_PHONE_NUMBER, ACCOUNT_SID, AUTH_TOKEN} = process.env;
const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);

//controllers

const auth = require("./authController")
// const twil = require("./twilioController")

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db",  dbInstance)
    console.log("DB Connected")
})
.catch(error => {
    console.log(error)
})

app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: "Where are you"
}))

app.use(express.json)

//twilio
// app.post("/Twilio/Welcome", twil.text)
app.post("/sms", (req, res) => {
    console.log(req.body)
    client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: req.body.number,
        body: `Hello ${req.body.name}. I found your service on Permian. ${req.body.message}. Please contact me at: ${req.body.userNumber} when available.`
    })
        .then(() => {
            res.json({ success: true });
        })
        .catch(err => {
            console.log(err);
            res.json({ success: false });
        });
});

//auth
app.post("/Chipper/Register", auth.registerUser)

app.listen(6942, () => console.log("Listening on server port 6942"))