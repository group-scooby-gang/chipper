import React, { Component } from 'react';
import './newWalkTime.css';
import {
	updateState,
	getWalkerById
} from './../../../../../redux/ownerReducer';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

class WalkTime extends Component {
	componentDidMount() {
		this.props.getWalkerById(this.props.selectedWalker);
	}

	next = () => {
		this.props.history.push('/owner/schedule/new/extra_notes');
	};

	back = () => {
		this.props.history.goBack();
	};

	handleChange = (e) => {
		this.props.updateState({ [e.target.name]: parseInt(e.target.value) });
	};

	render() {
		const { _15minprice, _30minprice, _45minprice, _60minprice } = this.props;
		return (
			<div className='time_selection_page'>
				<h1>Time</h1>
				<div className='selection_container'>
					<input
						onChange={this.handleChange}
						type='radio'
						name='payment'
						value={_15minprice}
					/>{' '}
					15 min. (${_15minprice})<br />
					<input
						onChange={this.handleChange}
						type='radio'
						name='payment'
						value={_30minprice}
					/>{' '}
					30 min. (${_30minprice})<br />
					<input
						onChange={this.handleChange}
						type='radio'
						name='payment'
						value={_45minprice}
					/>{' '}
					45 min. (${_45minprice})<br />
					<input
						onChange={this.handleChange}
						type='radio'
						name='payment'
						value={_60minprice}
					/>{' '}
					60 min. (${_60minprice})<br />
				</div>
				<button className='time_button_next' onClick={this.next}>
					NEXT
				</button>
				<button className='time_button_back' onClick={this.back}>
					BACK
				</button>

				<ProgressBar animated now={60} className='progress' animated />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		payment: state.ownerReducer.payment,
		selectedWalker: state.ownerReducer.selectedWalker,
		_15minprice: state.ownerReducer._15minprice,
		_30minprice: state.ownerReducer._30minprice,
		_45minprice: state.ownerReducer._45minprice,
		_60minprice: state.ownerReducer._60minprice,
		time: state.ownerReducer.time
	};
};

export default connect(mapStateToProps, {
	updateState,
	getWalkerById
})(WalkTime);
