import React, { Component } from 'react';
import './walkerInfo.css';
import { updateState } from '../../../../../redux/walkerReducer';
import { connect } from 'react-redux';

class RegisterWalkerInfo extends Component {
    state = {
        error: false
    }

    handleChange = e => {
        e.preventDefault();
        this.props.updateState({ [e.target.name]: e.target.value })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    nextButton = () => {
        this.props.history.push('/register/walker/info2')
    }

    render() {
        return (
            <div>
                <div><i onClick={this.goBack} class="fas fa-angle-left"></i></div>
                <img src="https://image.shutterstock.com/image-vector/man-walking-many-dogs-different-260nw-505695991.jpg" alt="dog_walker"/>
                <h1>Dog Walker</h1>
                <textarea onChange={this.handleChange} name="bio" placeholder='Short bio of who you are.' cols="30" rows="10"></textarea>
                <button onClick={this.nextButton}>Next</button>
                <div>*Status Bar*</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bio: state.walkerReducer.bio
    }
}

export default connect(mapStateToProps, {
    updateState
})(RegisterWalkerInfo);