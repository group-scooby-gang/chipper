import React, {Component} from 'react'
import './petRegisterReview.css';
import {resetFields, registerPet} from '../../../../../redux/petReducer';
import {connect} from 'react-redux'

class PetRegisterReview extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    handleRegisterPet = async(e) => {
        e.preventDefault();
        const {name, breed, age} = this.props;
        await this.props.registerPet(name, breed, age)
            .then(() => {
                this.props.resetFields();
                this.props.history.push('/dashboard/owner');
        })
    }

    render() {
        const {name, breed, age, img} = this.props;
        return (
            <div>
                <div onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
                <h1>Pet Info</h1>
                <img src={img} alt="owner_dog_picture"/>
                <h5>Name:</h5>
                <div>{name}</div>
                <h5>Breed:</h5>
                <div>{breed}</div>
                <h5>Age</h5>
                <div>{age}</div>
                <button onClick={this.handleRegisterPet}>Add Pet</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.petReducer.name,
        breed: state.petReducer.breed,
        age: state.petReducer.age,
        img: state.petReducer.img
    }
}

export default connect(mapStateToProps, {
    resetFields,
    registerPet
})(PetRegisterReview);