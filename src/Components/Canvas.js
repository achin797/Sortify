import './Styles/Canvas.css';
import React from 'react';
import DragArea from './DragArea'
import CanvasWindow from './CanvasWindow'
import DesiredProperties from './DesiredProperties'


class Canvas extends React.Component { //TODO Extract the draggable area into its own component inside the canvas

    render() {
        return (
            <div className="canvas">
                {/*TODO: Implement this component*/}

                <DragArea>
                    {/*<div className="sample-element-1"> </div>*/}
                    {/*<div className="sample-element-2" defaultPosition={{x: 200, y: 200}}></div>*/}
                    <CanvasWindow title="Song Features" defaultPosition={{x: 0, y: 0}}>
                        <DesiredProperties/>
                    </CanvasWindow>
                    <CanvasWindow title="Some Other Shit" defaultPosition={{x: 200, y: 0}}>
                        <DesiredProperties/>
                    </CanvasWindow>
                    <CanvasWindow title="Guilherme Lameira de Almeida" defaultPosition={{x: 400, y: 0}}>
                        <DesiredProperties/>
                    </CanvasWindow>
                </DragArea>

            </div>
        );
    }
}

export default Canvas;