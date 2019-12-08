import React, { Component } from 'react';
import './walkerZipCode.css';
import { updateState } from './../../../../../redux/walkerReducer';
import { connect } from 'react-redux';

class RegisterWalkerZip extends Component {

    handleChange = e => {
        this.props.updateState({ zip: e.target.value});
    }

    goBack = () => {
        this.props.history.goBack()
    }

    next = () => {
        this.props.history.push('/register/walker/review')
    }

    render() {
        return (
            <div>
                <div><i onClick={this.goBack} class="fas fa-angle-left"></i></div>
                <img src="https://media.istockphoto.com/vectors/dog-walker-vector-id1065730820?k=6&m=1065730820&s=612x612&w=0&h=sXT6tM2rfMm-cx3CuKti0QQliZAT2nPNvLg9DaSxO4Y=" alt="dog_walker" />
                <div>What's your Zip Code?</div>
                <input onChange={this.handleChange} placeholder='Zip Code' type="text" name="zip" />
                <button onClick={this.next}>Next</button>
                <div>*Status Bar*</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        zip: state.walkerReducer.zip
    }
}

export default connect(mapStateToProps, {
    updateState
})(RegisterWalkerZip);