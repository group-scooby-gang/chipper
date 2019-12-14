import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signUpUserType.css';
import {
	updateState,
	resetFields,
	registerUser
} from '../../../../redux/userReducer';
import { connect } from 'react-redux';
import axios from 'axios';
// import {storage} from "./../../../../../firebase-config"

class UserType extends Component {
	state = {
		error: false
	};

	handleChange = (e) => {
		e.preventDefault();
		this.props.updateState({ [e.target.name]: e.target.value });
	};

	// handleImage = (e) => {
    //     if(e.target.files[0]){
    //         const image = (e.target.files[0])
	// 		const uploadTask = storage.ref(`/userProfilePicture/${image.name}`).put(image)
	// 		uploadTask.on("state_changed", 
	// 		() => {
	// 			storage.ref('userProfilePicture').child(image.name).getDownloadURL()
	// 			.then(url => {
	// 				this.props.updateState({profileImg: url})
	// 			})
	// 		})
	// 	}
	// }

	handleRegisterOwner = async (e) => {
		e.preventDefault();
		const {
			userName,
			firstName,
			lastName,
			email,
			profileImg,
			password,
			phone,
			address,
			apt,
			city,
			state,
			zip
		} = this.props;
		await this.props
			.registerUser(
				userName,
				firstName,
				lastName,
				password,
				email,
				profileImg,
				phone,
				address,
				apt,
				city,
				state,
				zip
			)
			.then(() => {
				this.props.resetFields();
				axios
					.post('/Chipper/Login', {
						username: this.props.userName,
						password: this.props.password
					})
					.then(() => {
						this.props.history.push('/register/owner/info');
					});
			})
			.catch(() => {
				this.setState({ error: true });
			});
	};

	handleRegisterWalker = async (e) => {
		e.preventDefault();
		const {
			userName,
			firstName,
			lastName,
			email,
			profileImg,
			password,
			phone,
			address,
			apt,
			city,
			state,
			zip
		} = this.props;
		await this.props
			.registerUser(
				userName,
				firstName,
				lastName,
				password,
				email,
				profileImg,
				phone,
				address,
				apt,
				city,
				state,
				zip
			)
			.then(() => {
				axios.post('/Chipper/Login', {
					username: this.props.userName,
					password: this.props.password
				})
				.then(() => {
					this.props.history.push('/register/walker/info');
				});
				this.props.resetFields();
			})
			.catch(() => {
				this.setState({ error: true });
			});
	};

	render() {
		return (
			<div className='register_user_page'>
				<h1 className='Sign-up'>Sign Up</h1>
				<img
					src='data:image/png;base64,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'
					alt='dog_picture'
				/>
				<form>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='first name'
						name='firstName'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='last name'
						name='lastName'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='email'
						name='email'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='username'
						name='userName'
					/>
					<input
						onChange={this.handleChange}
						type='password'
						placeholder='password'
						name='password'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='phone'
						name='phone'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='address'
						name='address'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='apt'
						name='apt'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='city'
						name='city'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='state'
						name='state'
					/>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='zip'
						name='zip'
					/>
					<h>Upload Profile Image:</h>
					<input
						type="file"
						name="profileImg"
						onChange={this.handleImage}
					/>
				</form>
				<div className='button_section'>
					<button className='owner-button' onClick={this.handleRegisterOwner}>
						I am a.. dog owner
					</button>
					<button className='walker-button' onClick={this.handleRegisterWalker}>
						I am a.. dog walker
					</button>
				</div>
				{this.state.error === true ? <div>*Username already taken*</div> : null}
				<p>
					Oops...I already have an account. Log in <Link>here</Link>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userName: state.userReducer.userName,
		firstName: state.userReducer.firstName,
		lastName: state.userReducer.lastName,
		email: state.userReducer.email,
		password: state.userReducer.password,
		phone: state.userReducer.phone,
		address: state.userReducer.address,
		apt: state.userReducer.apt,
		city: state.userReducer.city,
		state: state.userReducer.state,
		zip: state.userReducer.zip,
		profileImg: state.userReducer.profileImg
	};
};

export default connect(mapStateToProps, {
	updateState,
	resetFields,
	registerUser
})(UserType);
