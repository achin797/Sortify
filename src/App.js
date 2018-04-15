import React, {Component} from 'react';
import './App.css';

import Canvas from './Components/Canvas';
import HeaderBar from './Components/HeaderBar';
import SidePanel from './Components/SidePanel';
import LoadingScreen from './Components/LoadingScreen';
import SpotifyService from './Services/SpotifyService'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    render() {
        SpotifyService.setAuthToken("BQDpLCkBbWrNJ0xdsrPzlYASN18MH6sMaAE8i3sAdReB3QuLB6Td7YiFwEAY5peDc2oKjrn-4Pr5stkIz-8gyindnpxx1NJg8Vk9IXUXKMC2FFMUrwTo3hK6bGzk4LJOJ1eMBhklT_EtJH78X6BPMl-Ap7zfPyWPff4LUDS3q1rk8bVYXQME0Qy6Mv-MhU027YkV8iC_URcQtj769qmvCQDT_kX88mb1pV7GplKxaXiH4o7VaEl49CZyYaoJ1fVZzszjPplrcq-yQPEoNBM")
        //SpotifyService.getUserProfile();

        return (
            <div className={this.state.isLoading ? "App loading" : "App"}>
                <LoadingScreen/>
                <HeaderBar setLoading={(state) => {this.setState({isLoading: state})}}/>
                <div className="app-body">
                    <SidePanel/>
                    <Canvas/>
                </div>
            </div>
        );
    }
}

export default App;
