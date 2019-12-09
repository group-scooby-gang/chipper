require("dotenv").config();
const express = require("express")
const session = require("express-session")
const massive = require("massive")
const app = express()

//controllers

const auth = require("./controllers/authController")
const pet = require("./controllers/petController")
const walker = require("./controllers/walkerController")

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

app.use(express.json())

//auth
app.post("/Chipper/Register", auth.registerUser)
app.post("/Chipper/Login", auth.loginUser)

//pet
app.post("/Chipper/Pet/Add", pet.addPet)
app.delete("/Chipper/Pet/Remove/:pet_id", pet.deletePet)
app.put("/Chipper/Pet/Edit/:pet_id", pet.editPet)

//walker
app.get("/Chipper/Walker/Application/:application_id", walker.applicationDetails)
app.get("/Chipper/Walker/Applications/Pending", walker.allApplications)
app.get("/Chipper/Walker/Applications/Approved", walker.allAccepted)
app.post("/Chipper/Walker/Applications/Submitted", walker.applyWalker)
app.delete("/Chipper/Walker/Application/Deny/:application_id", walker.denyWalker)
app.put("/Chipper/Walker/Application/Approve/:application_id", walker.acceptWalker)

app.listen(6942, () => console.log("Port 6942"))