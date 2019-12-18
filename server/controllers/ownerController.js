const ownerSchedule = async (req, res) => {
	const db = req.app.get('db');
	console.log(req.session);
	const id = req.session.user.id;
	const schedule = await db.OwnerSchedule(id);
	res.status(200).json(schedule);
};


module.exports = {
	ownerSchedule
};
