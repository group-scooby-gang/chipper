import React, { Component } from 'react';
import './walkerInfo.css';
import { updateState } from '../../../../../redux/walkerReducer';
import { connect } from 'react-redux';

class RegisterWalkerInfo extends Component {
    state = {
        error: false
    }


    componentDidMount(){
        console.log(this.props)
    }

    handleChange = e => {
        e.preventDefault();
        this.props.updateState({ [e.target.name]: e.target.value })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    nextButton = () => {
        this.props.history.push('/register/walker/info2')
    }

    render() {
        return (
            <div className='walker_info_page'>
                <div className='back_button' onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
                <img src="https://st.depositphotos.com/1695366/1398/v/950/depositphotos_13980479-stock-illustration-cartoon-dog-walker.jpg" alt="dog_walker"/>
                <h1>Dog Walker</h1>
                <textarea onChange={this.handleChange} name="bio" placeholder='Short bio of who you are.' cols="30" rows="10"></textarea>
                <button onClick={this.nextButton}>Next</button>
                <div>*Status Bar*</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bio: state.walkerReducer.bio
    }
}

export default connect(mapStateToProps, {
    updateState
})(RegisterWalkerInfo);