

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    SnapSettingsModel,
    SnapConstraints,
} from "@syncfusion/ej2-react-diagrams";
// Display both Horizontal and Vertical gridlines
let snapSettings: SnapSettingsModel = {
  constraints: SnapConstraints.ShowLines,
};
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      snapSettings={snapSettings}
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



