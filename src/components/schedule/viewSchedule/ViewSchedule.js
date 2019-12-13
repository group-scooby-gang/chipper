import React, { useEffect } from 'react';
import Calendar from '../../calendar/Calendar';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
import { viewSchedule } from '../../../redux/ownerReducer';
// import './OwnerDashboard.css';

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
        bigCities.push({date:jobs[i].date,month:jobs[i].month,year:jobs[i].year});
        console.log(bigCities)
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


       // var scheduledClass = (
        //      d === this.jobs[0].date && this.jobs[0].year === this.year() && this.jobs[0].month === this.month() ? " scheduled-day"
        //     :d === jobs[1].date && jobs[1].year === this.year() && jobs[1].month === this.month() ? " scheduled-day"
        //     :d === jobs[2].date && jobs[2].year === this.year() && jobs[2].month === this.month() ? " scheduled-day"
        //     :d === jobs[3].date && jobs[3].year === this.year() && jobs[3].month === this.month() ? " scheduled-day"
        //     :d === jobs[4].date && jobs[4].year === this.year() && jobs[4].month === this.month() ? " scheduled-day"
        //     :d === jobs[5].date && jobs[5].year === this.year() && jobs[5].month === this.month() ? " scheduled-day"
        //     :d === jobs[6].date && jobs[6].year === this.year() && jobs[6].month === this.month() ? " scheduled-day"
        //     :d === jobs[7].date && jobs[7].year === this.year() && jobs[7].month === this.month() ? " scheduled-day"
        //     :d === jobs[8].date && jobs[8].year === this.year() && jobs[8].month === this.month() ? " scheduled-day"
        //     :d === jobs[9].date && jobs[9].year === this.year() && jobs[9].month === this.month() ? " scheduled-day"
        //     :d === jobs[10].date && jobs[10].year === this.year() && jobs[10].month === this.month() ? " scheduled-day"
        //     :d === jobs[11].date && jobs[11].year === this.year() && jobs[11].month === this.month() ? " scheduled-day"
        //     :d === jobs[12].date && jobs[12].year === this.year() && jobs[12].month === this.month() ? " scheduled-day"
        //     :d === jobs[13].date && jobs[13].year === this.year() && jobs[13].month === this.month() ? " scheduled-day"
        //     :d === jobs[14].date && jobs[14].year === this.year() && jobs[14].month === this.month() ? " scheduled-day"
        //     :d === jobs[15].date && jobs[15].year === this.year() && jobs[15].month === this.month() ? " scheduled-day"
        //     :d === jobs[16].date && jobs[16].year === this.year() && jobs[16].month === this.month() ? " scheduled-day"
        //     :d === jobs[17].date && jobs[17].year === this.year() && jobs[17].month === this.month() ? " scheduled-day"
        //     :d === jobs[18].date && jobs[18].year === this.year() && jobs[18].month === this.month() ? " scheduled-day"
        //     :d === jobs[19].date && jobs[19].year === this.year() && jobs[19].month === this.month() ? " scheduled-day"
        //     :d === jobs[20].date && jobs[20].year === this.year() && jobs[20].month === this.month() ? " scheduled-day"
        //     :d === jobs[21].date && jobs[21].year === this.year() && jobs[21].month === this.month() ? " scheduled-day"
        //     :d === jobs[22].date && jobs[22].year === this.year() && jobs[22].month === this.month() ? " scheduled-day"
        //     :d === jobs[23].date && jobs[23].year === this.year() && jobs[23].month === this.month() ? " scheduled-day"
        //     :d === jobs[24].date && jobs[24].year === this.year() && jobs[24].month === this.month() ? " scheduled-day"
        //     :d === jobs[25].date && jobs[25].year === this.year() && jobs[25].month === this.month() ? " scheduled-day"
        //     :d === jobs[26].date && jobs[26].year === this.year() && jobs[26].month === this.month() ? " scheduled-day"
        //     :d === jobs[27].date && jobs[27].year === this.year() && jobs[27].month === this.month() ? " scheduled-day"
        //     :d === jobs[28].date && jobs[28].year === this.year() && jobs[28].month === this.month() ? " scheduled-day"
        //     :d === jobs[29].date && jobs[29].year === this.year() && jobs[29].month === this.month() ? " scheduled-day"
        //     :d === jobs[30].date && jobs[30].year === this.year() && jobs[30].month === this.month() ? " scheduled-day"
        //         : null
        // )
