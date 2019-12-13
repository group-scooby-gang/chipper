import React, { Component } from 'react';
import './newWalkDate.css'
// import Calendar from '../../../../calendar/Calendar'
import { updateState } from '../../../../../redux/ownerReducer';
import { connect } from 'react-redux';

class WalkDateSelect extends Component {
    state = {
        hour: '',
        minute: '',
        setTime: null
    }

    next = async() => {
        this.handleSetTime();
        this.props.history.push('/owner/schedule/new/select_time');
    }

    back = () => {
        this.props.history.goBack();
    }

    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value })
    }
    
    handleTimeChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    turnIntoTime = () => {
        this.setState({ setTime: this.state.hour + this.state.minute})
    }

    handleSetTime = () => {
        this.props.updateState({ time: parseInt(this.state.setTime)})
    }


    render() {
        return (
            <div className='date_page'>
                <h1>Date</h1>
                <div className='date_select_section'>
                    {/* <Calendar /> */}
                    <select onChange={this.handleChange} name="month">
                        <option value="0">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select onChange={this.handleChange} name="day">
                        <option value="0">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <input type="number" onChange={this.handleChange} name="year" placeholder="Year"/>
                </div>
                <div className='time_section'>
                    <h3>Time:</h3>
                    <p>Set in military time. (0600 = 6:00am.)</p>
                    <div>
                        <input onChange={this.handleTimeChange} type="number" name="hour" placeholder='hour (00)' />
                        <div>:</div>
                        <input onChange={this.handleTimeChange} type="number" name="minute" placeholder='minute (00)' />
                    </div>
                    <button onClick={this.turnIntoTime}>set time</button>
                </div>
                <button onClick={this.next}>Next</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        time: state.ownerReducer.time,
        selectedWalker: state.ownerReducer.selectedWalker
    }
}

export default connect(mapStateToProps, {
    updateState
})(WalkDateSelect);
