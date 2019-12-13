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
	viewSchedule = async () => {
		const { i } = this.props.jobs[0];
		await this.props.schedule(i);
		console.log(this.props.schedule);
	};

	render() {
		let month = this.props.jobs[0] && this.props.jobs[0].month;
		let date = this.props.jobs[0] && this.props.jobs[0].date;
		let year = this.props.jobs[0] && this.props.jobs[0].year;
		let time = this.props.jobs[0] && this.props.jobs[0].time;

		return (
			<>
				<div class='main-container'>
					<h1>Owner Dashboard</h1>
					<div className='schedule-container'>
						<p className='your_companion '>Your companions next walk..</p>
						<div>
							{month}/{date}/{year} at {time}
						</div>
					</div>

					<div className='buttons-container'>
						<Link to='/scheduled'>
							<button
								className='buttons'
								name='Schedule'
								onClick={this.handleSubmit}>
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
							<button
								className='buttons'
								name='Walker Later'
								onClick={this.handleSubmit}>
								Schedule Walk
							</button>
						</Link>
					</div>
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
