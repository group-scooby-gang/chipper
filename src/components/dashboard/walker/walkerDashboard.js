import React, { Component } from 'react';
import './walkerDashboard.css';
import { getWalkerSchedule } from './../../../redux/walkerReducer';
import { logoutUser } from './../../../redux/userReducer';
import { connect } from 'react-redux';

class WalkerDashboard extends Component {
    state = {
        error: false,
        dogsNeedWalking: 'closed'
    }

    componentDidMount() {
        this.getNextWalk()
    }

    handleClickWalks = () => {
        this.setState({ dogsNeedWalking: 'open' })
    }

    handleClickSchedule = () => {
        this.setState({ dogsNeedWalking: 'closed' })
        //the function below will route us to the scheduled walks page for the walker
        // this.props.history.push('/walker/schedule')
    }

    handleClickPendingJobs = () => {
        this.setState({ dogsNeedWalking: 'closed' })
        //the function below will route us to the scheduled walks page for the walker
        // this.props.history.push('/walker/schedule')
    }

    getNextWalk = async () => {
        const { id } = this.props.user;
        await this.props.getWalkerSchedule(id);
    }

    render() {
        const month = this.props.schedule[0] ? this.props.schedule[0].month : null;
        const date = this.props.schedule[0] ? this.props.schedule[0].date : null;
        const year = this.props.schedule[0] ? this.props.schedule[0].year : null;
        const time = this.props.schedule[0] ? this.props.schedule[0].time : null;
        const name = this.props.schedule[0] ? this.props.schedule[0].name : null;
        const breed = this.props.schedule[0] ? this.props.schedule[0].breed : null;
        const age = this.props.schedule[0] ? this.props.schedule[0].age : null;
        const notes = this.props.schedule[0] ? this.props.schedule[0].notes : null;
        const price = this.props.schedule[0] ? this.props.schedule[0].price : null;
        const img = this.props.schedule[0] ? this.props.schedule[0].img : null;
        return (
            <div className='walkerDashboard'>
                <button onClick={() => this.props.logoutUser().then(() => this.props.history.push('/'))}>Logout</button>
                <div className='next_walk_section'>
                    <h3>Next Walk:</h3>
                    <div className='next_walk_job'>
                        <img src={img} alt="pet_img" />
                        <div>
                            <div>Date: {month}/{date}/{year} Time: {time}</div>
                            <div>Companion: {name} Breed: {breed} Age: {age}</div>
                            <div>Notes: {notes}</div>
                            <div>Total: ${price}</div>
                        </div>
                    </div>
                </div>
                <div className='button_section'>
                    {/* <button onClick={this.handleClickWalks}>Dogs Need Walking</button> */}
                    <button onClick={this.handleClickSchedule}>Full Schedule</button>
                    <button onClick={this.handleClickPendingJobs}>Pending Jobs</button>
                </div>
                {/* {
                    this.state.dogsNeedWalking === 'open'
                        ?
                        <div className='dogs_need_walking'>
                            <h4>Dogs Need Walking</h4>
                            <div>
                                <input type="radio" name="name" value='dog_name' /> Name - Owner(distance away) <br />
                                <input type="radio" name="name" value='dog_name2' /> Name - Owner(distance away) <br />
                            </div>
                            <button>Walk</button>
                        </div>
                        :
                        null
                } */}
                <footer>
                    <h2>Home</h2>
                    <h3>|</h3>
                    <h2>Schedule</h2>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.walkerReducer.username,
        user: state.userReducer.user,
        schedule: state.walkerReducer.schedule,
        pets: state.walkerReducer.pets
    }
}

export default connect(mapStateToProps, {
    logoutUser,
    getWalkerSchedule
})(WalkerDashboard);