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

//pet
app.post('/Chipper/Pet/Add', pet.addPet);
app.delete('/Chipper/Pet/Remove/:pet_id', pet.deletePet);
app.put('/Chipper/Pet/Edit/:pet_id', pet.editPet);

//walker
app.get(
	'/Chipper/Walker/Application/:application_id',
	walker.applicationDetails
);
app.get('/Chipper/Walker/Applications/Pending', walker.allApplications);
app.get('/Chipper/Walker/Applications/Approved', walker.allAccepted);
app.post('/Chipper/Walker/Applications/Submitted', walker.applyWalker);
app.delete(
	'/Chipper/Walker/Application/Deny/:application_id',
	walker.denyWalker
);
app.put(
	'/Chipper/Walker/Application/Approve/:application_id',
	walker.acceptWalker
);

app.listen(SERVER_PORT, () => console.log(`Server is listening on entry port ${SERVER_PORT}`))

//twilio
app.post("/sms", (req, res) => {
    console.log(req.body)
    client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: req.body.number,
        body: `Hello ${req.body.name}. I found your service on Chipper. ${req.body.message}. Please contact me at: ${req.body.userNumber} when available.`
    })
        .then(() => {
            res.json({ success: true });
        })
        .catch(err => {
            console.log(err);
            res.json({ success: false });
        });
  });