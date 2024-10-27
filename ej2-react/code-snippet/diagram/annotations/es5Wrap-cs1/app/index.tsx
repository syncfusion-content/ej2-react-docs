

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    NodeModel
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
  id: 'node1',
  // Position of the node
  offsetX: 100,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  //Sets the annotation for the node
  annotations: [
    {
      content: 'Annotation Text WrapWithOverflow',
      // Sets the style for the text wrapping
      style: {
        textWrapping: 'WrapWithOverflow',
      },
    },
  ],
},
{
  id: 'node2',
  // Position of the node
  offsetX: 300,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  //Sets the annotation for the node
  annotations: [
    {
      content: 'Annotation Text Wrap',
      // Sets the style for the text wrapping
      style: {
        textWrapping: 'Wrap',
      },
    },
  ],
},
{
  id: 'node3',
  // Position of the node
  offsetX: 500,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  //Sets the annotation for the node
  annotations: [
    {
      content: 'Annotation Text NoWrap',
      // Sets the style for the text wrapping
      style: {
        textWrapping: 'NoWrap',
      },
    },
  ],
},];
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



