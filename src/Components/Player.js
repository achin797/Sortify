import './Styles/Player.css';
import React from 'react';
import SpotifyService from '../Services/SpotifyService.js'

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.spotifyService = new SpotifyService();
        this.state = {
            isPlaying: false
        }

        this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    }

    handlePlayPauseClick() {
        if (this.state.isPlaying) {
            this.spotifyService.pause();
        } else {
            this.spotifyService.play(["3n69hLUdIsSa1WlRmjMZlW", "1o22EcqsCANhwYdaNOSdwS", "3n69hLUdIsSa1WlRmjMZlW"]);
        }

        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }


    render() {
        return (
            <div className="player">

                <p className="previous" onMouseDown={this.spotifyService.previous}> ◀◀ </p>
                <p className="play-pause" onMouseDown={this.handlePlayPauseClick}> {this.state.isPlaying ? "❚❚" : "►"} </p>
                <p className="next" onMouseDown={this.spotifyService.next}> ►► </p>

            </div>
        );
    }
}

export default Player;