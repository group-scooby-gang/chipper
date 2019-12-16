import React from 'react';
import {connect} from "react-redux"


class EditPet extends React.Component {
    constructor(){
        super()
    }


    render(){
        return (
            <div>
                <h3>Edit Name:</h3>
                    <input type="text" name="name"></input>
                <h3>Edit Breed:</h3>
                    <input type="text" name="breed"></input>
                <h3>Edit Age:</h3>
                    <input type="text" name="age"></input>
                <h3>Edit Image:</h3>
                    <input type="file" name="img"></input>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        name: reduxState.PetReducer.name,
        breed: reduxState.PetReducer.breed,
        age: reduxState.PetReducer.age,
        img: reduxState.PetReducer.img
    }
}


export default connect(mapStateToProps, {})(EditPet);