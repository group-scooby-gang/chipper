import React, {Component} from 'react';
import './newWalkExtra.css';

class ExtraNotes extends Component {
    next = () => {
        this.props.history.push('/owner/schedule/new/review')
    }

    back = () => {
        this.props.history.goBack()
    }
    render() {
        return(
            <div>
                <h2>Extra Notes</h2>
                <textarea placeholder='Extra instructions for the walker' name="notes" cols="30" rows="10"></textarea>
                <button onClick={this.next}>Review</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default ExtraNotes;