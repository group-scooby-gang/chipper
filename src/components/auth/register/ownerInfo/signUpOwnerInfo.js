import React, { Component } from "react";
import './signUpOwnerInfo.css';
import {updateState, resetFields, registerUser} from './../../../../redux/userReducer';
import {connect} from 'react-redux';

class RegisterOwnerInfo extends Component {
  state = {
    error: false
  }

  goBack = () => {
    this.props.history.goBack();
  }

  handleChange = e => {
    e.preventDefault();
    this.props.updateState({ [e.target.name]: e.target.value })
  }

  handleRegister = async(e) => {
    e.preventDefault();
    const {userName, firstName, lastName, email, password, phone, address, zip} = this.props;
    await this.props.registerUser(
      userName,
      firstName,
      lastName,
      password,
      email,
      phone,
      address,
      zip
    ).then(() => {
      this.props.history.push('/register/pet/name')
    }).catch(() => {
      this.setState({ error: true });
    })
  }


  render() {
    return (
      <div>
        <div><i onClick={this.goBack} class="fas fa-angle-left"></i></div>
        <img src="https://media.istockphoto.com/vectors/man-and-his-best-friend-dog-cuddle-hug-backside-view-cute-cartoon-vector-id1018691406?k=6&m=1018691406&s=612x612&w=0&h=W_rDzQk3a1n4PaS8xJwa396YLmMsv1FMqyEs1Bfponw=" alt="dog_owner"/>
        <h1>Dog Owner</h1>
        <form className='ownerInfoForm'>
          <input onChange={this.handleChange} type="text" placeholder="first name" name='firstName' />
          <input onChange={this.handleChange} type="text" placeholder="last name" name='lastName' />
          <input onChange={this.handleChange} type="text" placeholder="email" name='email' />
          <input onChange={this.handleChange} type="text" placeholder="username" name='userName' />
          <input onChange={this.handleChange} type="password" placeholder="password" name='password' />
          <input onChange={this.handleChange} type="text" placeholder="phone" name='phone' />
          <input onChange={this.handleChange} type="text" placeholder="address" name='address' />
          <input onChange={this.handleChange} type="text" placeholder="zip" name='zip' />
          <input onChange={this.handleChange} type="text" placeholder="img" name='profileImg' />
        </form>
          <button onClick={this.handleRegister}>Add Pup</button>
          {
              this.state.error === true 
            ? 
              (<div>*Username already taken*</div>) 
            : 
              null
          }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.userReducer.userName,
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    email: state.userReducer.email,
    password: state.userReducer.password,
    phone: state.userReducer.phone,
    address: state.userReducer.address,
    zip: state.userReducer.zip
  }
}

export default connect(mapStateToProps, {
  updateState,
  resetFields,
  registerUser
})(RegisterOwnerInfo);
