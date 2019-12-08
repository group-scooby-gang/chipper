import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/userReducer';
import './login.css';

class login extends Component {
	state = {
		userName: '',
		password: ''
	};

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.loginUser({
			userName: this.state.userName,
			password: this.state.password
		});
	};

	render() {
		if (this.props.userName) return <Redirect to='/dashboard' />;
		return (
			<div>
				<h1>Log in</h1>
				<div className='Login-inputs'>
					<input
						type='text'
						placeholder='username'
						onChange={this.handleInput}
					/>
					<br />
					<input
						type='text'
						placeholder='password'
						onChange={this.handleInput}
					/>
					<br />
					<button name='login' onClick={this.handleSubmit}>
						Login
					</button>
				</div>
				<br />
				<p>
					Don't have an account? Sign up{' '}
					<Link to='/register/usertype'>here</Link>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => {
	return {
		userName: reduxState.userReducer.userName
	};
};

export default connect(mapStateToProps, { loginUser })(login);
