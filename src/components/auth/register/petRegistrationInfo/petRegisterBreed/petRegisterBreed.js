import React, { Component } from "react";
import "./petRegisterBreed.css";
import { updateState } from "./../../../../../redux/petReducer";
import { connect } from "react-redux";

class PetRegisterBreed extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

  handleChange = e => {
    e.preventDefault();
    this.props.updateState({ breed: e.target.value });
  };

  nextButton = () => {
    this.props.history.push('/register/pet/age');
  };

  render() {
    const { name } = this.props;
    return (
      <div>
          <div onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
        <img
          src="https://i.pinimg.com/474x/06/8c/1f/068c1f4c21930fadb89f90de70426d54--queen-cersei-ned-stark.jpg"
          alt="dog_picture"
        />
        <div>What is {name}'s breed?</div>
        <input onChange={this.handleChange} placeholder='breed' type="text" />
        <button onClick={this.nextButton}>Next</button>
        <div>*Status Bar*</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.petReducer.name,
    breed: state.petReducer.breed
  };
};

export default connect(mapStateToProps, {
  updateState
})(PetRegisterBreed);
