import React from 'react';
import {connect} from "react-redux"
import {petDetails} from "./../redux/petReducer"

class EditPet extends React.Component {
    constructor(){
        super()
    }

    componentDidMount = async () => {
        this.props.petDetails(this.props.match.params.pet_id)
        console.log(this.props.pet)
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
        pet: reduxState.petReducer.pet
    }
}


export default connect(mapStateToProps, {petDetails})(EditPet);