import './Styles/LoadingScreen.css';
import React from 'react';

class LoadingScreen extends React.Component {
    render() {
        return (
            <div className="loading-screen">
                <div className="loading-icon">
                    <div className="circle"/>
                    <div className="circle"/>
                    <div className="circle"/>
                    <label className="loading-text">{this.props.loadingMessage}</label>
                </div>

            </div>
        );
    }
}

export default LoadingScreen;