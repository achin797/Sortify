/**
 * Created by Guilherme on 4/1/18.
 */
import './Styles/CanvasWindow.css';
import React from 'react';

class CanvasWindow extends React.Component {

    render() {
        return (
            <div className="canvas-window">
                <div className="canvas-window-title-area">
                    <label className="canvas-window-title">
                        {this.props.title}
                    </label>
                </div>

                <div className="canvas-window-content-area">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default CanvasWindow;