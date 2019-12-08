import React, {Component} from 'react'
import './walkerAddress.css';
import {updateState} from './../../../../../redux/walkerReducer';
import {connect} from 'react-redux';

class RegisterWalkerAddress extends Component {

    handleChange = e => {
        this.props.updateState({ address: e.target.value})
    }

    goBack = () => {
        this.props.history.goBack()
    }

    next = () => {
        this.props.history.push('/register/walker/zip')
    }

    render() {
        return (
            <div>
                <div><i onClick={this.goBack} class="fas fa-angle-left"></i></div>
                <img src="https://image.shutterstock.com/image-vector/man-walking-many-dogs-different-260nw-505695991.jpg" alt="dog_walker"/>
                <div>What's your address?</div>
                <input onChange={this.handleChange} placeholder='Address' type="text" name="address"/>
                <button onClick={this.next}>Next</button>
                <div>*Status Bar*</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        address: state.walkerReducer.address
    }
}

export default connect(mapStateToProps, {
    updateState
})(RegisterWalkerAddress);