import React, {Component} from 'react';
import './petRegisterAge.css';
import {updateState} from './../../../../../redux/petReducer';
import {connect} from 'react-redux';

class PetRegisterAge extends Component {
    
    handleChange = e => {
        e.preventDefault();
        this.props.updateState({ age: e.target.value})
    }

    goBack = () => {
        this.props.history.goBack();
    }

    next = () => {
        this.props.history.push('/register/pet/review')
    }

    render() {
        const {name, breed} = this.props
        return (
            <div>
                <div onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
                <img src="https://img.srgcdn.com/e//ME5oYU8ySnM0bFJoUE83MlBJTTguanBn.jpg" alt="dog_picture"/>
                <div>How old is your {breed}, {name}?</div>
                <input onChange={this.handleChange} placeholder='age' type="text"/>
                <button onClick={this.next}>Add Pup</button>
                <div>*Status Bar*</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.petReducer.name,
        breed: state.petReducer.breed,
        age: state.petReducer.age
    }
}

export default connect(mapStateToProps, {
    updateState,
})(PetRegisterAge);