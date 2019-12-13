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
		console.log(this.props.jobs && this.props.jobs);
		let month = this.props.jobs[0] && this.props.jobs[0].month;
		let date = this.props.jobs[0] && this.props.jobs[0].date;
		let year = this.props.jobs[0] && this.props.jobs[0].year;
		let time = this.props.jobs[0] && this.props.jobs[0].time;
		let walkstatus = this.props.jobs[0] && this.props.jobs[0].walkstatus;

		return (
			<>
				<div class='main-container'>
					<h1></h1>
					<div className='schedule-container'>
						<p className='your_companion '>Your companions next walk..</p>
						<div>
							Date: {month}/{date}/{year}
						</div>
						<div>Time: {time}</div>
						Status: {walkstatus}
					</div>

					<div className='buttons-container'>
						<Link to='/owner/schedule'>
							<button
								className='buttons'
								name='Schedule'
								onClick={this.handleSubmit}>
								view schedule
							</button>
						</Link>

						<Link to='/walker/later'>
							<button
								className='buttons'
								name='Walker Later'
								onClick={this.handleSubmit}>
								schedule walk
							</button>
						</Link>
					</div>
					<footer>
						<Link to='/'>
							<i
								className='home_footer'
								class='fas fa-home fa-2x'
								title='home'></i>
						</Link>
						<h3>|</h3>
						<Link to='/schedule/walker/walkerSchedule'>
							<i
								className='calendar_footer'
								class='far fa-calendar-alt fa-2x'></i>
						</Link>
						<h3>|</h3>
						<i
							className='logout_footer'
							class='fas fa-sign-out-alt fa-2x'
							onClick={() =>
								this.props.logoutUser().then(() => this.props.history.push('/'))
							}></i>
					</footer>
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
