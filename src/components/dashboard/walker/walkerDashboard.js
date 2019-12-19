import React, { Component } from 'react';
import './walkerDashboard.css';
import { getWalkerSchedule, getWalkerInfo} from './../../../redux/walkerReducer';
import { logoutUser } from './../../../redux/userReducer';
import { connect } from 'react-redux';
import {getOwnerPhone, sendOTWMessage, sendStartMessage, sendCompleteMessage} from "./../../../redux/phoneReducer"
import axios from "axios";

class WalkerDashboard extends Component {
	state = {
		error: false,
		dogsNeedWalking: 'closed',
		status: "On the Way"
	};

	componentDidMount() {
		this.getNextWalk();
	}

	handleClickWalks = () => {
		this.setState({ dogsNeedWalking: 'open' });
	};

	handleClickSchedule = () => {
		this.setState({ dogsNeedWalking: 'closed' });
		this.props.history.push('/schedule')
	};

	handleClickPendingJobs = () => {
		this.setState({ dogsNeedWalking: 'closed' });
		this.props.history.push('/schedule')
	};

	getNextWalk = async () => {
		const { id } = this.props.user;
		await this.props.getWalkerSchedule(id);
	};

	handleStatus = async () => {
		if(this.state.status === "On the Way"){
			await this.props.getOwnerPhone(this.props.schedule[0].owner_id)
			await this.props.sendOTWMessage(this.props.ownerPhone[0].phone)
			this.setState({status: "Start Walk"})
		} else if(this.state.status === "Start Walk"){
			await axios.put(`/Chipper/Jobs/Start/${this.props.schedule[0].job_id}`)
			await this.props.sendStartMessage(this.props.ownerPhone[0].phone)
			this.setState({status: this.props.schedule[0].walkstatus})
		} else if (this.state.status === "Active"){
			this.props.schedule.shift(0, 1)
			await this.props.sendCompleteMessage(this.props.ownerPhone[0].phone)
			axios.put(`/Chipper/Jobs/Complete/${this.props.schedule[0].job_id}`)
		}
	}

	render() {
		console.log(this.props.walkerJobs)
		const month = this.props.walkerJobs[0] ? this.props.walkerJobs[0].month : null;
		const date = this.props.walkerJobs[0] ? this.props.walkerJobs[0].date : null;
		const year = this.props.walkerJobs[0] ? this.props.walkerJobs[0].year : null;
		const time = this.props.walkerJobs[0] ? this.props.walkerJobs[0].time : null;
		const name = this.props.walkerJobs[0] ? this.props.walkerJobs[0].name : null;
		const breed = this.props.walkerJobs[0] ? this.props.walkerJobs[0].breed : null;
		const age = this.props.walkerJobs[0] ? this.props.walkerJobs[0].age : null;
		const notes = this.props.walkerJobs[0] ? this.props.walkerJobs[0].notes : null;
		const price = this.props.walkerJobs[0] ? this.props.walkerJobs[0].price : null;
		const img = this.props.walkerJobs[0] ? this.props.walkerJobs[0].img : null;
		return (
			<div className='walkerDashboard'>
				<div className='next_walk_section'>
					{name ?
					<>
					<h3>Next Walk:</h3>
					<div className='next_walk_job'>
						<img src={img} alt='pet_img' className='walker_dash_pet_img' />
						<div>
							<div className='next_walk_container'>
								Date: {month}/{date}/{year} <br />
								Time: {time} <br />
								Companion: {name}
								<br />
								Breed: {breed}
								<br />
								Age: {age}
								<br />
								Notes: {notes}
								<br />
								Total: ${price}
								<button onClick={this.handleStatus}>{this.state.status}</button>
							</div>
						</div>
					</div>
					</>
					:
					null}
					{!name ?
					<>
					<h3>No walks scheduled at this time.</h3>
					</>
					:
					null}
				</div>
				<div className='button_section'>
					<button
						className='button_section_button'
						onClick={this.handleClickSchedule}>
						full schedule
					</button>
					<button
						className='button_section_button'
						onClick={this.handleClickPendingJobs}>
						pending jobs
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.walkerReducer.username,
		user: state.userReducer.user,
		walkerJobs: state.walkerReducer.walkerJobs,
		pets: state.walkerReducer.pets,
		ownerPhone : state.phoneReducer.ownerPhone
	};
};

export default connect(mapStateToProps, {
	logoutUser,
	getWalkerSchedule,
	getWalkerInfo,
	getOwnerPhone,
	sendOTWMessage,
	sendStartMessage,
	sendCompleteMessage
})(WalkerDashboard);
