import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    Inject,
    LineRouting,
    DiagramConstraints,
    ConnectorModel,
    NodeModel,
} from "@syncfusion/ej2-react-diagrams";
//Initializes the nodes for the diagram
let nodes:NodeModel[] = [
  { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
  { id: 'shape2', offsetX: 300, offsetY: 300, width: 120, height: 50 },
  { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 }
];
//Initializes the connector for the diagram
let connectors:ConnectorModel[] = [
  { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal' }
];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'700px'}
      nodes={nodes}
      connectors={connectors}
      constraints={DiagramConstraints.Default | DiagramConstraints.LineRouting}
      getNodeDefaults={(node) => {
        node = { style: { strokeColor: '#65B091', fill: '#65B091' } };
        return node;
      }}
    >
      <Inject services={[LineRouting]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);