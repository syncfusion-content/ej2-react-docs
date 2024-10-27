import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        id: 'node1',
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the node
        annotations: [{
            content: 'Annotation visibility true',
            style: {
              color: 'blue',
              bold: true,
              italic: true,
              fontSize: 15,
              fontFamily: 'TimesNewRoman',
              fill: 'orange',
              opacity: 0.6,
            },
            visibility: true,
          },
          {
            content: 'Annotation visibility false',
            offset: { x: 0.5, y: 1 },
            style: {
              color: 'blue',
              bold: true,
              italic: true,
              fontSize: 15,
              fontFamily: 'TimesNewRoman',
              fill: 'orange',
              opacity: 0.6,
            },
            visibility: false,
          }]
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
