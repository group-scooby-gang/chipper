import React, {Component} from 'react';
import './walkerReview.css';
import {resetFields, registerWalker} from './../../../../../redux/walkerReducer';
import {connect} from 'react-redux';

class RegisterWalkerReview extends Component {

    goBack = () => {
        this.props.history.goBack()
    }

    registerButton = async(e) => {
        e.preventDefault();
        const {username, firstname, lastname, email, phone, address, zip, password} = this.props;
        await this.props.registerWalker(
            username,
            firstname,
            lastname,
            email,
            phone,
            address,
            zip,
            password
        ).then(() => {
            this.props.history.push('/walker/home')
        })
    }

    render() {
        //do we need to add a city and state option for registration
        const {username, firstname, lastname, email, phone, address, zip} = this.props;
        return (
            <div>
                <div><i onClick={this.goBack} class="fas fa-angle-left"></i></div>
                <img src="https://vippets.net/wp-content/uploads/2019/05/dog-walker-legs-and-dogs-1080x675.jpg" alt="dog_walker"/>
                <h1>Review Info</h1>
                <h5>Username:</h5>
                <div>{username}</div>
                <h5>Name:</h5>
                <div>{firstname} {lastname}</div>
                <h5>Email:</h5>
                <div>{email}</div>
                <h5>Phone:</h5>
                <div>{phone}</div>
                <h5>Address:</h5>
                <div>{address}</div>
                <h5>Zip:</h5>
                <div>{zip}</div>
                <button onClick={this.registerButton}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.walkerReducer.username,
        firstname: state.walkerReducer.firstname,
        lastname: state.walkerReducer.lastname,
        email: state.walkerReducer.email,
        phone: state.walkerReducer.phone,
        address: state.walkerReducer.address,
        zip: state.walkerReducer.zip,
        password: state.walkerReducer.password
    }
}

export default connect(mapStateToProps, {
    resetFields,
    registerWalker
})(RegisterWalkerReview);