import React, { useEffect, useState } from 'react';
import Calendar from '../../calendar/Calendar';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
import { viewSchedule } from '../../../redux/ownerReducer';
import { getWalkerSchedule, acceptPendingJob, declinePendingJob } from '../../../redux/walkerReducer';
import axios from 'axios';
import {acceptWalkMessage, declineWalkMessage} from '../../../redux/phoneReducer'
import './viewSchedule.css';

const ViewSchedule = (props) => {
    const [sched, setSched] = useState(false)
    const [own, setOwn] = useState(false)
    const { viewSchedule, getWalkerSchedule, jobs, walkerJobs } = props
    useEffect(() => {
        axios.get('/Chipper/Check/Walker').then((res) => {
            return (res.data.isWalker === false ? viewSchedule() && setSched(true) : getWalkerSchedule() && setOwn(true))
        })
    }, [])

    useEffect(() => {
        showPending()
    }, [])

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
        let pending = (sched ? (jobs.filter(job => job.jobaccepted === false))
            : walkerJobs.filter(walkerJob => walkerJob.jobaccepted === false))
        setpendingRequest(pending)
    }

    var acceptJob = async (walk) => {
        await acceptPendingJob(walk)
        console.log(props.ownerPhone)
        await this.props.acceptWalkMessage(props.ownerPhone[0].phone)
        await getWalkerSchedule()
        await showPending()
    }

    var declineJob = async (walk) => {
        await declinePendingJob(walk)
        console.log(props.ownerPhone)
        await this.props.declineWalkMessage(props.ownerPhone[0].phone)
        await getWalkerSchedule()
        await showPending()
    }

    var pendingMapped = pendingRequest.map((walk) => {
        return (
            <div className='pending_status_mapped'>
                <div className='image_name_status_section'>
                    <img src={walk.img} alt="Dog image" />
                    <div className='name_breed_age_section'>
                        <h3>Name: {walk.name}</h3>
                        <p>Breed: {walk.breed}</p>
                        <p>Age: {walk.age}</p>
                    </div>
                </div>
                <div>Date: {walk.date}</div>
                <div>Year: {walk.year}</div>
                <div className='accept_decline_button_section'>
                    <button onClick={() => acceptJob(walk.job_id)}>Accept Request</button>
                    <button onClick={() => declineJob(walk.job_id)}>Decline Request</button>
                </div>
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
                <div className="selected_day_results">
                    <img src={walk.img} />
                    <div>You are scheduled to walk {walk.name}</div>
                    <div>Date: {walk.month}/{walk.date}/{walk.year}</div>
                    <div>Time: {walk.time}</div>
                    <div>Notes: {walk.notes}</div>
                    <div>Status: {walk.jobaccepted ? 'you have accepted this request' : 'you have not yet accepted this walk request'}</div>
                </div> : null}
            <div>{walk.jobaccepted}</div>
        </div>
        )
    })

    return (
        <div className='schedule_page'>
            <Calendar className='calendar_component_container' jobsFromParent={alteredJobsForChild} onDayClick={(e, day) => onDayClick(e, day)} />
            <span className='selected_days_and_pending_jobs_container'>
                <div className='selected_walks_container'>
                    <h1>Walks</h1>
                    {selectMapped}
                </div>
                <div className='pending_mapped_container'>
                    <h1>Pending Jobs</h1>
                    {pendingMapped}
                </div>
            </span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.ownerReducer.jobs,
    walkerJobs: state.walkerReducer.walkerJobs,
    ownerPhone : state.phoneReducer.ownerPhone
});

export default connect(mapStateToProps, { viewSchedule, logoutUser, getWalkerSchedule, acceptPendingJob, declinePendingJob, acceptWalkMessage, declineWalkMessage })(
    ViewSchedule
);
