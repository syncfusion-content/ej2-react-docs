

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    SnapSettingsModel,
    SnapConstraints,
    GridlinesModel,
    Snapping,
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let interval: number[];
// Sets the lineIntervals of Gridlines
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
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      snapSettings={snapSettings}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



