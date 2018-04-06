import React, {Component} from 'react';
import './App.css';

import Canvas from './Components/Canvas';
import HeaderBar from './Components/HeaderBar';
import SidePanel from './Components/SidePanel';

//import SpotifyService from './Services/SpotifyService'

class App extends Component {
    render() {
        //SpotifyService.setAuthToken(/* Handcode token here */)
        //SpotifyService.getUserSongs();

        return (
            <div className="App">
                <HeaderBar/>
                <div className="app-body">
                    <SidePanel/>
                    <Canvas/>
                </div>
            </div>
        );
    }
}

export default App;
