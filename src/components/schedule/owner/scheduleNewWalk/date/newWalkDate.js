import React, { Component } from 'react';
import './newWalkDate.css'
import Calendar from '../../../../calendar/Calendar';
// calendar is the child of newWalkDate
class WalkDateSelect extends Component {

    onDayClick = (e, day) => {
        alert(day);
    }

    next = () => {
        this.props.history.push('/owner/schedule/new/select_time');
    }

    back = () => {
        this.props.history.goBack();
    }

    //need to add a function that will accept the values given for month, day, and year

    render() {
        return (
            <div className='date_page'>
                <h1>Date</h1>
                <Calendar onDayClick={(e, day) => this.onDayClick(e, day)} />
                <div className='time_section'>
                    <h3>Time:</h3>
                    <div>
                        <input type="number" name="hour" placeholder='hour' />
                        <div>:</div>
                        <input type="number" name="minute" placeholder='minute' />
                    </div>
                </div>
                <button onClick={this.next}>Next</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default WalkDateSelect;