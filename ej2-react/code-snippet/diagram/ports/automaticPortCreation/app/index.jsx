import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeConstraints, DiagramConstraints, SnapConstraints } from "@syncfusion/ej2-react-diagrams";

const nodes = [
  {
    id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: NodeConstraints.Default &
      ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)

  },
  {
    id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: NodeConstraints.Default &
      ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)
  },
];

// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'} height={'500px'}
      nodes={nodes} snapSettings={{ constraints: SnapConstraints.None }}
      constraints={
        DiagramConstraints.Default |
        DiagramConstraints.AutomaticPortCreation
      }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);