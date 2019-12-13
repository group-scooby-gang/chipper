import React from "react"
import {connect} from "react-redux"
import {walkHistory} from "./../../../redux/profileReducer"
import "./DogProfile.css"

class DogProfile extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.walkHistory(this.props.match.params.pet_id)
    }

    render(){
        const mappedWalks = this.props.history.map((val, i) => {
            return (
                <div className="mappedWalkHistory">
                    <p>Date: {val.month}/{val.date}/{val.year}</p>
                    <p>Walker: {val.firstname} {val.lastname}</p>
                </div>
            )
        })
        return (
            <div>
                <button className="backToProfile">Back</button>
                <h6>Walk History</h6>
                {mappedWalks}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        history: reduxState.profileReducer.history
    }
}

export default connect(mapStateToProps, {walkHistory})(DogProfile);