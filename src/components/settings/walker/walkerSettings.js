import React, { Component } from "react";
import "./walkerSettings.css";
import { connect } from "react-redux";
import { getWalkerInfo, updateState, updateWalker } from '../../../redux/walkerReducer';
import {storage} from './../../../firebase-config';

class WalkerSettings extends Component {
    state = {
        nameEditView: 'closed',
        infoEditView: 'closed',
        bioEditView: 'closed'
    }

    componentDidMount() {
        this.props.getWalkerInfo();
        this.props.updateState({
            profileimg: this.props.walkerInfo.profileimg,
            firstname: this.props.walkerInfo.firstname,
            lastname: this.props.walkerInfo.lastname,
            username: this.props.walkerInfo.username,
            phone: this.props.walkerInfo.phone,
            email: this.props.walkerInfo.email,
            address: this.props.walkerInfo.address,
            city: this.props.walkerInfo.city,
            state: this.props.walkerInfo.state,
            bio: this.props.walkerInfo.experience,
            fifteen: this.props.walkerInfo._15minprice,
            thirty: this.props.walkerInfo._30minprice,
            fortyfive: this.props.walkerInfo._45minprice,
            sixty: this.props.walkerInfo._60minprice
        })
    }

    done = () => {
        const {username, firstname, lastname, email, profileimg, phone, address, city, state, zip, bio, fifteen, thirty, fortyfive, sixty} = this.props
        this.props.updateWalker(
            username,
            firstname,
            lastname,
            email,
            profileimg,
            phone,
            address,
            city,
            state,
            zip,
            bio,
            fifteen,
            thirty,
            fortyfive,
            sixty
        )
        this.props.history.goBack()
    }

    editName = () => {
        this.setState({ nameEditView: 'open' })
    }

    setUpdateName = () => {
        this.setState({ nameEditView: 'closed' })
    }

    editInfo = () => {
        this.setState({ infoEditView: 'open' })
    }

    setUpdateInfo = () => {
        this.setState({ infoEditView: 'closed' })
    }

    editBio = () => {
        this.setState({ bioEditView: 'open' })
    }

    setUpdateBio = () => {
        this.setState({ bioEditView: 'closed' })
    }

    handleImage = e => {
        if(e.target.files[0]){
            const image = (e.target.files[0])
            const uploadTask = storage.ref(`/userProfilePicture/${image.name}`).put(image)
            uploadTask.on("state_changed",
            () => {
                storage.ref('userProfilePicture').child(image.name).getDownloadURL()
                .then(url => {
                    this.props.updateState({profileimg: url})
                })
            })
        }
    }

