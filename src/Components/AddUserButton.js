import './Styles/AddUserButton.css';
import React from 'react';

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
            <div className="add-user-button header-bar-item" onClick={this.handleClick}>
                {/*TODO: Implement this component*/}
                <label>+</label>
                <label className="item-description"> Add user</label>
            </div>
        );
    }
}

export default AddUserButton;