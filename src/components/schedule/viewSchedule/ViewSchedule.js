import React, { useEffect } from 'react';
import Calendar from '../../calendar/Calendar';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
// import './OwnerDashboard.css';
import { viewSchedule } from '../../../redux/ownerReducer';

const ViewSchedule = (props) => {
    const { jobs, viewSchedule } = props
    useEffect(() => {
        viewSchedule();
    }, [])

    function convertMonth(m) {
        console.log(m.month)
        return m.month=== 12 ? 'December'
        : m.month== 11 ?m.month='November'
        : m.month== 10 ?m.month='October'
        : m.month== 9 ? m.month='September'
        : m.month== 8 ? m.month='August'
        : m.month== 7 ? m.month='July' 
        : m.month== 6 ? m.month='June' 
        : m.month== 5 ? m.month='May' 
        : m.month== 4 ? m.month='April' 
        : m.month== 3 ? m.month='March' 
        : m.month== 2 ? m.month='February' 
        : m.month== 1 ? m.month='January' 
        : "nan"
    } 
    let bigCities = [];
    for (let i = 0; i < jobs.length; i++) {
        jobs[i].month = convertMonth(jobs[i])
        bigCities.push(jobs[i]);
}
console.log(bigCities);
    const jobsMapped = jobs.map((val, index) => {
        return (
            <div>
                <div>Date: {val.date}</div>
                <div>First Name: {val.firstname}</div>
                <div>Last Name: {val.lastname}</div>
                <div>Month: {val.month}</div>
                <div>{val.time}</div><div>{val.year}</div>
            </div>
        )
    })
    return (
        <div>
            <Calendar bigCities={bigCities} />
            {jobsMapped}
        </div>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.ownerReducer.jobs
});

export default connect(mapStateToProps, { viewSchedule, logoutUser })(
    ViewSchedule
);

//    let daysInMonth = [];
//         for (let d = 1; d <= this.daysInMonth(); d++) {
//             let className = (d === this.currentDay() ? "day current-day": "day");
//             let selectedClass = (d === this.state.selectedDay ? " selected-day " : "");
//             let scheduledClass = (d === this.props.bigCities[2] ? " scheduled-day": "");
//             let jobs = this.props.bigCities;
//             for (let i=0;i<=jobs.length-1;i++){
//             var scheduledClass = (jobs[i].year === this.year() && jobs[i].month === this.month() && jobs[i].date === d ? "scheduled-day": ""); 
//             }
//             daysInMonth.push(
//                 <td key={d} className={className + selectedClass + scheduledClass} >
//                     <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
//                 </td>
//             );
//         }
