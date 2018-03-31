import React, {Component} from 'react';
import './App.css';

import Canvas from './components/Canvas';
import HeaderBar from './components/HeaderBar';
import SidePanel from './components/SidePanel';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderBar/>
                <div>
                    <Canvas/>
                    <SidePanel/>
                </div>
            </div>
        );
    }
}

export default App;
