import React, { useEffect, useState } from 'react';
import Calendar from '../../calendar/Calendar';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
import { viewSchedule } from '../../../redux/ownerReducer';
// import './OwnerDashboard.css';

const ViewSchedule = (props) => {

    const { jobs, viewSchedule } = props
    useEffect(() => {
        viewSchedule();
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

    let bigCities = [];
    // console.log('bigCities:', bigCities)
    // console.log('view schedule jobs:',jobs)
    for (let i = 0; i < jobs.length; i++) {
        jobs[i].month = convertMonth(jobs[i])
        bigCities.push({ date: jobs[i].date, month: jobs[i].month, year: jobs[i].year });
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
    
    const [apt, setApt] = useState([])
    const onDayClick = (e, day) => {
        alert(day)
        e.preventDefault()
        let select = (jobs.filter(job => job.date === day))
        setApt(select)
    }
    
    var selectMapped = apt.map((walk) => {
        // console.log( 'walk:' + walk, 'date:' + walk.date, 'year:' + walk.year, 'time:' + walk.time, 'month:' + walk.month, 'fname:' + walk.firstname, 'lname:' + walk.lastname, 'fruit:' + fruit)
        console.log(apt)
        return (
            <div>
    <div>Date: {walk.date}</div> 
               <div>First Name: {walk.firstname} </div>
               <div>Last Name: {walk.lastname} </div>
               <div>Month: {walk.month} </div>
               <div>Time: {walk.time}</div>
               <div>Year: {walk.year}</div>
            </div>
        )
    })

    return (
        <div>
            <Calendar bigCities={bigCities} onDayClick={(e, day) => onDayClick(e, day)}/>
            {/* {jobsMapped} */}
            <span>
            {selectMapped}
            </span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.ownerReducer.jobs
});

export default connect(mapStateToProps, { viewSchedule, logoutUser })(
    ViewSchedule
);
