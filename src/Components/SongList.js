import './Styles/SidePanel.css';
import React from 'react';

class SongList extends React.Component {

    constructor(props) {
        super(props);

        this.makeSongs = this.makeSongs.bind(this)
    }

    makeSongs() {
        //return this.users.map(user => <UserIcon key={user.id} userData={user}/>);

        //item must have: song name, artist, delete from list, move list position, more options
    }

    render() {
        return (
            <div className="song-list">
                    {this.makeSongs()}
            </div>
        );
    }
}

export default SongList;