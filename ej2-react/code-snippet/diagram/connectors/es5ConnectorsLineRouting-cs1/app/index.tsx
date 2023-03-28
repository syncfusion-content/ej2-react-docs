{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
   Diagram, DiagramComponent, NodeModel, SnapConstraints, LineRouting, DiagramConstraints, NodeModel, ConnectorModel, ConnectorConstraints
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(LineRouting);
/**
 * Diagram Default sample
 */
//Initializes the nodes for the diagram
let nodes = [
 { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
  { id: 'shape2', offsetX: 300, offsetY: 300, width: 120, height: 50 },
  { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 }
];
//Initializes the connector for the diagram
let connectors = [
  { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal' }
];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'700px'}
      nodes={nodes}
      connectors={connectors} //Sets the default values of a node
      constraints={DiagramConstraints.Default | DiagramConstraints.LineRouting}
      getNodeDefaults={(node) => {
        node = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
        return node;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



{% endraw %}