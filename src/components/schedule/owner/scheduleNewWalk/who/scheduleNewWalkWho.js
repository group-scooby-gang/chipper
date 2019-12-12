import React, { Component } from 'react';
import './scheduleNewWalkWho.css';
import { updateState, getOwnerPets } from '../../../../../redux/ownerReducer';
import { connect } from 'react-redux';

class NewWalkWho extends Component {

    componentDidMount() {
        this.getPets();
    }

    goBack = () => {
        this.props.history.goBack();
    }

    next = () => {
        this.props.history.push('/owner/schedule/new/walker_select');
    }

    getPets = () => {
        this.props.getOwnerPets();
    }

    selectPet = (val) => {
        this.props.updateState({ selectedPet: val});
    }

    render() {
        console.log(this.props.selectedPet)
        const mappedPets = this.props.pets.map(val => {
            return (
                <div onClick={() => this.selectPet(val.pet_id)} className='owner_pet'>
                    <img src={val.img} alt="pup_pic"/>
                    <h3>{val.name}</h3>
                </div>
            )
        })
        return (
            <div className='who_page'>
                <div className='back_button' onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
                <h2>Who</h2>
                <div className='pet_section'>
                    <div className='pet_selectors'>
                        {mappedPets}
                    </div>
                </div>
                <button onClick={this.next}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pets: state.ownerReducer.pets,
        selectedPet: state.ownerReducer.selectedPet
    }
}

export default connect(mapStateToProps, {
    updateState,
    getOwnerPets
})(NewWalkWho);