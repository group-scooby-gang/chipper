import React, { Component } from "react";
import { Link } from "react-router-dom";
import './signUpOwnerInfo.css';

class RegisterOwnerInfo extends Component {
  render() {
    return (
      <div>
        <h1>Dog Owner</h1>
        <form className='ownerInfoForm'>
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </form>
        <Link>
          <button>Add Pup</button>
        </Link>
      </div>
    );
  }
}

export default RegisterOwnerInfo;
