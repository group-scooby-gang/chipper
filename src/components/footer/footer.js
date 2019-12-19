import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../../redux/userReducer';
import { connect } from 'react-redux';
import './footer.css';
import axios from 'axios';

class Footer extends Component {

	viewSchedule = () => {
		axios.get('/Chipper/Check/Walker')
			.then(res => {
				if (res.data.isWalker === false) {
					this.props.history.push('/schedule')
				} else {
					this.props.history.push('/schedule')
				}
			})
	}

	viewDashboard = () => {
		axios.get('/Chipper/Check/Walker')
			.then(res => {
				if (res.data.isWalker === false) {
					this.props.history.push('/owner/dashboard')
				} else {
					this.props.history.push('/walker/dashboard')
				}
			})
	}

	render() {
		return (
			<footer className='footer'>
				{!this.props.user.username
					?
					<>
						<Link to='/'>
							<i className='home_footer' class='fas fa-home fa-2x' title='home'></i>
						</Link>
					</>
					:
					this.props.user.username
						?
						<>
							<div onClick={this.viewDashboard}><i className='home_footer' class='fas fa-home fa-2x' title='home'></i></div>
							<h3>|</h3>
							<div onClick={this.viewSchedule}><i className='calendar_footer' class='far fa-calendar-alt fa-2x'></i></div>
							<h3>|</h3>
							<i
								className='logout_footer'
								class='fas fa-sign-out-alt fa-2x'
								onClick={() =>
									this.props.logoutUser().then(() => this.props.history.push('/'))
								}></i>
						</>
						:
						null
				}
			</footer>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userReducer.user
	}
}

export default withRouter(connect(mapStateToProps, { logoutUser })(Footer));
