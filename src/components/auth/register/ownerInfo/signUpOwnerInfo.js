import React, { Component } from 'react';
import './signUpOwnerInfo.css';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

class RegisterOwnerInfo extends Component {
	goBack = () => {
		this.props.history.goBack();
	};

	next = () => {
		this.props.history.push('/register/pet/name');
	};

	render() {
		return (
			<div className='owner_info_page'>
				<div className='back_button'>
					<i onClick={this.goBack} class='fas fa-angle-left'></i>
				</div>
				<img
					src='https://media.istockphoto.com/vectors/man-and-his-best-friend-dog-cuddle-hug-backside-view-cute-cartoon-vector-id1018691406?k=6&m=1018691406&s=612x612&w=0&h=W_rDzQk3a1n4PaS8xJwa396YLmMsv1FMqyEs1Bfponw='
					alt='dog_owner'
				/>
				<button onClick={this.next}>add</button>
				<div className='progress-container'>
					<ProgressBar animated now={20} className='progress_who' animated />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {})(RegisterOwnerInfo);
