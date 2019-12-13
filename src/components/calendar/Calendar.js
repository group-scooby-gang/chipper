import React from 'react';
import moment from 'moment';
import './calendar.css';

export default class Calendar extends React.Component {
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null,
        //move three below to reducer so that will be able to pass to db
    }

    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.style.width = this.width; // add this
    }


    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }
    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    MonthNav = () => {
        return (
            <span className="label-month"
            onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                 <this.SelectList data={this.months} />
                }
            </span>
        );
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ?
            <input
                defaultValue = {this.year()}
                className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput}}
                onKeyUp= {(e) => this.onKeyUpYear(e)}
                onChange = {(e) => this.onYearChange(e)}
                type="number"
                placeholder="year"/>
            :
            <span
                className="label-year"
                onDoubleClick={(e)=> { this.showYearEditor()}}>
                {this.year()}
            </span>
        );
    }

    onDayClick = (e, day) => {
           this.setState({
            selectedDay: day
        }, () => {
            console.log("SELECTED DAY: ", this.state.selectedDay);
        })
        this.props.onDayClick &&this.props.onDayClick(e, day);
    }

    render() {
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );
        }
       
        // console.log("blanks: ", blanks);

        // let daysInMonth = [];
        // for (let d = 1; d <= this.daysInMonth(); d++) {
        //     let className = (d === this.currentDay() ? "day current-day": "day");
        //     let selectedClass = (d === this.state.selectedDay ? " selected-day " : "");
        //     let scheduledClass = (d === 2 ? " scheduled-day ": "");
        //     daysInMonth.push(
        //         <td key={d} className={className + selectedClass + scheduledClass} >
        //             <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
        //         </td>
        //     );
        // }

           let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d === this.currentDay() ? "day current-day": "day");
            let selectedClass = (d === this.state.selectedDay ? " selected-day " : "");
            let jobs = this.props.bigCities;
            for (let i=0;i<=jobs.length-1;i++){
                // (d === jobs[i].date ? matches.push(d):console.warn(matches))
                // (jobs[i].date === d ? matches.push({date:jobs[i].date,month:jobs[i].month,year:jobs[i].year}):console.warn(matches))
                console.log(jobs[i].date)
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
                }
            daysInMonth.push(
                <td key={d} className={className + selectedClass } >
                    <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
                </td>
            );
        }

        console.log("days: ", daysInMonth);
        console.log("selected day", this.state.selectedDay);
        console.log("selected year", this.year())
        console.log("selected month", this.month())
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i*100}>
                    {d}
                </tr>
            );
        })

        return (
            <div className="calendar-container" style={this.style}>
                {/* {matchesMapped} */}
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                                <this.MonthNav />
                                {" "}
                                <this.YearNav />
                                <i className="prev fa fa-fw fa-chevron-left"
                                    onClick={(e)=> {this.prevMonth()}}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                    onClick={(e)=> {this.nextMonth()}}>
                                </i>
                            </td>
                            {/* <td colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron-left"
                                    onClick={(e)=> {this.prevMonth()}}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                    onClick={(e)=> {this.nextMonth()}}>
                                </i>
                            </td> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>
            </div>

        );
    }
}

