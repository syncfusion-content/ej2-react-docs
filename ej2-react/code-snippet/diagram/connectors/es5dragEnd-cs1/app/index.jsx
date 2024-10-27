import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let connectors = [{
        // Name of the connector
        id: "connector1",
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        },

    }];
function App() {
    const sourcePoint = () => {
        let connector = diagramInstance.connectors[0];
        connector.sourcePoint = {x:300,y:100};
        diagramInstance.dataBind();
    }
    const targetPoint = () => {
        let connector = diagramInstance.connectors[0];
        connector.targetPoint = {x:300,y:200};
        diagramInstance.dataBind();
    }
    const dragSourceEnd = () => {
          /**
     * parameter 1 - connector whose source point needs to be moved.
     * parameter 2 - A number representing the horizontal distance by which the source point should be moved.
     * parameter 3 - A number representing the vertical distance by which the source point should be moved.
     */
           diagramInstance.dragSourceEnd(diagramInstance.connectors[0], 50, 50);
    }
    const dragTargetEnd = () => {
        /**
     * parameter 1 - connector whose target point needs to be moved.
     * parameter 2 - A number representing the horizontal distance by which the target point should be moved.
     * parameter 3 - A number representing the vertical distance by which the target point should be moved.
     */
         diagramInstance.dragTargetEnd(diagramInstance.connectors[0], 50, 50);
    }
    return (
    <div>
         <button onClick={sourcePoint}>sourcePoint</button>
         <button onClick={targetPoint}>targetPoint</button>
         <button onClick={dragSourceEnd}>dragSourceEnd</button>
         <button onClick={dragTargetEnd}>dragTargetEnd</button>
    <DiagramComponent id="container" width={'100%'} height={'600px'} 
    ref={(diagram) => (diagramInstance = diagram)}
    connectors={connectors}/>
     </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
