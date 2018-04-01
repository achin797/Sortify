import './Styles/Canvas.css';
import React from 'react';
import Draggable from 'react-draggable';

class Canvas extends React.Component { //TODO Extract the draggable area into its own component inside the canvas

    constructor(props) {
        super(props);
        this.state = {
            frontElementKey: 2
        };

        this.makeDraggable = this.makeDraggable.bind(this);
        this.makeAllDraggable = this.makeAllDraggable.bind(this);
        this.bringToFront = this.bringToFront.bind(this);
    }

    bringToFront(key) {
        console.log(key)
        this.setState({
            frontElementKey: key
        });

    }

    makeDraggable(component) {
        return <Draggable
            bounds="parent"
            handle=".draggable-element"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            onStart={() => {
                this.bringToFront(component.key);
            }}>
            {component}
        </Draggable>
    }

    makeAllDraggable(components) {
        return components.map(component => this.makeDraggable(component))
    }

    render() {

        let input = [<div className="aaaaaa"></div>, <div className="bbbbb"></div>]; //TODO replace this by props

        let elements = [];

        let i = 0;
        for (let p in input) {
            elements.push(
                <div
                    className={(this.state.frontElementKey == i) ? "draggable-element toFront" : "draggable-element"}
                    key={i}>
                    {input[i]}
                </div>
            );
            i++;
        }


        return (
            <div className="canvas">
                {/*TODO: Implement this component*/}

                <div className="canvas-drag-area">

                    {this.makeAllDraggable(elements)}

                </div>

            </div>
        );
    }
}

export default Canvas;