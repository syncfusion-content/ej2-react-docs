

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
    id: 'node1',
    offsetX: 150,
    offsetY: 150, 
    style: {
        fill: '#26A0DA',
    },
    shape: {
      type: 'UmlClassifier',
      enumerationShape: {
          name: 'AccountType',
          members: [
              {
                  name: 'Checking Account', 
              },
          ]
      },
      classifier: 'Enumeration'
  },
}];

let addButton:any = document.getElementById('addMember');

if (addButton) {
    addButton.addEventListener('click', function() {
      let node = diagramInstance.nodes[0];
      let members = { name: 'Checking new', style: { color: "red", }, isSeparator: true };
      diagramInstance.addChildToUmlNode(node, members, "Member");
    });
}
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


