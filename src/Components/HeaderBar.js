import './Styles/HeaderBar.css';
import React from 'react';
import Users from '../Containers/Users'

class HeaderBar extends React.Component {

    render() {
        return (
            <div className="header-bar">
                <Users/>
            </div>
        );
    }
}

export default HeaderBar;