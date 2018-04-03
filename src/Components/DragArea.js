/**
 * Created by Guilherme on 4/1/18.
 */
import './Styles/DragArea.css';
import React from 'react';
import Draggable from 'react-draggable';

class DragArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frontElementKey: null
        };
        this.makeDraggable = this.makeDraggable.bind(this);
        this.makeAllDraggable = this.makeAllDraggable.bind(this);
        this.bringToFront = this.bringToFront.bind(this);
    }

    bringToFront(key) {
        this.setState({
            frontElementKey: key
        });

    }

    makeDraggable(component) {
        console.log(component)
        return <Draggable
            bounds="parent"
            handle=".draggable-element"
            defaultPosition={component.props.defaultPosition}
            position={null}
            grid={[1, 1]}
            onMouseDown={() => {
                this.bringToFront(component.key);
            }}>
            {component}
        </Draggable>
    }

    makeAllDraggable(components) {
        return components.map(component => this.makeDraggable(component))
    }

    render() {
        const elements = [];
        let i = 0;
        for (let component of this.props.children) {
            elements.push(
                <div
                    className={(this.state.frontElementKey == i) ? "draggable-element toFront" : "draggable-element"}
                    key={i} defaultPosition={component.props.defaultPosition ? component.props.defaultPosition : {x: 0, y: 0}}>
                    {component}
                </div>
            );
            i++;
        }

        return (
            <div className="drag-area">
                {this.makeAllDraggable(elements)}
            </div>
        );
    }
}

export default DragArea;