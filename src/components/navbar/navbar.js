import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css';
import axios from "axios"

class navbar extends Component {
	constructor() {
		super();
		this.state = {
			menuStatus: false,
			isWalker: "/Profile/Walker"
		};
	}

	handleClick = () => {
		this.setState({ menuStatus: !this.state.menuStatus });
	};

	componentDidMount(){
		console.log(this.props)
	}



	moveUser = () => {
		axios.get('/Chipper/Check/Walker')
		.then(res => {
			if(res.data.isWalker === false){
				this.props.history.push("/Profile/Owner")
			} else {
				this.props.history.push("/Profile/Walker")
			}
		})
	}

	render() {
		return (
			<>
				{' '}
				<div className='nav-container'>
					<nav class='nav'>
						<i
							className='hamburger'
							class='fas fa-bars'
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
						<button onClick={this.moveUser}>Profile</button>
					</div>
				) : null}{' '}
			</>
		);
	}
}

export default withRouter(navbar);
