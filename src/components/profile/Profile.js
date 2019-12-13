import React from "react";
import {connect} from "react-redux"
import {getPets} from "./../../redux/profileReducer"
import "./Profile.css"
import {Link} from "react-router-dom"

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
                        <Link to={`/Profile/Dog/${val.pet_id}`}>
                        <button>View walk history</button>
                        </Link>
                </div>
            )
        })
        return (
            <div>
                <h2 id="yourPets">Your pets: </h2>
                <div className="petCard">
                    {mappedPets}
                </div>
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