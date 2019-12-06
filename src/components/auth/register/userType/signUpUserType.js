import React, { Component } from "react";
import { Link } from "react-router-dom";
import './signUpUserType.css';

class UserType extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <img src="" alt="dog_picture" />
        <div className="button_section">
          <Link to='/register/ownerinfo'>
            <button>I am a dog owner</button>
          </Link>
          <Link>
            <button>I am a dog walker</button>
          </Link>
        </div>
        <p>Oops...I already have an account. Log in <Link>here</Link></p>
      </div>
    );
  }
}

export default UserType;
