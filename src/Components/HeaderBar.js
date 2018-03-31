import './Styles/HeaderBar.css';
import React from 'react';
import AddUserButton from './AddUserButton'

class HeaderBar extends React.Component {

    constructor(props) {
        super(props);

        this.makeUsers = this.makeUsers.bind(this)
    }

    makeUsers() {
        return <label>user 1</label>
    }

    render() {
        return (
            <div className="header-bar">
                {/*TODO: Implement this component*/}

                <AddUserButton/>

                {/*{this.makeUsers()}*/}
            </div>
        );
    }
}

export default HeaderBar;