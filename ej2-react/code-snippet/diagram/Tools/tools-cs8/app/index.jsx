import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    DiagramTools,
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
       id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
        },
        {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 140,
        annotations: [{
            id: 'label2',
            content: 'End'
        }],
        shape: {
            type: 'Flow',
            shape: 'Process'
        },
        annotations: [{
            content: 'var i = 0;'
        }]
    }
];
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
    // ID of the source and target nodes
    sourceID: "Start",
    targetID: "Init",
    connectorSpacing: 7,
    type: 'Orthogonal'
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      nodes={nodes}
      connectors={connectors}
      tool={DiagramTools.DrawOnce | DiagramTools.ZoomPan}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);