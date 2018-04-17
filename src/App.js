import React, {Component} from 'react';
import './App.css';

import Canvas from './Components/Canvas';
import HeaderBar from './Components/HeaderBar';
import SidePanel from './Components/SidePanel';
import LoadingScreen from './Containers/LoadingScreen';
import SpotifyService from './Services/SpotifyService';

class App extends Component {


    render() {
        //SpotifyService.setAuthToken("BQAPCEj8wfhw1Tmwbfjq4cW0AWns0oXNpnMNfIdiJyBYVCVNYK60G5vXm2oPRXKEasNQxA3BNyspXmlmhjftQOjZMGuAul14ikmpuCNdlQPCfW_3HFOy-ODoOg6YrcsQPF4JG5IAnQP056AHrd1p5EQyZK8q3SFagU4z3z0mu7f3ytnHf8TTQsbiMGP4kysNicwixpTbI8VCgP3C0dQ_oAYoV-_1QTFp-0x0ZAQ6A24nyFGvZuMlOxIMvdiY0veKShVGNzHuXYVBtF1GKoc")
        //SpotifyService.getUserProfile();

        return (
            <div className={this.props.loading.isLoading ? "App loading" : "App"}>
                <LoadingScreen/>
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