    render() {
        const {
            firstname,
            lastname,
            address,
            phone,
            city,
            state,
            profileimg,
            username,
            bio,
            email,
            fifteen,
            thirty,
            fortyfive,
            sixty
        } = this.props;
        return (
            <div className="settings_page">
                <button onClick={this.done}>Done</button>
                <div className="pic_name_container">
                    <div className='img_update_container'>
                        <img src={profileimg} alt="profile_pic" />
                        <input type="upload" type='file' name='profileimg' onChange={this.handleImage}/>
                    </div>
                    {this.state.nameEditView === 'closed' ?
                        <div className='name_update_container'>
                            <div className='name_data_container'>
                                <h3>First name:</h3><p>{firstname}</p>
                                <h3>Last name:</h3><p>{lastname}</p>
                                <h3>Username:</h3><p>{username}</p>
                            </div>
                            <button onClick={this.editName}>Edit</button>
                        </div>
                        :
                        this.state.nameEditView === 'open' ?
                            <div className='name_update_container'>
                                <div className='name_data_container'>
                                    <h3>First name:</h3><input type="text" onChange={(e) => this.props.updateState({ firstname: e.target.value })} />
                                    <h3>Last name:</h3><input type="text" onChange={(e) => this.props.updateState({ lastname: e.target.value })} />
                                    <h3>Username:</h3><input type="text" onChange={(e) => this.props.updateState({ username: e.target.value })} />
                                </div>
                                <button onClick={this.setUpdateName}>Update</button>
                            </div>
                            :
                            null
                    }
                </div>
                <div className="phone_address">
                    {this.state.infoEditView === 'closed' ?
                        <>
                            <div className='pab_data_container'>
                                <div className='phone_data'>
                                    <h3>Phone:</h3><p>{phone}</p>
                                </div>
                                <div className='email_data'>
                                    <h3>Email:</h3><p>{email}</p>
                                </div>
                                <div className='address_data'>
                                    <h3>Address:</h3><p>{address}</p>
                                </div>
                                <div className='city_data'>
                                    <h3>City:</h3><p>{city}</p>
                                </div>
                                <div className='state_data'>
                                    <h3>State:</h3><p>{state}</p>
                                </div>
                            </div>
                            <div className='data_update_button_container'>
                                <button onClick={this.editInfo}>Edit</button>
                            </div>
                        </>
                        :
                        this.state.infoEditView === 'open' ?
                            <>
                                <div className='pab_data_container'>
                                    <div className='phone_data'>
                                        <h3>Phone:</h3><input type="number" onChange={(e) => this.props.updateState({ phone: e.target.value })} />
                                    </div>
                                    <div className='email_data'>
                                        <h3>Email:</h3><input type="text" onChange={(e) => this.props.updateState({ email: e.target.value })} />
                                    </div>
                                    <div className='address_data'>
                                        <h3>Address:</h3><input type="text" onChange={(e) => this.props.updateState({ address: e.target.value })} />
                                    </div>
                                    <div className='city_data'>
                                        <h3>City:</h3><input type="text" onChange={e => this.props.updateState({ city: e.target.value })} />
                                    </div>
                                    <div className='state_data'>
                                        <h3>State:</h3><input type="text" onChange={e => this.props.updateState({ state: e.target.value })} />
                                    </div>
                                </div>
                                <div className='data_update_button_container'>
                                    <button onClick={this.setUpdateInfo}>Update</button>
                                </div>
                            </>
                            :
                            null
                    }
                </div>
                <div className='bio_update_container'>
                    {this.state.bioEditView === 'closed' ?
                        <>
                            <div className='bio_data'>
                                <h3>Bio:</h3><p>{bio}</p>
                            </div>
                            <button onClick={this.editBio}>Edit</button>
                        </>
                        :
                        this.state.bioEditView === 'open' ?
                            <>
                                <div className='bio_data'>
                                    <h3>Bio:</h3><textarea onChange={(e) => this.props.updateState({ bio: e.target.value })} cols="30" rows="10"></textarea>
                                </div>
                                <button onClick={this.setUpdateBio}>Update</button>
                            </>
                            :
                            null
                    }
                </div>
                <div className="phone_address">
                    {this.state.infoEditView === 'closed' ?
                        <>
                            <div className='pab_data_container'>
                                <div className='phone_data'>
                                    <h3>15 min walk:</h3><p>{fifteen}</p>
                                </div>
                                <div className='address_data'>
                                    <h3>30 min walk:</h3><p>{thirty}</p>
                                </div>
                                <div className='city_data'>
                                    <h3>45 min walk:</h3><p>{fortyfive}</p>
                                </div>
                                <div className='state_data'>
                                    <h3>60 min walk:</h3><p>{sixty}</p>
                                </div>
                            </div>
                            <div className='data_update_button_container'>
                                <button onClick={this.editInfo}>Edit</button>
                            </div>
                        </>
                        :
                        this.state.infoEditView === 'open' ?
                            <>
                                <div className='pab_data_container'>
                                    <div className='phone_data'>
                                        <h3>15 min walk:</h3><input type="number" onChange={(e) => this.props.updateState({ fifteen: e.target.value })} />
                                    </div>
                                    <div className='address_data'>
                                        <h3>30 min walk:</h3><input type="text" onChange={(e) => this.props.updateState({ thirty: e.target.value })} />
                                    </div>
                                    <div className='city_data'>
                                        <h3>45 min walk:</h3><input type="text" onChange={e => this.props.updateState({ fortyfive: e.target.value })} />
                                    </div>
                                    <div className='state_data'>
                                        <h3>60 min walk:</h3><input type="text" onChange={e => this.props.updateState({ sixty: e.target.value })} />
                                    </div>
                                </div>
                                <div className='data_update_button_container'>
                                    <button onClick={this.setUpdateInfo}>Update</button>
                                </div>
                            </>
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        walkerInfo: state.walkerReducer.walkerInfo,
        firstname: state.walkerReducer.firstname,
        lastname: state.walkerReducer.lastname,
        username: state.walkerReducer.username,
        bio: state.walkerReducer.bio,
        profileimg: state.walkerReducer.profileimg,
        phone: state.walkerReducer.phone,
        email: state.walkerReducer.email,
        address: state.walkerReducer.address,
        city: state.walkerReducer.city,
        state: state.walkerReducer.state,
        zip: state.walkerReducer.zip,
        fifteen: state.walkerReducer.fifteen,
        thirty: state.walkerReducer.thirty,
        fortyfive: state.walkerReducer.fortyfive,
        sixty: state.walkerReducer.sixty
    };
};

export default connect(mapStateToProps, {
    updateState,
    getWalkerInfo,
    updateWalker
})(WalkerSettings);