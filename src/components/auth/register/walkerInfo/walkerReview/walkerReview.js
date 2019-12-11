import React, {Component} from 'react';
import './walkerReview.css';
import {resetFields, registerWalker} from './../../../../../redux/walkerReducer';
import {} from '../../../../../redux/userReducer';
import {connect} from 'react-redux';

class RegisterWalkerReview extends Component {

    goBack = () => {
        this.props.history.goBack()
    }

    registerButton = async(e) => {
        e.preventDefault();
        const {bio, category, fifteen, thirty, fortyfive, sixty} = this.props;
        await this.props.registerWalker(
            bio,
            category,
            fifteen,
            thirty,
            fortyfive,
            sixty
        ).then(() => {
            this.props.resetFields()
            this.props.history.push('/walker/dashboard')
        })
    }

    render() {
        const {userName, firstName, lastName, email, phone, address, city, state, zip} = this.props;
        const {category, bio, fifteen, thirty, fortyfive, sixty} = this.props
        return (
            <div className='walker_review_page'>
                <div className='back_button'><i onClick={this.goBack} class="fas fa-angle-left"></i></div>
                <img src="https://vippets.net/wp-content/uploads/2019/05/dog-walker-legs-and-dogs-1080x675.jpg" alt="dog_walker"/>
                <h1>Review Info</h1>
                <h5>Username:</h5>
                <div>{userName}</div>
                <h5>Name:</h5>
                <div>{firstName} {lastName}</div>
                <h5>Email:</h5>
                <div>{email}</div>
                <h5>Phone:</h5>
                <div>{phone}</div>
                <h5>Address:</h5>
                <div>{address}</div>
                <h5>City:</h5>
                <div>{city}</div>
                <h5>State:</h5>
                <div>{state}</div>
                <h5>Zip:</h5>
                <div>{zip}</div>
                <h5>Category</h5>
                <div>{category}</div>
                <h5>Bio:</h5>
                <div>{bio}</div>
                <h5>Prices:</h5>
                <div>15 min: ${fifteen} 30 min: ${thirty} 45 min: ${fortyfive} 60 min: ${sixty}</div>
                <button onClick={this.registerButton}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.userReducer.userName,
        firstName: state.userReducer.firstName,
        lastName: state.userReducer.lastName,
        email: state.userReducer.email,
        phone: state.userReducer.phone,
        address: state.userReducer.address,
        city: state.userReducer.city,
        state: state.userReducer.state,
        zip: state.userReducer.zip,
        bio: state.walkerReducer.bio,
        category: state.walkerReducer.category,
        fifteen: state.walkerReducer.fifteen,
        thirty: state.walkerReducer.thirty,
        fortyfive: state.walkerReducer.fortyfive,
        sixty: state.walkerReducer.sixty
    }
}

export default connect(mapStateToProps, {
    resetFields,
    registerWalker
})(RegisterWalkerReview);