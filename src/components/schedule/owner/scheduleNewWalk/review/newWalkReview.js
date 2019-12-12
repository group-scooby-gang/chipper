import React, {Component} from 'react'
import './newWalkReview.css';

class WalkReview extends Component {
    handleSetWalk = () => {
        //api function here to add the walk to the db
        //then route back to the owner schedule page
        this.props.history.push('/owner/schedule')
    }

    back = () => {
        this.props.history.goBack();
    }
    render() {
        return(
            <div>
                <h2>Review</h2>
                <div>
                    <div>
                    <img src="" alt="dog_pic"/>
                    <div>Name of dog</div>
                    </div>
                    <div>
                        <img src="" alt="walker_pic"/>
                        <div>Name of walker</div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Time</h3>
                        {/* find line break for html */}
                        <div>_____</div>
                        <div>1 hour walk.</div>
                    </div>
                    <div>
                        <h3>Date</h3>
                        <div>_____</div>
                        <div>December 8, 2019, 0800</div>
                    </div>
                    <div>
                    <div>
                        <h3>Extra Notes</h3>
                        <div>_____</div>
                        <div>Any extra instructions that the owner has written</div>
                    </div>
                    </div>
                </div>
                <button onClick={this.handleSetWalk}>Schedule!</button>
                <button onClick={this.back}>Back</button>
                <div>Status Bar</div>
            </div>
        )
    }
}

export default WalkReview;