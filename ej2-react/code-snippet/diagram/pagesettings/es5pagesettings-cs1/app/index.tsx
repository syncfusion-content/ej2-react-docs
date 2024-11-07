{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel,
    NodeModel
} from "@syncfusion/ej2-react-diagrams";
let connector: ConnectorModel[] = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
}];
let node: NodeModel[] = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
      content: 'Node1'
    }]
}, {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 350,
    annotations: [{
      content: 'Node3'
    }]
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
      pageSettings={{
        // Sets the Page Break for diagram
        showPageBreaks: true,
        // Defines the background color and image  of diagram
        background: {
          color: 'grey',
        },
        // Sets the width for the Page
        width: 300,
        // Sets the height for the Page
        height: 300,
        // Sets the space to be left between an annotation and its parent node/connector
        margin: {
          left: 10,
          top: 10,
          bottom: 10,
          right: 10
        },
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}