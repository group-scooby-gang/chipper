//Notes
//For every submitted application, status goes as false as the app is unapproved
// Once approved, status will be true

const applyWalker = async (req, res) => {
	const db = req.app.get('db');
	const id = req.session.user.id;
	const { experience, category, fifteen, thirty, fortyfive, sixty } = req.body;
	const appStatus = false;
	const application = await db.applyWalker(
		id,
		experience,
		category,
		appStatus,
		fifteen,
		thirty,
		fortyfive,
		sixty
	);
	res.status(200).json('Application Submitted');
};

const denyWalker = async (req, res) => {
	const db = req.app.get('db');
	const application_id = +req.params.application_id;
	const deny = await db.denyWalker(application_id);
	res.status(200).json('Application Deleted');
};

const acceptWalker = async (req, res) => {
	const db = req.app.get('db');
	const application_id = +req.params.application_id;
	const accept = await db.acceptWalker(application_id);
	res.status(200).json('Application Approved');
};

const allApplications = async (req, res) => {
	const db = req.app.get('db');
	const apps = await db.allWalkerApplications();
	res.status(200).json(apps);
};

const allAccepted = async (req, res) => {
	const db = req.app.get('db');
	const allAcceptApplicatipns = await db.allAcceptedWalkerApplications();
	res.status(200).json(allAcceptApplicatipns);
};

const applicationDetails = async (req, res) => {
	const db = req.app.get('db');
	const application_id = +req.params.application_id;
	const applicationDets = await db.getApplicationFullDetails(application_id);
	res.status(200).json(applicationDets);
};

const getWalkerSchedule = async (req, res) => {
	const db = req.app.get('db');
	const id = req.session.user.id;
	const schedule = await db.WalkerSchedule(id);
	res.status(200).json(schedule);
};

const getWalkerProfile = async (req, res) => {
	const db = req.app.get('db');
	const id = req.session.user.id;
	const profile = await db.WalkerProfile(id);
	res.status(200).json(profile);
};

const walkerHistory = async (req, res) => {
	const db = req.app.get('db');
	const id = req.session.user.id;
	const history = await db.walkerHistory(id);
	res.status(200).json(history);
};

const searchWalker = async (req, res) => {
	const db = req.app.get('db');
	const { state, city } = req.query;
	const searchedWalker = await db.WalkerSearch(state, city);
	res.status(200).json(searchedWalker);
};

const getWalker = async (req, res) => {
	const db = req.app.get('db');
	const { id } = req.params;
	const getWalkerById = await db.getWalker(id);
	res.status(200).json(getWalkerById);
};

const editWalker = async (req, res) => {
	const db = req.app.get('db');
	const {username, firstname, lastname, email, profileimg, phone, address, city, state, zip, experience, _15minprice, _30minprice, _45minprice, _60minprice} = req.body;
	const id = req.session.user.id;
	await db.updateWalker(id, username, firstname, lastname, email, profileimg, phone, address, city, state, zip, experience, _15minprice, _30minprice, _45minprice, _60minprice);
	res.status(200).json("Walker edited")
}

module.exports = {
	applyWalker,
	denyWalker,
	acceptWalker,
	allApplications,
	allAccepted,
	applicationDetails,
	getWalkerSchedule,
	getWalkerProfile,
	walkerHistory,
	searchWalker,
	getWalker,
	editWalker
};
