import React, {Component} from 'react';
import './walkerInfo2.css';
import {updateState} from './../../../../../redux/walkerReducer';
import {connect} from 'react-redux';

class RegisterWalkerInfoStep2 extends Component {
    handleChange = e => {
        e.preventDefault();
        this.props.updateState({ [e.target.name]: e.target.value })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    nextButton = () => {
        this.props.history.push('/register/walker/address');
    }

    render() {
        return (
            <div>
                <div onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
                <img src="https://image.shutterstock.com/image-vector/man-walking-many-dogs-different-260nw-505695991.jpg" alt="dog_walker"/>
                <div>Step 2</div>
                <form>
                    <input onChange={this.handleChange} placeholder='email' type="text" name='email'/>
                    <input onChange={this.handleChange} placeholder='(123) 456-7890' type="text" name='phone'/>
                </form>
                <button onClick={this.nextButton}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.walkerReducer.email,
        phone: state.walkerReducer.phone,
        firstname: state.walkerReducer.firstname
    }
}

export default connect(mapStateToProps, {
    updateState
})(RegisterWalkerInfoStep2);