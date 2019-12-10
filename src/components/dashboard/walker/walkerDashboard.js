import React, { Component } from 'react';
import './walkerDashboard.css';
import { } from './../../../redux/walkerReducer';
import {logoutUser} from './../../../redux/userReducer';
import { connect } from 'react-redux';

class WalkerDashboard extends Component {
    state = {
        error: false,
        dogsNeedWalking: 'closed'
    }

    handleClickWalks = () => {
        this.setState({ dogsNeedWalking: 'open' })
    }

    handleClickSchedule = () => {
        this.setState({ dogsNeedWalking: 'closed'})
        this.props.history.push('/walker/schedule')
    }

    handleClickPendingJobs = () => {
        this.setState({ dogsNeedWalking: 'closed'})
        this.props.history.push('/walker/schedule')
    }

    render() {
        const { username } = this.props;
        return (
            <div className='walkerDashboard'>
                <button onClick={() => this.props.logoutUser().then(() => this.props.history.push('/'))}>Logout</button>
                <div>{username}</div>
                <div className='next_walk_section'>
                    <h3>Next Walk:</h3>
                    <div>Date Time Companion: Name</div>
                </div>
                <div className='button_section'>
                    <button onClick={this.handleClickWalks}>Dogs Need Walking</button>
                    <button onClick={this.handleClickSchedule}>Full Schedule</button>
                    <button onClick={this.handleClickPendingJobs}>Pending Jobs</button>
                </div>
                {
                    this.state.dogsNeedWalking === 'open'
                ?
                    <div>
                        <h5>Dogs Need Walking</h5>
                        <input type="radio" name="name" value='dog_name'/> Name - Owner(distance away) <br/>
                        <input type="radio" name="name" value='dog_name2'/> Name - Owner(distance away) <br/>
                    </div>
                :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.walkerReducer.username
    }
}

export default connect(mapStateToProps, {
    logoutUser
})(WalkerDashboard);