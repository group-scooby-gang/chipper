import React, { useEffect, useState } from 'react';
import Calendar from '../../calendar/Calendar';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
import { viewSchedule } from '../../../redux/ownerReducer';
import { getWalkerSchedule } from '../../../redux/walkerReducer';
// import './OwnerDashboard.css';
import axios from 'axios';

const ViewSchedule = (props) => {
    const [sched, setSched] = useState(false)
    const [own, setOwn] = useState(false)
    const { viewSchedule, getWalkerSchedule, jobs, walkerJobs } = props
    useEffect(() => {
        axios.get('/Chipper/Check/Walker').then((res) => {
            return (res.data.isWalker === false ? viewSchedule() && setSched(true) : getWalkerSchedule() && setOwn(true))
        })
    }, [])

    useEffect(()=>{
        showPending()
    },[])

    function convertMonth(m) {
        // console.log(m.month)
        return m.month === 12 ? 'December'
            : m.month === 11 ? m.month = 'November'
                : m.month === 10 ? m.month = 'October'
                    : m.month === 9 ? m.month = 'September'
                        : m.month === 8 ? m.month = 'August'
                            : m.month === 7 ? m.month = 'July'
                                : m.month === 6 ? m.month = 'June'
                                    : m.month === 5 ? m.month = 'May'
                                        : m.month === 4 ? m.month = 'April'
                                            : m.month === 3 ? m.month = 'March'
                                                : m.month === 2 ? m.month = 'February'
                                                    : m.month === 1 ? m.month = 'January'
                                                        : "nan"
    }

    let alteredJobsForChild = [];
    for (let i = 0; i < jobs.length; i++) {
        jobs[i].month = convertMonth(jobs[i])
        alteredJobsForChild.push({ date: jobs[i].date, month: jobs[i].month, year: jobs[i].year });
    }
    for (let i = 0; i < walkerJobs.length; i++) {
        walkerJobs[i].month = convertMonth(walkerJobs[i])
        alteredJobsForChild.push({ date: walkerJobs[i].date, month: walkerJobs[i].month, year: walkerJobs[i].year });
    }
    console.log('walkerJobs:', walkerJobs)
    // const jobsMapped = jobs.map((val) => {
    //     return (
    //         <div>
    //             <div>Date: {val.date}</div>
    //             <div>First Name: {val.firstname}</div>
    //             <div>Last Name: {val.lastname}</div>
    //             <div>Month: {val.month}</div>
    //             <div>{val.time}</div><div>{val.year}</div>
    //         </div>
    //     )
    // })
    const [pendingRequest, setpendingRequest] = useState([])
    const showPending = () => {
        console.log(jobs)
        console.log(walkerJobs)
        let pending = (sched? (jobs.filter(job => job.jobaccepted === false))
            : walkerJobs.filter(walkerJob => walkerJob.jobaccepted === false))
        setpendingRequest(pending)
    }

    var pendingMapped = pendingRequest.map((walk)=> {
        console.log(pendingRequest)
        console.log('jobaccepted:',walk.jobaccepted,'firstName:', walk.jobaccepted)
        return (<div>
    <div>pendingRequest <button>Accept Request</button><button>Decline Request</button></div>
    <div><img src={walk.img} alt="Dog image"/></div>
        <div>firstName: {walk.name}</div>
        <div>Breed:{walk.breed}</div>
    <div>Dog age:{walk.age}</div>
    <div>Date:{walk.date}</div>
        <div>Year:{walk.year}</div>
        </div>)
    })

    const [apt, setApt] = useState([])
    const onDayClick = (e, day) => {
        e.preventDefault()
        let select = (sched ? (jobs.filter(job => job.date === day))
            : walkerJobs.filter(walkerJob => walkerJob.date === day))
        setApt(select)
    }

    var selectMapped = apt.map((walk) => {
        // console.log( 'walk:' + walk, 'date:' + walk.date, 'year:' + walk.year, 'time:' + walk.time, 'month:' + walk.month, 'fname:' + walk.firstname, 'lname:' + walk.lastname, 'fruit:' + fruit)
        console.log(apt)
        console.log('walk.month:', walk.month, 'walk.jobaccepted', walk.jobaccepted)
        return (<div>
            {sched ?
                <div>
                    <div>Date: {walk.date}</div>
                    <div>First Name: {walk.firstname} </div>
                    <div>Last Name: {walk.lastname} </div>
                    <div>Month: {walk.month} </div>
                    <div>Time: {walk.time}</div>
                    <div>Year: {walk.year}</div>
                </div> : null}
            {own ?
                <div>
                    <div>You are scheduled to walk {walk.name} on {walk.month}/{walk.date}/{walk.year} </div>
                    <div>time: {walk.time}</div>
                    <div>Dog breed: {walk.breed}</div>
                    <div>Dog age: {walk.age}</div>
                    <span>{walk.name}</span><img src={walk.img} />
                    <div>Notes: {walk.notes}</div>
                    <div>Price: {walk.price}</div>
                    <div>status: {walk.jobaccepted?'you have accepted this request':'you have not yet accepted this walk request'}</div>
                </div> : null}
            <div>{walk.jobaccepted}</div>
        </div>
        )
    })

    return (
        <div>
            <Calendar jobsFromParent={alteredJobsForChild} onDayClick={(e, day) => onDayClick(e, day)} />
            {/* {jobsMapped} */}
            <span>
                {selectMapped}
                {pendingMapped}
            </span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.ownerReducer.jobs,
    walkerJobs: state.walkerReducer.walkerJobs
});

export default connect(mapStateToProps, { viewSchedule, logoutUser, getWalkerSchedule })(
    ViewSchedule,
);
