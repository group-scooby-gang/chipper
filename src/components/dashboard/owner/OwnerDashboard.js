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
	};

	render() {
		let month = this.props.jobs[0] ? this.props.jobs[0].month : null;
		let date = this.props.jobs[0] ? this.props.jobs[0].date : null;
		let year = this.props.jobs[0] ? this.props.jobs[0].year : null;
		let time = this.props.jobs[0] ? this.props.jobs[0].time : null;
		let walkstatus = this.props.jobs[0] ? this.props.jobs[0].walkstatus : null;

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

						<Link to='/owner/schedule/new/pet_select'>
							<button
								className='buttons'
								name='Walker Later'
								onClick={this.handleSubmit}>
								schedule walk
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
