import React, { Component } from 'react';
import './petRegisterReview.css';
import { resetFields, registerPet } from '../../../../../redux/petReducer';
import { connect } from 'react-redux';

class PetRegisterReview extends Component {
	goBack = () => {
		this.props.history.goBack();
	};

	handleRegisterPet = async (e) => {
		e.preventDefault();
		const { name, breed, age, img } = this.props;
		await this.props.registerPet(name, breed, age, img).then(() => {
			this.props.resetFields();
			this.props.history.push('/dashboard/owner');
		});
	};

	render() {
		const { name, breed, age, img } = this.props;
		return (
			<div className='pet_review_page'>
				<div className='back_button' onClick={this.goBack}>
					<i class='fas fa-angle-left'></i>
				</div>
				<h1 className='pet_info'>Pet Info</h1>
				<img src={img} alt='owner_dog_picture' />

				<h5>Name: {name}</h5>

				<h5>Breed: {breed}</h5>

				<h5>Age: {age}</h5>

				<button
					className='pet_review_page_button'
					onClick={this.handleRegisterPet}>
					add pet
				</button>
				<div className='progress_container'>
					<div class='progress_bar_100'>
						<span class='progress_bar_fill_99'></span>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.petReducer.name,
		breed: state.petReducer.breed,
		age: state.petReducer.age,
		img: state.petReducer.img
	};
};

export default connect(mapStateToProps, {
	resetFields,
	registerPet
})(PetRegisterReview);
