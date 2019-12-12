import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

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

	render() {
		return (
			<>
				{' '}
				<div className='nav-container'>
					<nav class='nav'>
						<i
							className='hamburger'
							class='fas fa-paw'
							onClick={this.handleClick}></i>
					</nav>
				</div>
				{this.state.menuStatus === true ? (
					<div className='ham'>
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

						<Link to='/'>
							<button onClick={this.handleClick}>home</button>
						</Link>
					</div>
				) : null}{' '}
			</>
		);
	}
}

export default navbar;
