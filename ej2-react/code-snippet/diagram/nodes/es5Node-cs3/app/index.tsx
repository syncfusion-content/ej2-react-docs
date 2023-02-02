

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    SnapSettingsModel,
    SnapConstraints,
    UndoRedo,
    GridlinesModel,
    Snapping,
    Inject
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let interval: number[];
interval = [
  1,
  9,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75
];
let gridlines: GridlinesModel = {
  lineColor: 'blue',
  lineDashArray: '2 2',
  lineIntervals: interval
};
let snapSettings: SnapSettingsModel = {
  constraints: SnapConstraints.ShowLines,
  horizontalGridlines: gridlines,
  verticalGridlines: gridlines
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
    // Text(label) added to the node
}];
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
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



