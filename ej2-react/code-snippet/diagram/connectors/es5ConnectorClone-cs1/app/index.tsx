import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,ConnectorModel } from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
// Define initial connectors
let connectors: ConnectorModel[]  = [
    {
        id: 'connector1',
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 200, y: 200 }
    }
];
// App component
const App = () => {
    // Function to handle clone button click
    const handleCloneClick = () => {
      diagramInstance.select([diagramInstance.selectedItems.connectors[0]]);
      diagramInstance.copy();
      diagramInstance.paste();
    };
    return (
        <div>
       <button onClick={handleCloneClick}>handleCloneClick</button>
        <DiagramComponent
            id="container"
            ref={(diagram) => (diagramInstance = diagram)}
            width={'100%'}
            height={'600px'}
            connectors={connectors}
        />
        </div>
    ); 
};
// Render the App component
const root = ReactDOM.createRoot(document.getElementById('diagram') );
root.render(<App />);
