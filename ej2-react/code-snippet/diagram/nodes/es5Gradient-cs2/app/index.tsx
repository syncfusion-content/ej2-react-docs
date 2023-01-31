

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    GradientModel,
    LinearGradientModel,
    RadialGradientModel,
    NodeConstraints
} from "@syncfusion/ej2-react-diagrams";
let radialGradient: GradientModel | LinearGradientModel | RadialGradientModel;
radialGradient = {
    //Center point of outer circle
    cx: 50,
    cy: 50,
    //Center point of inner circle
    fx: 25,
    fy: 25,
    //Radius of a radial gradient
    r: 50,
    //Sets an array of stop objects
    stops: [{
            color: 'white',
            offset: 0
        },
        {
            color: '#6BA5D7',
            offset: 100
        }
    ],
    type: 'Radial'
};
let node: NodeModel[] = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        gradient: radialGradient
    }
    // Text(label) added to the node
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



