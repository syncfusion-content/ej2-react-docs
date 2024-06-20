{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
//initialize group nodes
var node:NodeModel = [
    { id: "rectangle1", offsetX: 100, offsetY: 100, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle2", offsetX: 200, offsetY: 200, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group', children: ['rectangle1', 'rectangle2'] },
    { id: "rectangle3", offsetX: 400, offsetY: 400, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle4", offsetX: 500, offsetY: 500, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group', children: ['rectangle3', 'rectangle4'], padding: { left: 10, right: 10, top: 10, bottom: 10 } },
];
function App() {
    return (
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'1500px'}
        height={'600px'}
        getNodeDefaults={(node: NodeModel) => {
          node.height = 100;
          node.width = 100;
          node.style.fill = '#6BA5D7';
          node.style.strokeColor = 'white';
          return node;
        }}
        created={() => {
          //Add collection of group nodes
          diagramInstance.addElements(node);
        }}
      />
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('diagram'));
  root.render(<App />);

  {% endraw %}