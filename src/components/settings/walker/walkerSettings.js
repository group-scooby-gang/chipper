import React, { Component } from "react";
import "./walkerSettings.css";
import { connect } from "react-redux";
import { updateState } from "../../../redux/userReducer";

class WalkerSettings extends Component {

    done = () => {
        this.props.history.goBack()
    }

    render() {
        console.log(this.props.bio);
        const {
            firstname,
            lastname,
            address,
            phone,
            profileimg,
            username,
            // bio
        } = this.props.user;
        return (
            <div className="settings_page">
                <button onClick={this.done}>Done</button>
                <div className="pic_name_container">
                    <div className='img_update_container'>
                        <img src={profileimg} alt="profile_pic" />
                        <button>FireBase Img</button>
                    </div>
                    <div className='name_update_container'>
                        <div className='name_data_container'>
                            <h3>First name:</h3><p>{firstname}</p>
                            <h3>Last name:</h3><p>{lastname}</p>
                            <h3>Username:</h3><p>{username}</p>
                        </div>
                        <button>Update</button>
                    </div>
                </div>
                <div className="phone_address_bio">
                    <div className='pab_data_container'>
                        <div className='phone_data'>
                            <h3>Phone:</h3><p>{phone}</p>
                        </div>
                        <div className='address_data'>
                            <h3>Address:</h3><p>{address}</p>
                        </div>
                        <div className='bio_data'>
                            {/* <h3>Bio:</h3><p>{bio}</p> */}
                        </div>
                    </div>
                    <div className='data_update_button_container'>
                        <button>Update</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    };
};

export default connect(mapStateToProps, {
    updateState
})(WalkerSettings);
