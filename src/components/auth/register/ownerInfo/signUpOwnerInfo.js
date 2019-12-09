import React, { Component } from "react";
import './signUpOwnerInfo.css';
import {connect} from 'react-redux';

class RegisterOwnerInfo extends Component {

  goBack = () => {
    this.props.history.goBack();
  }

  next = () => {
    this.props.history.push('/register/pet/name')
  }


  render() {
    return (
      <div>
        <div><i onClick={this.goBack} class="fas fa-angle-left"></i></div>
        <img src="https://media.istockphoto.com/vectors/man-and-his-best-friend-dog-cuddle-hug-backside-view-cute-cartoon-vector-id1018691406?k=6&m=1018691406&s=612x612&w=0&h=W_rDzQk3a1n4PaS8xJwa396YLmMsv1FMqyEs1Bfponw=" alt="dog_owner"/>
          <button onClick={this.next}>Add Pup</button>
          
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, {
  
})(RegisterOwnerInfo);
