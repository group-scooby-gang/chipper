import React, { Component } from 'react';
import './petRegisterName.css';
import { updateState } from './../../../../../redux/petReducer';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

class PetRegisterName extends Component {
	handleChange = (e) => {
		e.preventDefault();
		this.props.updateState({ name: e.target.value });
	};

	nextButton = () => {
		this.props.history.push('/register/pet/breed');
	};

	render() {
		return (
			<div className='pet_name_page'>
				<img
					src='https://i.pinimg.com/originals/0c/92/0d/0c920d58b210a74a75868df885160a5f.jpg'
					alt='dog_picture'
				/>
				<h1 className='whats_dogs_name'>What is your companions name?</h1>
				<input
					className='pet_name_page input'
					onChange={this.handleChange}
					placeholder='name'
					type='text'
				/>
				<button className='pet_name_page button' onClick={this.nextButton}>
					next
				</button>

				<div className='progress_container'>
					<ProgressBar animated now={40} className='progress_who' animated />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.petReducer.name
	};
};

export default connect(mapStateToProps, {
	updateState
})(PetRegisterName);
