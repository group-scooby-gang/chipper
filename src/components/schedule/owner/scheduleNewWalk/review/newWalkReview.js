import React, { Component } from 'react';
import './newWalkReview.css';
import { addNewJob, walkerPhoneNumber } from '../../../../../redux/ownerReducer';
import { connect } from 'react-redux';
import axios from "axios"
import ProgressBar from 'react-bootstrap/ProgressBar';

class WalkReview extends Component {
	handleSetWalk = () => {
		const {
			selectedPet,
			payment,
			extraNotes,
			selectedWalker,
			month,
			day,
			year,
			time
		} = this.props;
		this.props.addNewJob(
			selectedPet,
			payment,
			extraNotes,
			selectedWalker,
			month,
			day,
			year,
			time
		);
		this.props.history.push('/owner/schedule');
	};

    handleSetWalk = async () => {
        const {selectedPet, payment, extraNotes, selectedWalker, month, day, year, time} = this.props;
        await this.props.addNewJob(selectedPet, payment, extraNotes, selectedWalker, month, day, year, time);
        await this.props.walkerPhoneNumber(selectedWalker)
        await axios.post("/sms/walker/jobNotification", {
            number: this.props.walker_phone[0].phone
        })
        this.props.history.push('/schedule')
    }
	back = () => {
		this.props.history.goBack();
	};

	render() {
		const {
			selectedPetName,
			selectedPetImg,
			selectedWalkerName,
			selectedWalkerImg,
			month,
			day,
			year,
			time,
			extraNotes,
			payment
		} = this.props;
		return (
			<div className='review_new_walk_page'>
				<h1>Review</h1>
				<div className='pet_and_walker_container'>
					<div>
						<img src={selectedPetImg} alt='dog_pic' />
						<div>{selectedPetName}</div>
					</div>
					<div>
						<img src={selectedWalkerImg} alt='walker_pic' />
						<div>{selectedWalkerName}</div>
					</div>
				</div>
				<div className='details_container'>
					{/* <div>
                        <h3>Time</h3>
                        <div>{duration} minute walk.</div>
                    </div> */}
					<div>
						<h3>Date</h3>
						<div>
							{month}/{day}/{year} at {time}
						</div>
					</div>
					<div>
						<h3>Total</h3>
						<div>${payment}</div>
					</div>
					<div>
						<div>
							<h3>Extra Notes</h3>
							<div>{extraNotes}</div>
						</div>
					</div>
				</div>
				<button className='review_button_schedule' onClick={this.handleSetWalk}>
					SCHEDULE!
				</button>
				<button className='review_button_back' onClick={this.back}>
					BACK
				</button>
				<ProgressBar animated now={100} className='progress' animated />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedPetName: state.ownerReducer.selectedPetName,
		selectedPetImg: state.ownerReducer.selectedPetImg,
		selectedWalkerName: state.ownerReducer.selectedWalkerName,
		selectedWalkerImg: state.ownerReducer.selectedWalkerImg,
		selectedPet: state.ownerReducer.selectedPet,
		selectedWalker: state.ownerReducer.selectedWalker,
		day: state.ownerReducer.day,
		year: state.ownerReducer.year,
		month: state.ownerReducer.month,
		time: state.ownerReducer.time,
		extraNotes: state.ownerReducer.extraNotes,
		payment: state.ownerReducer.payment,
        walker_phone: state.ownerReducer.walker_phone
    }
}

export default connect(mapStateToProps, {
    addNewJob,
    walkerPhoneNumber
})(WalkReview);
