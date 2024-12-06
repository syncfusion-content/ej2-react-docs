import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent ,ConnectorConstraints, ConnectorModel} from "@syncfusion/ej2-react-diagrams";

let connectors:ConnectorModel [] = [{
    id: "connector1",
    type: 'Orthogonal',
    segments: [{
        type: 'Orthogonal',
        // Defines the direction for the segment lines
        direction: 'Right',
        // Defines the length for the segment lines
        length: 50
    }],
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
},
{
    id: "connector2",
    type: 'Orthogonal',
    // Defines multile segemnts for the connectors
    segments: [{
            type: 'Orthogonal',
            direction: 'Bottom',
            length: 150
        },
        {
            type: 'Orthogonal',
            direction: 'Right',
            length: 150
        }
    ],
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 200,
    },
    maxSegmentThumb: 3,
    constraints:ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
}];
function App() {
    return (<DiagramComponent id="container" width={'100%'}  connectors={connectors} height={'600px'} 
        >
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);