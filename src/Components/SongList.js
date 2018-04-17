import './Styles/SongList.css';
import React from 'react';
import SpotifyService from "../Services/SpotifyService";

class SongList extends React.Component {

    constructor(props) {
        super(props);

        this.makeSongs = this.makeSongs.bind(this)
    }

    makeSongs() {
        return this.props.songs.map(song => (
            <div key={song.id} className="song-container">
                <div className="song">
                    <label className="song-name">{song.name}</label>
                    <label className="song-artists">{song.artists}</label>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="song-list-container">
                <div className="song-list">
                    {this.makeSongs()}
                </div>
                <div className="song-list-button-container">
                    <div className="song-list-button" onClick={()=>{SpotifyService.playSongs(this.props.songs.map(song=>song.id))}}>
                        <label> Send to Spotify </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default SongList;