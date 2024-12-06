import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    Inject,
    ConnectorBridging,
    DiagramConstraints,
    ConnectorModel,
    NodeModel
} from "@syncfusion/ej2-react-diagrams";
let node1: NodeModel[] = [{
    id: 'Transaction',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    },
    annotations: [{
        id: 'label1',
        content: 'Start Transaction',
        offset: {
            x: 0.5,
            y: 0.5
        }
    }],
},
{
    id: 'Verification',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 250,
    shape: {
        type: 'Flow',
        shape: 'Process'
    },
    annotations: [{
        id: 'label2',
        content: 'Verification',
        offset: {
            x: 0.5,
            y: 0.5
        }
    }]
}];
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourceID: 'Transaction',
    targetID: 'Verification'
},
{
    id: 'connector2',
    type: 'Straight',
    sourcePoint: {
        x: 200,
        y: 130
    },
    targetPoint: {
        x: 400,
        y: 130
    },
    bridgeSpace: 20,
},
{
    id: 'connector3',
    type: 'Straight',
    sourcePoint: {
        x: 200,
        y: 170
    },
    targetPoint: {
        x: 400,
        y: 170
    }
}];
// Enables bridging for every connector added in the model
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      getNodeDefaults={(node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
      nodes={node1}
      connectors={connectors}
      height={'600px'}
      // Enables the bridging constraints for the connector
      constraints={DiagramConstraints.Default | DiagramConstraints.Bridging}
    >
      <Inject services={[ConnectorBridging]} />{' '}
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
