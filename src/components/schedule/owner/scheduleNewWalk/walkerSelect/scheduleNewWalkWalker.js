import React, { Component } from 'react';
import './scheduleNewWalkWalker.css';

class WalkerSelect extends Component {
    state = {
        searchContainer: 'close'
    }

    handleChange = e => {
        this.props.updateState({[e.target.name]: e.target.value})
    }

    handleSeach = () => {
        this.setState({ searchContainer: 'open'})
    }

    render() {
        // const mappedCities = this.props.walkers.map(val => {
        //     <select name="state">
        //         <option value={val.city}>{val.city}</option>
        //     </select>
        // })
        return (
            <div>
                <div>
                    <h2>Mapped Walker</h2>
                    <h2>Mapped Walker</h2>
                    <h2>Mapped Walker</h2>
                </div>
                <div>
                    {/* <select name="state">
                        <option value="State">State</option>
                        <option value="Alabama"></option>
                        <option value="Alaska"></option>
                        <option value="Arkansas"></option>
                        <option value="California"></option>
                        <option value="Conneticut"></option>
                        <option value="Florida"></option>
                        <option value="Georgia"></option>
                        <option value="North Dakota"></option>
                        <option value="South Dakota"></option>
                        <option value="Virginia"></option>
                        <option value="Deleware"></option>
                        <option value="Hawaii"></option>
                        <option value="Texas"></option>
                        <option value="Tennessee"></option>
                        <option value="Louisiana"></option>
                        <option value="Nevada"></option>
                        <option value="Arizona"></option>
                        <option value="Utah"></option>
                        <option value="Idaho"></option>
                        <option value="Wyoming"></option>
                        <option value="Nebraska"></option>
                        <option value="Kansas"></option>
                        <option value="Colorado"></option>
                        <option value="West Virginia"></option>
                        <option value="South Carolina"></option>
                        <option value="North Carolina"></option>
                        <option value="Maryland"></option>
                        <option value="Indiana"></option>
                        <option value="Ohio"></option>
                        <option value="Maine"></option>
                        <option value="Vermont"></option>
                        <option value="Kentucky"></option>
                        <option value="Missouri"></option>
                        <option value="Michigan"></option>
                        <option value="Rhode Island"></option>
                        <option value="Oregan"></option>
                        <option value="Washington"></option>
                        <option value="New Mexico"></option>
                        <option value="Mississippi"></option>
                        <option value="Pennsylvania"></option>
                        <option value="Massachusetts"></option>
                        <option value="New York"></option>
                        <option value="New Jersey"></option>
                        <option value="Illinois"></option>
                        <option value="Montana"></option>
                        <option value="Iowa"></option>
                        <option value="New Hampshire"></option>
                        <option value="Oklahoma"></option>
                        <option value="Wisconsin"></option>
                        <option value="Minnesota"></option>
                    </select> */}
                    <div>
                        <h3>State:</h3>
                        <input onChange={this.handleChange} type="text" name="state" placeholder='State' />
                    </div>
                    <div>
                        <h3>City:</h3>
                        <input onChange={this.handleChange} type="text" name="city" placeholder='City' />
                    </div>
                    {/* function to search for walkers based on state and city inputs */}
                    <button onClick={this.handleSeach}>Search</button>
                </div>
                {
                this.state.searchContainer === 'open'
                ?
                <div>
                    <h4>Mapped Walker</h4>
                    <h4>Mapped Walker</h4>
                    <h4>Mapped Walker</h4>
                </div>
                :
                null
                }
            </div>
        )
    }
}

export default WalkerSelect;