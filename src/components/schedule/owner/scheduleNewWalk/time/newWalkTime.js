import React, { Component } from 'react';
import './newWalkTime.css';

class WalkTime extends Component {
    next = () => {
        this.props.history.push('/owner/schedule/new/extra_notes')
    }

    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Time</h2>
                    {/* api request to get the prices from each walker */}
                    <input type="radio" name='payment' value='$30' /> 15 min. ($30)<br />
                    <input type="radio" name='payment' value='$40' checked /> 30 min. ($40) Default<br />
                    <input type="radio" name='payment' value='$50' /> 45 min. ($50)<br />
                    <input type="radio" name='payment' value='$60' /> 60 min. ($60)<br />
                </div>
                <button onClick={this.next}>Next</button>
                <button onClick={this.back}>Back</button>
                <div>Status Bar</div>
            </div>
        )
    }
}

export default WalkTime;