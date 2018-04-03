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
            activeElementKey: null,
            zIndexOrder: []
        };
        this.makeDraggable = this.makeDraggable.bind(this);
        this.makeAllDraggable = this.makeAllDraggable.bind(this);
        this.bringToFront = this.bringToFront.bind(this);
    }

    bringToFront(key) {
        let zIndexOrder = this.state.zIndexOrder;
        let currentIndex = zIndexOrder.indexOf(key);
        if (currentIndex !== -1) {
            zIndexOrder.splice(currentIndex, 1);
        }
        zIndexOrder.unshift(key);
        this.setState({
            activeElementKey: key,
            zIndexOrder: zIndexOrder
        });
    }

    makeDraggable(component) {
        return <Draggable
            bounds="parent"
            handle=".draggable-element"
            defaultPosition={component.props.defaultPosition}
            position={null}
            grid={[1, 1]}
            onMouseDown={(event) => {
                event.stopPropagation();
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
            let zIndexOrderIndex = this.state.zIndexOrder.indexOf(String(i));
            const zIndex = (zIndexOrderIndex !== -1) ? 1000 - zIndexOrderIndex : null;
            elements.push(
                <div
                    className={(this.state.activeElementKey == i) ? "draggable-element active-element" : "draggable-element"}
                    key={i} style={{zIndex}}
                    defaultPosition={component.props.defaultPosition ? component.props.defaultPosition : {x: 0, y: 0}}>
                    {component}
                </div>
            );
            i++;
        }

        return (
            <div className="drag-area" onMouseDown={() => {
                this.setState({activeElementKey: null});
            }}>
                {this.makeAllDraggable(elements)}
            </div>
        );
    }
}

export default DragArea;