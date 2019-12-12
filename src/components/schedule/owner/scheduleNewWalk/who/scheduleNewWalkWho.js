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
                <h2>Who</h2>
                <div className='pet_section'>
                    <div className='pet_selectors'>
                        <div>
                            <input type="radio" name='name' value='set the value to the mapped dog' /> map of owner dogs <br />
                        </div>
                        <div>
                            <input type="radio" name='name' value='set the value to the mapped dog' /> map of owner dogs <br />
                        </div>
                    </div>
                </div>
                <button onClick={this.next}>Next</button>
            </div>
        )
    }
}

export default NewWalkWho;