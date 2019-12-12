import React from "react";
import {connect} from "react-redux"
import {getPets} from "./../../redux/profileReducer"
import "./Profile.css"

class Profile extends React.Component {
    constructor(){
        super()

    }

    componentDidMount(){
        this.props.getPets()
    }


    render(){
        const mappedPets = this.props.pets.map((val, i) => {
            return (
                <div className="mappedpet">
                    <h4>{val.name}</h4>
                    <img src={val.img} alt="No image"></img>
                        <p>Breed: {val.breed}</p>
                        <p>Age: {val.age}</p>
                        <button>View walk history</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Profile</h1>
                <h2>Your pets: </h2>
                {mappedPets}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        pets: reduxState.profileReducer.pets
    }
}


export default connect( mapStateToProps, {getPets})(Profile)

// Show dogs 
//  --When you click on a specific dog, more info drops down 
//  --link to walk history comp that shows entire history