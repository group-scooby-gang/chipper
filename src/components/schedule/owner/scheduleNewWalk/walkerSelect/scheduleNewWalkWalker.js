import React, { Component } from 'react';
import './scheduleNewWalkWalker.css';
import {
	updateState,
	getWalkers,
	searchWalkers
} from '../../../../../redux/ownerReducer';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

class WalkerSelect extends Component {
	state = {
		searchContainer: 'close',
		state: null,
		city: null
	};

	componentDidMount() {
		this.getWalkers();
	}

	back = () => {
		this.props.history.goBack();
	};

	next = () => {
		this.props.history.push('/owner/schedule/new/select_date');
	};

	getWalkers = () => {
		this.props.getWalkers();
	};

	selectWalker = (val) => {
		this.props.updateState({
			selectedWalker: val.user_id,
			selectedWalkerName: val.firstname + val.lastname,
			selectedWalkerImg: val.profileimg
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	searchWalker = async () => {
		this.props.updateState({ searchWalker: [] });
		const { state, city } = this.state;
		await this.props.searchWalkers(state, city);
		this.setState({ searchContainer: 'open' });
	};

	render() {
		const mappedWalkers = this.props.walkers.map((val) => {
			return (
				<div className='walker' onClick={() => this.selectWalker(val)}>
					<img src={val.profileimg} alt='profile_pic' />
					<h3>
						{val.firstname} {val.lastname}
					</h3>
					<p>{val.experience}</p>
					<div>Price:</div>
					<div className='price_section'>
						<p>15min: ${val._15minprice}</p>
						<p>30min: ${val._30minprice}</p>
						<p>45min: ${val._45minprice}</p>
						<p>60min: ${val._60minprice}</p>
					</div>
				</div>
			);
		});

		const mappedSearchWalkers = this.props.searchedWalker.map((val) => {
			return (
				<div className='walker' onClick={() => this.selectWalker(val)}>
					<img src={val.profileimg} alt='profile_pic' />
					<h3>
						{val.firstname} {val.lastname}
					</h3>
					<p>{val.experience}</p>
					<div>Price:</div>
					<div className='price_section'>
						<p>15min: ${val._15minprice}</p>
						<p>30min: ${val._30minprice}</p>
						<p>45min: ${val._45minprice}</p>
						<p>60min: ${val._60minprice}</p>
					</div>
				</div>
			);
		});
		return (
			<div className='selected_walker_page'>
				<h1>Select A Walker</h1>
				<div className='top_three_walkers_section'>
					<h2>Top Walkers</h2>
					{mappedWalkers}
				</div>
				<div className='search_section'>
					<div>
						<div>
							<h3>State:</h3>
							<input
								onChange={this.handleChange}
								type='text'
								name='state'
								placeholder='State'
							/>
						</div>
						<div>
							<h3>City:</h3>
							<input
								onChange={this.handleChange}
								type='text'
								name='city'
								placeholder='City'
							/>
						</div>
					</div>
					<button className='search_section_button' onClick={this.searchWalker}>
						Search
					</button>
				</div>
				{this.state.searchContainer === 'open' ? (
					<div className='searched_walkers_results_section'>
						{mappedSearchWalkers}
					</div>
				) : null}
				<button className='selected_walker_page_next' onClick={this.next}>
					NEXT
				</button>
				<button className='selected_walker_page_back' onClick={this.back}>
					BACK
				</button>
				<ProgressBar animated now={20} className='progress' animated />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		walkers: state.ownerReducer.walkers,
		selectedWalker: state.ownerReducer.selectedWalker,
		searchedWalker: state.ownerReducer.searchedWalker,
		selectedPet: state.ownerReducer.selectedPet
	};
};

export default connect(mapStateToProps, {
	updateState,
	getWalkers,
	searchWalkers
})(WalkerSelect);
