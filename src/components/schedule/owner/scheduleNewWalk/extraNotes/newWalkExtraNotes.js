import React, {Component} from 'react';
import './newWalkExtra.css';
import {updateState} from '../../../../../redux/ownerReducer'
import {connect} from 'react-redux'

class ExtraNotes extends Component {

    next = () => {
        this.props.history.push('/owner/schedule/new/review')
    }

    back = () => {
        this.props.history.goBack()
    }

    handleChange = e => {
        this.props.updateState({[e.target.name]: e.target.value})
    }

    render() {
        console.log(this.props.selectedPetName);
        console.log(this.props.selectedPetimg)
        return(
            <div className='extra_notes_page'>
                <h1>Extra Notes</h1>
                <textarea onChange={this.handleChange} placeholder='Extra instructions for the walker' name="extraNotes" cols="30" rows="10"></textarea>
                <button onClick={this.next}>Review</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.ownerReducer.notes,
        selectedPetName: state.ownerReducer.selectedPetName,
        selectedPetImg: state.ownerReducer.selectedPetImg
    }
}

export default connect(mapStateToProps, {
    updateState
})(ExtraNotes);