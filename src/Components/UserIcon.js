import './Styles/UserIcon.css';
import React from 'react';

class UserIcon extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert("USER");

    }


    render() {
        return (
            <div className="user-icon header-bar-item" onClick={this.handleClick}>
                <img src={this.props.userData.images[0].url}/>
                <label className="item-description"> {this.props.userData.display_name.split(" ")[0]}</label>
            </div>
        );
    }
}

export default UserIcon;