import React from 'react';
import {connect} from "react-redux"
import {petDetails, updateState, editPet} from "./../redux/petReducer"
import "./EditPet.css"

class EditPet extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        await this.props.petDetails(this.props.match.params.pet_id)
        this.props.updateState({name: this.props.pet[0].name})
        this.props.updateState({breed: this.props.pet[0].breed})
        this.props.updateState({age: this.props.pet[0].age})
        this.props.updateState({img: this.props.pet[0].img})
    }

    update = (e) => {
        this.props.updateState({[e.target.name]: e.target.value})
    }

    handleChanges = (e) => {
        const {name, breed, age, img} = this.props;
        const pet_id = this.props.match.params.pet_id
        this.props.editPet(name, breed, age, img, pet_id)
        .then(() => {
            alert("Pet edited")
        })
        .catch(() => {
            alert("Error editing pet")
        })
    }

    render(){
        return (
            <div className="editPetCard">
                <h3>Edit Name:</h3>
                    <input type="text" name="name" onChange={this.update}></input>
                <h3>Edit Breed:</h3>
                    <input type="text" name="breed" onChange={this.update}></input>
                <h3>Edit Age:</h3>
                    <input type="text" name="age" onChange={this.update}></input>
                <h3>Edit Image:</h3>
                    <input type="file" name="img"></input>
                <button onClick={this.handleChanges}>Submit Changes</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        pet: reduxState.petReducer.pet,
        name: reduxState.petReducer.name,
        breed: reduxState.petReducer.breed,
        age: reduxState.petReducer.age,
        img: reduxState.petReducer.img
    }
}


export default connect(mapStateToProps, {petDetails, updateState, editPet})(EditPet);