import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css';
import axios from "axios"
import { connect } from 'react-redux';

class navbar extends Component {
	constructor() {
		super();
		this.state = {
			menuStatus: false
		};
	}

	handleClick = () => {
		this.setState({ menuStatus: !this.state.menuStatus });
	};

	moveUser = () => {
		axios.get('/Chipper/Check/Walker')
			.then(res => {
				if (res.data.isWalker === false) {
					this.props.history.push("/Profile/Owner")
				} else {
					this.props.history.push("/Profile/Walker")
				}
			})
		this.setState({ menuStatus: !this.state.menuStatus });
	}

	viewSchedule = () => {
		axios.get('/Chipper/Check/Walker')
			.then(res => {
				if (res.data.isWalker === false) {
					this.props.history.push('/schedule')
				} else {
					this.props.history.push('/schedule')
				}
			})
		this.setState({ menuStatus: !this.state.menuStatus })
	}

	render() {
		// console.log(this.props.user);
		return (
			<>
				{' '}
				<div className='nav-container'>
					<nav class='nav'>
						<i
							className='hamburger'
							class='fas fa-paw fa-2x'
							onClick={this.handleClick}></i>
					</nav>
				</div>
				{this.state.menuStatus === true ? (
					<div className='ham'>
						{!this.props.user.username ?
							<>
								<Link to='/about'>
									<button onClick={this.handleClick}>about</button>
								</Link>
								<Link to='/register/usertype'>
									<button class='signup' onClick={this.handleClick}>
										signup
							</button>
								</Link>
								<Link to='/login'>
									<button class='login' onClick={this.handleClick}>
										login
							</button>
								</Link>
							</>
							: this.props.user.username ?
								<>
									<button onClick={this.viewSchedule}>Schedule</button>
									<button onClick={this.moveUser}>Profile</button>
								</>
								: null}
					</div>
				) : null}{' '}
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.userReducer.user
	}
}

export default withRouter(connect(mapStateToProps)(navbar));