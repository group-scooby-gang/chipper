import React, { Component } from 'react';
import './walkerInfo.css';
import { updateState } from './../../../../redux/walkerReducer';
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
                <form>
                    <input onChange={this.handleChange} type="text" placeholder="first name" name='firstname' />
                    <input onChange={this.handleChange} type="text" placeholder="last name" name='lastname' />
                    <input onChange={this.handleChange} type="text" placeholder="username" name='username' />
                {
                    this.state.error === true
                ?
                    (<div>*Username already taken*</div>)
                :
                    null
                }
                    <input onChange={this.handleChange} type="password" placeholder="password" name='password' />
                </form>
                <button onClick={this.nextButton}>Next</button>
                <div>*Status Bar*</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstname: state.walkerReducer.firstname,
        lastname: state.walkerReducer.lastname,
        username: state.walkerReducer.username,
        password: state.walkerReducer.password
    }
}

export default connect(mapStateToProps, {
    updateState
})(RegisterWalkerInfo);