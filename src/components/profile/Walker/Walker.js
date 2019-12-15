import React from 'react';
import { connect } from 'react-redux';
import {
	getWalkerProfile,
	getWalkerHistory
} from './../../../redux/profileReducer';
import './walker.css';

class Walker extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.getWalkerProfile();
		this.props.getWalkerHistory();
	}

	render() {
		const mappedProfile = this.props.walkerProfle.map((val, i) => {
			return (
				<div className='walkerProfileCard'>
					<h1>
						{val.firstname} {val.lastname}'s <span>profile..</span>
					</h1>
					<p>{val.experience}</p>
					<p>You are a {val.category}</p>
					<p>Service rates:</p>
					<div className='walkerProfilePrices'>
						<h6>15 minute rate: ${val._15minprice}</h6>
						<h6>30 minute rate: ${val._30minprice}</h6>
						<h6>45 minute rate: ${val._45minprice}</h6>
						<h6>60 minute rate: ${val._60minprice}</h6>
					</div>
					<div className='walkerProfileContact'>
						<p>Phone: {val.phone}</p>
						<p>Email: {val.email}</p>
					</div>
					<header>
						<h6>
							{val.address}, {val.city} {val.zip}, {val.state}
						</h6>
					</header>
				</div>
			);
		});

		const mappedHistory = this.props.walkerHistory.map((val, i) => {
			return (
				<div className='walkerHistoryCard'>
					<p>
						Date: {val.month}/{val.date}/{val.year}
					</p>
					<p>Companion: {val.name}</p>
				</div>
			);
		});
		return (
			<div>
				{mappedProfile}
				<h3>Walk History:</h3>
				{mappedHistory}
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => {
	return {
		walkerProfle: reduxState.profileReducer.walkerProfle,
		walkerHistory: reduxState.profileReducer.walkerHistory
	};
};

export default connect(mapStateToProps, { getWalkerProfile, getWalkerHistory })(
	Walker
);
