

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    SnapSettingsModel,
    SnapConstraints,
    Snapping,
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let snapSettings: SnapSettingsModel = {
    // Enable snap to object constraint
    constraints: SnapConstraints.SnapToObject | SnapConstraints.ShowLines,
    // Sets the Snap object distance
    snapObjectDistance: 10,
};
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
 
},
{
  id: 'node2',
  style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
  width: 100,
  height: 100,
  offsetX: 300,
  offsetY: 100,
},
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add node
      nodes={node}
      snapSettings={snapSettings}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



