

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    DiagramConstraints,
    AnnotationConstraints,
    NodeConstraints
} from "@syncfusion/ej2-react-diagrams";
import {
    NodeAnimationSettings
} from '@syncfusion/ej2-navigations';
// A node is created and stored in nodes array.
let node: NodeModel[] = [ {
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    annotations: [{
            id: 'label1',
            content: 'Rectangle',
            tooltip: {
                content: 'Rectangle',
                position: 'TopRight',
                relativeMode: 'Object',
            },
            constraints: AnnotationConstraints.Tooltip,
        }],
}];
//Initializes the Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'650px'}
      height={'350px'}
      //Defines nodes
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



