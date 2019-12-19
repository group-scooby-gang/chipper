import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateState } from '../../redux/userReducer';
import './login.css';
import axios from 'axios';

class login extends Component {
	state = {
		username: '',
		password: '',
		user: []
	};

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('/Chipper/Login', {
				username: this.state.username,
				password: this.state.password
			})
			.then((res) => {
				this.props.updateState({ user: res.data });
				axios.get('/Chipper/Check/Walker').then((res) => {
					if (res.data.isWalker === false) {
						this.props.history.push('/owner/dashboard');
					} else {
						this.props.history.push('/walker/dashboard');
					}
				});
			});
	};

	render() {
		if (this.props.username) return <Redirect to='/dashboard' />;
		return (
			<div class='main-container'>
				<div class='login-container'>
					<h1 class='chipper'>Chipper</h1>

					<img
						class='login_chipper_dog'
						src='https://png2.cleanpng.com/sh/b434d0f27e02dc60d84a17de16e7bce9/L0KzQYm3UcA4N5tsfZG8Zki0cofoVsQ5PZNoTKM8YkHnSbW6gBE6amNqStUBYT24cYa5U8Q2PJQ9S6UBOD68QYq4WMcxQWI6Sac8M0a6SImBUsUxPmEziNDw/3f81b6a6485bc413b1d9d3ca9b2e2c6a-5a523454c83368.919187091515336788825060.png'
						alt='happy dog'
					/>
					<br />

					<div class='Login-inputs'>
						<input
							class='input'
							type='text'
							placeholder='username'
							onChange={this.handleInput}
							name='username'
						/>
						<br />

						<input
							class='input'
							type='password'
							placeholder='password'
							onChange={this.handleInput}
							name='password'
						/>
						<br />

						<div class='button_cont' align='center'>
							<button
								class='submit-button'
								name='login'
								onClick={this.handleSubmit}>
								Login
							</button>
						</div>
					</div>

					<p id='dont'>
						Don't have an account? Sign up{' '}
						<Link to='/register/usertype'>here</Link>
					</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => {
	return {
		username: reduxState.userReducer.username,
		password: reduxState.userReducer.password,
		user: reduxState.userReducer.user
	};
};

export default connect(mapStateToProps, {
	updateState
})(login);
