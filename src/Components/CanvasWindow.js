/**
 * Created by Guilherme on 4/1/18.
 */
import './Styles/CanvasWindow.css';
import React from 'react';

class CanvasWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMinified: (this.props.defaultMinified) !== undefined ? this.props.defaultMinified : true
        }

        this.toggleMinified = this.toggleMinified.bind(this);
    }

    toggleMinified() {
        this.setState({isMinified: !this.state.isMinified})
    }

    render() {
        const className = this.state.isMinified ? "canvas-window minified" : "canvas-window";
        return (
            <div className={className}>
                {(this.props.title) ?
                    (
                        <div className="canvas-window-title-area">
                            <label className="canvas-window-title" onDoubleClick={this.toggleMinified}>
                                {this.props.title}
                            </label>
                        </div>
                    ) : null
                }

                <div className="canvas-window-content-area">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default CanvasWindow;