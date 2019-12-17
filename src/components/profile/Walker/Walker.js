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

	settingsPage = () => {
		this.props.history.push('/walker/settings')
	}

	render() {
		const mappedProfile = this.props.walkerProfle.map((val, i) => {
			return (
				<div className='walkerProfileCard'>
					<div style={{
						marginTop: '5%'
					}} onClick={this.settingsPage}><i class="fas fa-cog"></i></div>
					<div>
						<img src={val.profileimg} alt="profile_pic" />
						<h1>
							{val.firstname} {val.lastname}
						</h1>
					</div>
					<p>
						<h4>About {val.firstname} {val.lastname}:</h4> {val.experience}
					</p>

					<div className='walkerProfilePrices'>
						<p>
							{val.firstname} {val.lastname} is a {val.category}
						</p>
						<p>Service rates:</p>
						<h6>15 minute rate: ${val._15minprice}</h6>
						<h6>30 minute rate: ${val._30minprice}</h6>
						<h6>45 minute rate: ${val._45minprice}</h6>
						<h6>60 minute rate: ${val._60minprice}</h6>
					</div>
					<div className='walkerProfileContact'>
						<p>Phone: {val.phone}</p>
						<p>Email: {val.email}</p>
						<p>
							Address:
							<br /> {val.address}, {val.city} {val.zip}, {val.state}
						</p>
					</div>
					{/* <header className='address_container'>
						<h6 className='address'>
							
						</h6>
					</header> */}
				</div>
			);
		});

		const mappedHistory = this.props.walkerHistory.map((val, i) => {
			return (
				<div className='historyCardContainer'>
					<div className='walkerHistoryCard'>
						<p>
							Date: {val.month}/{val.date}/{val.year}
						</p>
						<p>Companion: {val.name}</p>
					</div>
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
