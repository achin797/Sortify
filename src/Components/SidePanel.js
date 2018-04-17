import './Styles/SidePanel.css';
import React from 'react';
import SongList from '../Containers/SongList'

class SidePanel extends React.Component {
    render() {
        return (
            <div className="side-panel">
                <SongList/>
            </div>
        );
    }
}

export default SidePanel;