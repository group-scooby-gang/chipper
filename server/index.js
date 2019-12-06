require("dotenv").config();
const express = require("express")
const session = require("express-session")
const massive = require("massive")
const app = express()

//controllers

const auth = require("./authController")

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

//auth
app.post("/Chipper/Register", auth.registerUser)

app.listen(6942, () => console.log("Port 6924"))