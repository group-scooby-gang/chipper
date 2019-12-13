import React, { Component } from 'react'
import './newWalkReview.css';
import { } from '../../../../../redux/ownerReducer';
import { connect } from 'react-redux';

class WalkReview extends Component {

    handleSetWalk = () => {
        //api function here to add the walk to the db
        //then route back to the owner schedule page
        this.props.history.push('/owner/schedule')
    }

    back = () => {
        this.props.history.goBack();
    }

    render() {
        console.log(this.props.selectedPetName);
        console.log(this.props.selectedPetimg);
        console.log(this.props.time);
        const { selectedPetName, selectedPetImg, selectedWalkerName, selectedWalkerImg, month, day, year, time, extraNotes } = this.props;
        const duration = null
        
        return (
            <div className='review_new_walk_page'>
                <h1>Review</h1>
                <div className='pet_and_walker_container'>
                    <div>
                        <img src={selectedPetImg} alt="dog_pic" />
                        <div>{selectedPetName}</div>
                    </div>
                    <div>
                        <img src={selectedWalkerImg} alt="walker_pic" />
                        <div>{selectedWalkerName}</div>
                    </div>
                </div>
                <div className='details_container'>
                    <div>
                        <h3>Time</h3>
                        <div>{duration} minute walk.</div>
                    </div>
                    <div>
                        <h3>Date</h3>
                        <div>{month}/{day}/{year} at {time}</div>
                    </div>
                    <div>
                        <div>
                            <h3>Extra Notes</h3>
                            <div>{extraNotes}</div>
                        </div>
                    </div>
                </div>
                <button onClick={this.handleSetWalk}>Schedule!</button>
                <button onClick={this.back}>Back</button>
                <div>Status Bar</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedPetName: state.ownerReducer.selectedPetName,
        selectedPetImg: state.ownerReducer.selectedPetImg,
        selectedWalkerName: state.ownerReducer.selectedWalkerName,
        selectedWalkerImg: state.ownerReducer.selectedWalkerImg,
        day: state.ownerReducer.day,
        year: state.ownerReducer.year,
        month: state.ownerReducer.month,
        time: state.ownerReducer.time,
        extraNotes: state.ownerReducer.extraNotes,
        payment: state.ownerReducer.payment
    }
}

export default connect(mapStateToProps, {

})(WalkReview);