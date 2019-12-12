import React, { Component } from 'react';
import './scheduleNewWalkWalker.css';
import {updateState, getWalkers, searchWalkers} from '../../../../../redux/ownerReducer';
import {connect} from 'react-redux';

class WalkerSelect extends Component {
    state = {
        searchContainer: 'close',
        state: '',
        city: ''
    }

    componentDidMount() {
        this.getWalkers()
    }

    back = () => {
        this.props.history.goBack();
    }

    next = () => {
        this.props.history.push('/owner/schedule/new/select_date')
    }

    getWalkers = () => {
        this.props.getWalkers()
    }

    selectWalker = (val) => {
        this.props.updateState({ selectedWalker: val});
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    searchWalker = () => {
        const {state, city} = this.state;
        console.log(this.state)
        this.props.searchWalkers(state, city);
        this.setState({ searchContainer: 'open' })
    }

    render() {
        console.log(this.props.selectedWalker);
        console.log(this.props.searchedWalker);
        const mappedWalkers = this.props.walkers.map(val => {
            return(
                <div className='walker' onClick={() => this.selectWalker(val.user_id)}>
                    <h3>name</h3>
                    <p>{val.experience}</p>
                    <div>Price:</div>
                    <div className='price_section'>
                        <p>15min: ${val._15minprice}</p>
                        <p>30min: ${val._30minprice}</p>
                        <p>45min: ${val._45minprice}</p>
                        <p>60min: ${val._60minprice}</p>
                    </div>
                </div>
            )
        })

        const mappedSearchWalkers = this.props.searchedWalker.map(val => {
            console.log(val)
        })
        return (
            <div className='selected_walker_page'>
                <h1>Select A Walker</h1>
                <div className='top_three_walkers_section'>
                    {mappedWalkers}
                </div>
                <div className='search_section'>
                    <div>
                        <div>
                            <h3>State:</h3>
                            <input onChange={this.handleChange} type="text" name="state" placeholder='State' />
                        </div>
                        <div>
                            <h3>City:</h3>
                            <input onChange={this.handleChange} type="text" name="city" placeholder='City' />
                        </div>
                    </div>
                    {/* function to search for walkers based on state and city inputs */}
                    <button onClick={this.searchWalker}>Search</button>
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
                <button onClick={this.next}>Next</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        walkers: state.ownerReducer.walkers,
        selectedWalker: state.ownerReducer.selectedWalker,
        searchedWalker: state.ownerReducer.searchedWalker
    }
}

export default connect(mapStateToProps, {
    updateState,
    getWalkers,
    searchWalkers
})(WalkerSelect);