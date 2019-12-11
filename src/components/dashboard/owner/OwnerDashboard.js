import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
import './OwnerDashboard.css';
import { viewSchedule } from '../../../redux/ownerReducer';

class OwnerDashoard extends Component {
	componentDidMount() {
		this.props.viewSchedule();
	}

	render() {
		// const month = this.props.jobs.month;

		console.log(this.props.jobs);
		const viewSchedule = this.props.jobs.map((val, index) => (
			<div className='view-schedule-Container'>
				<div key={index}>
					<h4>Next walk</h4>
					<div>{val.month}/</div>
					<div>{val.date}/</div>
					<div>{val.time}</div>
				</div>
			</div>
		));
		return (
			<>
				<div class='main-container'>
					<button
						onClick={() =>
							this.props.logoutUser().then(() => this.props.history.push('/'))
						}>
						Logout
					</button>

					<h1>Owner Dashboard</h1>

					<div className='schedule-container'>
						<div>{viewSchedule}</div>
					</div>

					<Link to='/owner/schedule'>
						<button name='Schedule' onClick={this.handleSubmit}>
							View Schedule
						</button>
					</Link>
					{/* <Link to='/walker/now'>
						<button
							class='now'
							name='Walker Now'
							onClick={this.handleSubmit}>
							Walk Now
						</button>
					</Link> */}
					<Link to='/walker/later'>
						<button name='Walker Later' onClick={this.handleSubmit}>
							Schedule Walk
						</button>
					</Link>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	jobs: state.ownerReducer.jobs
});

export default connect(mapStateToProps, { viewSchedule, logoutUser })(
	OwnerDashoard
);
