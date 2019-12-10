import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../redux/userReducer';
import { connect } from 'react-redux';
import './OwnerDashboard.css';

class OwnerDashoard extends Component {
	render() {
		return (
			<div class='main-container'>
				<button
					onClick={() =>
						this.props.logoutUser().then(() => this.props.history.push('/'))
					}>
					Logout
				</button>

				<h1>Owner Dashboard</h1>

				<div class='schedule-container'>
					Schedule Container
					<h3>Next Walk</h3>
					<p>12/6/19 6:00am Walker: Aegon</p>
				</div>

				<div class='button_cont' align='center'>
					<Link to='/owner/schedule'>
						<button
							class='schedule-button'
							name='Schedule'
							onClick={this.handleSubmit}>
							My Schedule
						</button>
					</Link>
					<Link to='/walker/now'>
						<button
							class='now-button'
							name='Walker Now'
							onClick={this.handleSubmit}>
							Walk Now
						</button>
					</Link>
					<Link to='/walker/later'>
						<button
							class='later-button'
							name='Walker Later'
							onClick={this.handleSubmit}>
							Walk Later
						</button>
					</Link>
				</div>

				<footer></footer>
			</div>
		);
	}
}

export default connect(null, { logoutUser })(OwnerDashoard);
