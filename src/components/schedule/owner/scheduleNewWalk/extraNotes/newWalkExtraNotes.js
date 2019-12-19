import React, { Component } from 'react';
import './newWalkExtra.css';
import { updateState } from '../../../../../redux/ownerReducer';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

class ExtraNotes extends Component {
	next = () => {
		this.props.history.push('/owner/schedule/new/review');
	};

	back = () => {
		this.props.history.goBack();
	};

	handleChange = (e) => {
		this.props.updateState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className='extra_notes_page'>
				<h1>Extra Notes</h1>
				<textarea
					onChange={this.handleChange}
					placeholder='Extra instructions for the walker'
					name='extraNotes'
					cols='30'
					rows='10'></textarea>
				<button className='extra_button_review' onClick={this.next}>
					REVIEW
				</button>
				<button className='extra_button_back' onClick={this.back}>
					BACK
				</button>
				<ProgressBar animated now={80} className='progress' animated />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.ownerReducer.notes,
		payment: state.ownerReducer.payment
	};
};

export default connect(mapStateToProps, {
	updateState
})(ExtraNotes);
