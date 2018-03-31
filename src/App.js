import React, {Component} from 'react';
import './App.css';

import Canvas from './Components/Canvas';
import HeaderBar from './Components/HeaderBar';
import SidePanel from './Components/SidePanel';

class App extends Component {
    render() {
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
