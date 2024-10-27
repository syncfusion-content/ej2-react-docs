import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent,ConnectorConstraints,ConnectorEditing,Diagram,ConnectorModel,IEditSegmentOptions  } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing)

let diagramInstance:DiagramComponent;
// Define initial connectors
let connectors: ConnectorModel[] = [{
    id: "connector1",
    constraints:ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    // Defines the segment type of the connector
    segments: [{
            type: 'Straight',
            // Defines the point of the segment
            point: {
                x: 100,
                y: 150
            }
        }],
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
    type: 'Straight',
    sourcePoint: {
        x: 150,
        y: 100
    },
    targetPoint: { 
        x: 340,
        y: 200
    }
}];
// App component
const App = () => {
    // Function to handle clone button click
    const segmentEdit = () => {
       let options:IEditSegmentOptions = {}
       options.SegmentEditing = 'Toggle';
       options.point = { x: 220, y: 150 };
       options.connector = diagramInstance.connectors[0];
       options.hitPadding = diagramInstance.connectors[0].hitPadding;
      
       diagramInstance.editSegment(options);
    };
    return (
        <div>
        <button onClick={segmentEdit}>segmentEdit</button>
        <DiagramComponent
            id="container"
            ref={(diagram) => (diagramInstance = diagram)}
            width={'100%'}
            height={'600px'}
            connectors={connectors}
            created={() => {
                diagramInstance.select([diagramInstance.connectors[0]]); 
            }}
        />
        </div>
    ); 
};
// Render the App component
const root = createRoot(document.getElementById('diagram') );
root.render(<App />);