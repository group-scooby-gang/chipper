import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/userReducer';
import { connect } from 'react-redux';
import './footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<Link to='/'>
					<i className='home_footer' class='fas fa-home fa-2x' title='home'></i>
				</Link>
				<h3>|</h3>
				<Link to='/walker/schedule'>
					<i className='calendar_footer' class='far fa-calendar-alt fa-2x'></i>
				</Link>
				<h3>|</h3>
				<i
					className='logout_footer'
					class='fas fa-sign-out-alt fa-2x'
					onClick={() =>
						this.props.logoutUser().then(() => this.props.history.push('/'))
					}></i>
			</footer>
		);
	}
}

export default connect(null, { logoutUser })(Footer);
