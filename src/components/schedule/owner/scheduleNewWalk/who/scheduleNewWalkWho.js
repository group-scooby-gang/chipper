import React, { Component } from 'react';
import './scheduleNewWalkWho.css';

class NewWalkWho extends Component {

    goBack = () => {
        this.props.history.goBack()
    }

    next = () => {
        this.props.history.push('/owner/schedule/new/walker_select')
    }

    render() {
        return (
            <div className='who_page'>
                <div className='back_button' onClick={this.goBack}><i class="fas fa-angle-left"></i></div>
                <div className='pet_section'>
                    <h2>Who</h2>
                    <div className='pet_selectors'>
                        <input type="radio" name='name' value='dog' /> map of owner dogs <br/>
                        <input type="radio" name='name' value='dog2' /> map of owner dogs <br/>
                    </div>
                </div>
                    <button onClick={this.next}>Next</button>
            </div>
        )
    }
}
            
export default NewWalkWho;