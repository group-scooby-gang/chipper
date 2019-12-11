import React, {Component} from 'react'
import './walkerSchedule.css';
//this component is for approved walkers
class WalkerSchedule extends Component {
    render() {
        return (
            <div className='walker_schedule'>
                <h1>Schedule</h1>
                <div className='pending_walks_section'>
                    <h4>Pending Walks</h4>
                    <div className='pending_walks_list'>
                        <div className='picture_and_name'>
                            <img src="" alt="dog_image"/>
                            <h4>Petto Name</h4>
                        </div>
                        <p>Job description</p>
                        <div className='pending_buttons'>
                            <button>Approve</button>
                            <button>Decline</button>
                        </div>
                    </div>
                </div>
                <div className='scheduled_walks_section'>
                    <h4>Scheduled Walks</h4>
                    <div className='scheduled_walks_list'>
                        <div>mapped section of scedule</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WalkerSchedule;