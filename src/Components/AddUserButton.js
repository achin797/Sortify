import './Styles/AddUserButton.css';
import React from 'react';
import SpotifyService from '../Services/SpotifyService'
import SortifyManager from '../SortifyManager'


class AddUserButton extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("add the user");
    }


    render() {
        return (
            <div className="add-user-button header-bar-item" onClick={() => {
                this.props.setLoading(true);
                Promise.all([SpotifyService.getUserProfile(), SpotifyService.getUserSongs()]).then(([user, songs]) => {
                    const sortifyManager = new SortifyManager();
                    sortifyManager.songs = songs;
                    sortifyManager.user = user;
                    this.props.setLoading(false);
                    this.props.updateUser();
                    console.log(new SortifyManager())
                }).catch(() => {
                    this.props.setLoading(false);
                })
            }}>
                {/*TODO: Implement this component*/}
                <label>+</label>
                {/*<label className="item-description"> Add us</label>*/}
            </div>
        );
    }
}

export default AddUserButton;