import React from 'react';
import moment from 'moment';
import './calendar.css';
import { updateState } from '../../redux/calendarReducer';
import { connect } from 'react-redux';

class Calendar extends React.Component {
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

    nextMonth = (e) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth(e, dateContext);
        this.highlight(this.props.jobsFromParent)
    }

    prevMonth = (e) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth(e, dateContext);
        this.highlight(this.props.jobsFromParent)
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();
        this.highlight(this.props.jobsFromParent)
    }

    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => { this.onSelectChange(e, data) }}>
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
        this.highlight(this.props.jobsFromParent)
    }

    MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e) => { this.onChangeMonth(e, this.month()) }}>
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
                    defaultValue={this.year()}
                    className="editor-year"
                    ref={(yearInput) => { this.yearInput = yearInput }}
                    onKeyUp={(e) => this.onKeyUpYear(e)}
                    onChange={(e) => this.onYearChange(e)}
                    type="number"
                    placeholder="year" />
                :
                <span
                    className="label-year"
                    onDoubleClick={(e) => { this.showYearEditor() }}>
                    {this.year()}
                </span>
        );
    }

    onDayClick = (e, day) => {
        e.preventDefault()
        this.setState({
            selectedDay: day,
        }, () => {
        });
        this.props.onDayClick && this.props.onDayClick(e, day);
        this.highlight(this.props.jobsFromParent)
    }

    scheduledClass = () => {
        return "scheduled-day"
    }

    
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>

    
    highlight = (jobs, daysInMonth) => {
        var arrMonth = []
        var arrYear = []
        var arrDate = []
        let parentSort = (jobs) => {
        let childSort = (jobs) => {        
            if (jobs.month === this.month() && jobs.year === +this.year()) {
                arrMonth.push(jobs.month)
                arrYear.push(jobs.year)
                arrDate.push(jobs.date)
            }
            return false
        }
        return (jobs.forEach(childSort))
        }
        let jobFilteredToCurrentYearAndMonth = parentSort(jobs)
        console.log('arrMonth:',arrMonth, 'arrYear:',arrYear,'arrDate:',arrDate )
        let scheduledClass = (arrDate.includes(daysInMonth) && arrYear.includes(+this.year()) && arrMonth.includes(this.month())? "day scheduled-day":"")
        console.log('scheduledClass:', scheduledClass)
        return(
            scheduledClass
            )
        }  
        
        render() {
            // console.log('Jobs from parent:',this.props.jobsFromParent)
            // this.highlight(this.props.jobsFromParent)
        console.log('highlight:',this.highlight(this.props.jobsFromParent))
        console.log('this.state.month:',this.state.month)
        
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

        let daysInMonth = []
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            let selectedClass = (d === this.state.selectedDay ? " selected-day " : "");
            for (let i=0; i< this.props.bigCities.length; i++){
                // console.log(this.props.bigCities[i].date, d, this.props.bigCities[i].month, this.month(), this.props.bigCities[i].year, +this.year())
                if (this.props.bigCities[i].date === d && this.props.bigCities[i].month === this.month() && this.props.bigCities[i].year === +this.year()) {
                    this.matches.push(d)
                    this.parentYear.push(this.props.bigCities[i].year)
                    this.parentMonth.push(this.props.bigCities[i].month)
                }
            }
            daysInMonth.push(
                <td onClick={(e) => { this.onDayClick(e, d) }} key={d} name={d} className={className + selectedClass + this.highlight(this.props.jobsFromParent, d)}>
                    <span>{d}</span>
                </td>
            );
        }

        // console.log("days: ", daysInMonth);
        // console.log("selected day", this.state.selectedDay);
        // console.log("selected year", this.year())
        // console.log("selected month", this.month())
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
                <tr key={i * 100} >
                    {d}
                </tr>
            );
        })
        return (
            <div className="calendar-container" style={this.style}>
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                                <this.MonthNav />
                                {" "}
                                <this.YearNav />
                                <i className="prev fa fa-fw fa-chevron-left"
                                    onClick={(e) => { this.prevMonth() }}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                    onClick={(e) => { this.nextMonth() }}>
                                </i>
                            </td>
                            <td colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron-left"
                                    onClick={(e) => { this.prevMonth() }}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                    onClick={(e) => { this.nextMonth() }}>
                                </i>
                            </td>
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

function mapStateToProps(reduxState) {
    return {
        selectedMonth: reduxState.CR.selectedMonth,
        selectedDay: reduxState.CR.selectedDay,
        selectedYear: reduxState.CR.selectedYear,
        jobsFilteredToCurrentYearAndMonth: reduxState.CR.jobsFilteredToCurrentYearAndMonth,
    };
}
export default connect(mapStateToProps, { updateState })(Calendar);