import './Styles/Users.css';
import React from 'react';


class Users extends React.Component {

    constructor(props) {
        super(props);
        this.makeAddUserButton = this.makeAddUserButton.bind(this);
        this.makeUserIcon = this.makeUserIcon.bind(this);
    }

    makeAddUserButton() {
        return (
            <div className="add-user-button header-bar-item" onClick={this.props.addUser}>
                <label>+</label>
            </div>
        )
    }

    makeUserIcon({id, display_name, images}) {
        return (
            <div className="user-icon header-bar-item" key={id} onClick={() => {this.props.removeUser(id)}}>
                <img src={images[0].url} alt=""/>
                <label className="item-description"> {display_name.split(" ")[0]}</label>
            </div>
        );
    }

    render() {
        return (
            <div className="users-container">
                {this.makeAddUserButton()}
                {this.props.users.map(this.makeUserIcon)}
            </div>
        );
    }
}

export default Users;