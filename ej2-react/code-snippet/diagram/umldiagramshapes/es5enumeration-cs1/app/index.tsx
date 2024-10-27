

import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,NodeModel,UmlClassifierShapeModel } from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    id: 'node',
        offsetX: 200,
        offsetY: 200,
        style: {
            fill: '#26A0DA',
          },
        shape: {
            type: 'UmlClassifier',
            enumerationShape: {
                name: 'AccountType',
                members: [
                    {
                        name: 'Checking Account', style: {}
                    },
                    {
                        name: 'Savings Account'
                    },
                    {
                        name: 'Credit Account'
                    }
                ]
            },
            classifier: 'Enumeration'
    } as UmlClassifierShapeModel
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
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


