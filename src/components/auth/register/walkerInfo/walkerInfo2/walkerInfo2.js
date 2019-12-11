import React, {Component} from 'react';
import './walkerInfo2.css';
import {updateState} from './../../../../../redux/walkerReducer';
import {connect} from 'react-redux';

class RegisterWalkerInfoStep2 extends Component {
    handleChange = e => {
        e.preventDefault();
        this.props.updateState({ [e.target.name]: e.target.value })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    nextButton = () => {
        this.props.history.push('/register/walker/review');
    }

    render() {
        return (
            <div className='walker_info_page_2'>
                <div className='back_button' onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
                <img src="https://webstockreview.net/images/pet-clipart-dog-walker-7.png" alt="dog_walker"/>
                <div>Step 2</div>
                <div>
                    <p>Prices</p>
                    <div className='pricing_section'>
                        <h5>15 min:</h5>
                        $<input onChange={this.handleChange} type="number" name="fifteen" />
                    </div>
                    <div className='pricing_section'>
                        <h5>30 min:</h5>
                        $<input onChange={this.handleChange} type="number" name="thirty" />
                    </div>
                    <div className='pricing_section'>
                        <h5>45 min:</h5>
                        $<input onChange={this.handleChange} type="number" name="fourtyfive"/>
                    </div>
                    <div className='pricing_section'>
                        <h5>60 min:</h5>
                        $<input onChange={this.handleChange} type="number" name='sixty'/>
                    </div>
                </div>
                <button onClick={this.nextButton}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.walkerReducer.email,
        phone: state.walkerReducer.phone,
        firstname: state.walkerReducer.firstname
    }
}

export default connect(mapStateToProps, {
    updateState
})(RegisterWalkerInfoStep2);