import React, {Component} from 'react';
import './petRegisterName.css';
import {updateState} from './../../../../../redux/petReducer';
import {connect} from 'react-redux'

class PetRegisterName extends Component {

    handleChange = e => {
        e.preventDefault();
        this.props.updateState({ name: e.target.value })
    }

    nextButton = () => {
        this.props.history.push('/register/pet/breed');
    }

    render() {
        return (
            <div>
                <img src="https://i.pinimg.com/originals/0c/92/0d/0c920d58b210a74a75868df885160a5f.jpg" alt="dog_picture"/>
                <h1>What's your dogs name?</h1>
                <input onChange={this.handleChange} placeholder='name' type="text"/>
                <button onClick={this.nextButton}>Next</button>
                <div>*Status Bar*</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.petReducer.name
    }
}

export default connect(mapStateToProps, {
    updateState
})(PetRegisterName);