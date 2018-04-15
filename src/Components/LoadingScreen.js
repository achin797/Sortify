import './Styles/LoadingScreen.css';
import React from 'react';

class LoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }

        this.setLoadingState = this.setLoadingState.bind(this);
    }

    setLoadingState(state) {
        this.setState({isLoading: state});
    }



    render() {
        return (
            <div className="loading-screen">
                <div className="loading-icon">
                    <div className="circle"/>
                    <div className="circle"/>
                    <div className="circle"/>
                    <label className="loading-text"> Downloading your Spotify library...</label>
                </div>

            </div>
        );
    }
}

export default LoadingScreen;