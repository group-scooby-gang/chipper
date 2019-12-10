const addJob = async (req, res) => {
    const db = req.app.get("db")
    const {pet_id, price, notes, walker_id, month, date, year, time} = req.body;
    console.log(walker_id)
    const jobAccepted = false;
    // Pet_id, prices, and notes are what the user will input . User_is is whatever walker the user chooses
    await db.addJob(pet_id, price, jobAccepted, notes, walker_id, month, date, year, time)
    res.status(200).json("Job Added")
}

const acceptJob = async (req, res) => {
    const db = req.app.get("db")
    const job_id = +req.params.job_id;
    console.log(job_id)
    await db.acceptJob(job_id)
    res.status(200).json("Job Accepted!")
}

const declineJob = async (req, res) => {
    const db = req.app.get("db")
    const job_id = +req.params.job_id;
    await db.declineJob(job_id)
    res.status(200).json("Job declined")
}


const walkerPendingJobs = async (req, res) => {
    const db = req.app.get("db")
    //Will use session id as only walkers that are logged in can see these
    const id = req.session.user.id
    const pendingJobs = await db.WalkerPendingJobs(id)
    res.status(200).json(pendingJobs)
}


module.exports = {
    addJob,
    acceptJob,
    declineJob,
    walkerPendingJobs
}