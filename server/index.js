const path = require('path');
require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const massive = require('massive');
const {
	TWILIO_PHONE_NUMBER,
	ACCOUNT_SID,
	AUTH_TOKEN,
	SERVER_PORT
} = process.env;
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

//controllers
const auth = require('./controllers/authController');
const pet = require('./controllers/petController');
const walker = require('./controllers/walkerController');
const job = require("./controllers/jobsController")
const owner = require("./controllers/ownerController")

app.use( express.static( `${__dirname}/../build` ))

massive(process.env.CONNECTION_STRING)
	.then((dbInstance) => {
		app.set('db', dbInstance);
		console.log('DB Connected');
	})
	.catch((error) => {
		console.log(error);
	});

app.use(
	session({
		saveUninitialized: true,
		resave: false,
		secret: 'Where are you'
	})
);

app.use(express.json());

// Sets traffic rules for headers
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'),
		res.header(
			'Access-Control-Allow-Headers',
			'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
		);
	next();
});

//auth
app.post('/Chipper/Register', auth.registerUser);
app.post('/Chipper/Login', auth.loginUser);
app.get('/Chipper/Check/Walker', auth.isWalker);
app.post('/Chipper/Logout', auth.logoutUser);

//pet
app.post('/Chipper/Pet/Add', pet.addPet);
app.delete('/Chipper/Pet/Remove/:pet_id', pet.deletePet);
app.put('/Chipper/Pet/Edit/:pet_id', pet.editPet);
app.get("/Chipper/Pet/History/:pet_id", pet.petsWalks)
app.get("/Chipper/Pet/Details/:pet_id", pet.petDetails)

//walker
app.get('/Chipper/Walker/Application/:application_id', walker.applicationDetails);
app.get('/Chipper/Walker/Applications/Pending', walker.allApplications);
app.get('/Chipper/Walker/Applications/Approved', walker.allAccepted);
app.post('/Chipper/Walker/Applications/Submitted', walker.applyWalker);
app.delete('/Chipper/Walker/Application/Deny/:application_id', walker.denyWalker);
app.put('/Chipper/Walker/Application/Approve/:application_id', walker.acceptWalker);
app.get("/Chipper/Walker/NextJobs", walker.getWalkerSchedule)
app.get("/Chipper/Profile/Walker", walker.getWalkerProfile)
app.get("/Chipper/History/Walker", walker.walkerHistory)
app.get("/Chipper/Walker/NextJobs", walker.getWalkerSchedule);
app.get('/Chipper/Walker/Search', walker.searchWalker);
app.get('/Chipper/Walker/:id', walker.getWalker);
app.put("/Chipper/Walker/Profile/Edit", walker.editWalker)
app.get("/Chipper/Phone/:id", walker.walkerPhone)

//jobs
app.post("/Chipper/Jobs/Hire", job.addJob) //Where jobs are posted into db and put as false (aka pending)
app.put("/Chipper/Jobs/Accept/:job_id", job.acceptJob) //Where walkers accept jobs
app.delete("/Chipper/Jobs/Decline/:job_id", job.declineJob) //Where walkers decline jobs
app.get("/Chipper/Jobs/Pending", job.walkerPendingJobs) //Where walkers can see their pending hires
app.put("/Chipper/Jobs/Start/:job_id", job.startWalk) //When a walker starts a walk, it changes the status of the walk
app.put("/Chipper/Jobs/Complete/:job_id", job.completeWalk) //When a walker finished a job, marks job as complete in db


//owner
app.get("/Chipper/Owner/Schedule", owner.ownerSchedule)
app.get("/Chipper/Owner/Pets", pet.ownersPets)

app.listen(SERVER_PORT, () =>
	console.log(`Server is listening on entry port ${SERVER_PORT}`)
);

//twilio
app.post('/sms', (req, res) => {
	console.log(req.body);
	client.messages
		.create({
			from: TWILIO_PHONE_NUMBER,
			to: req.body.number,
			body: `Hello ${req.body.name}. I found your service on Chipper. ${req.body.message}. Please contact me at: ${req.body.userNumber} when available.`
		})
		.then(() => {
			res.json({ success: true });
		})
		.catch((err) => {
			console.log(err);
			res.json({ success: false });
		});
});

app.post('/sms/walker/jobNotification', (req, res) => {
	client.messages.create({
		from: TWILIO_PHONE_NUMBER,
		to: req.body.number,
		body: `Greetings from Chipper! You have a new pending walk waiting for you!`
	})
	.then(() => {
		res.status(200).json("Text sent")
	})
	.catch(error => {
		console.log(error)
	})
})

app.post("/sms/owner/onTheWay", (req, res) => {
	client.messages.create({
		from: TWILIO_PHONE_NUMBER,
		to: req.body.number,
		body: `Your walker is on their way to pick up your dog!`
	})
	.then(() => {
		res.status(200).json("Sent")
	})
	.catch(error => {
		console.log(error)
	})
})

app.post("/sms/owner/walkStarted", (req, res) => {
	client.messages.create({
		from: TWILIO_PHONE_NUMBER,
		to: req.body.number,
		body: "Your walker is starting your scheduled walk! Hope you said bye to your pet!"
	})
	.then(() => {
		res.status(200).json("Sent Bro")
	})
	.catch(error => {
		console.log(error)
	})
})

app.post("/sms/owner/walkCompleted", (req, res) => {
	client.messages.create({
		from: TWILIO_PHONE_NUMBER,
		to: req.body.number,
		body: `Your walker has returned your dog!`
	})
	.then(() => {
		console.log("Text sent to peasent")
	})
	.catch(error => {
		console.log(error)
	})
})

app.post("/sms/owner/acceptedWalk", (req, res) => {
	client.messages.create({
		from: TWILIO_PHONE_NUMBER,
		to: req.body.number,
		body: `Congrats, your new walk has been accepted!`
	})
	.catch(error => {
		console.log(error)
	})
})

app.post("/sms/owner/declinedWalk", (req, res) => {
	client.messages.create({
		from: TWILIO_PHONE_NUMBER,
		to: req.body.number,
		body: `Sorry, but unfortunately your walk has been declined.`
	})
	.catch(error => {
		console.log(error)
	})
})