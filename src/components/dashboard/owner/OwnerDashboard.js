import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
import './OwnerDashboard.css';

class OwnerDashoard extends Component {
	render() {
		// const jobs = this.state.jobs.map((schedule, jobsId) => (
		// 	<li key={JobsId}>{jobs.time}</li>
		// ));
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

					<div className='schedule-container'>{/* <ul>{schedule}</ul> */}</div>

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

export default connect(null, { logoutUser })(OwnerDashoard);
