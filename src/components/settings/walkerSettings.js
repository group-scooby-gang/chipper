import React, { Component } from "react";
import { connect } from "react-redux";
import { updateState } from "../../redux/userReducer";

class WalkerSettings extends Component {

    done = () => {
        this.props.history.goBack()
    }

    render() {
        console.log(this.props.user);
        const {
            firstname,
            lastname,
            address,
            phone,
            profileimg,
            username
        } = this.props.user;
        const { bio } = this.props;
        return (
            <div className="settings_page" style={{
                marginTop: '10%'
            }}>
                <div className="pic_name_container">
                    <button onClick={this.done}>Done</button>
                    <div className='img_update_container'>
                        <img src={profileimg} alt="profile_pic" />
                        <button>FireBase Img</button>
                    </div>
                    <div className='name_update_container'>
                        <div className='name_data_container'>
                            <h2>First name: {firstname}</h2>
                            <h2>Last name: {lastname}</h2>
                            <h2>Username: {username}</h2>
                        </div>
                        <button>Update</button>
                    </div>
                </div>
                <div className="phone_address_bio">
                    <div className='pab_data_container'>
                        <p>Phone: {phone}</p>
                        <p>Address: {address}</p>
                        <p>Bio: {bio}</p>
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
        user: state.userReducer.user,
        bio: state.walkerReducer.bio
    };
};

export default connect(mapStateToProps, {
    updateState
})(WalkerSettings);
