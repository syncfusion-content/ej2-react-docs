import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel,
    NodeModel,
    BoundaryConstraints
} from "@syncfusion/ej2-react-diagrams";

let connector: ConnectorModel[] = [{
    id: 'connector1',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 100
    }
}];
let node: NodeModel[] = [{
    id: 'node1',
    width: 150,
    height: 100,
    offsetX: 100,
    offsetY: 100,
}, {
    id: 'node2',
    width: 80,
    height: 130,
    offsetX: 200,
    offsetY: 200,
}, {
    id: 'node3',
    width: 100,
    height: 75,
    offsetX: 300,
    offsetY: 350,
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
      connectors={connector}
      // Defines the pageSettings for the diagram
      pageSettings = {
        {
            // Sets the BoundaryConstraints to page
            boundaryConstraints: 'Page',
            background: {
                color: 'grey'
            },
            width: 400,
            height: 400,
            showPageBreaks: true,
        }
    }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);