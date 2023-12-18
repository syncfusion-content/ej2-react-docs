{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
let node: NodeModel = {
  id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
};
let node2: NodeModel = {
  id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
};
let group: NodeModel = {
  id: 'group1', children: ['node1', 'node2']
};
let node3: NodeModel = {
  id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
};
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'1500px'}
      height={'600px'}
      nodes={[node,node2,node3,group]}
      created={() => {
        //To Add child to specifc group at Runtime
        diagramInstance.addChildToGroup(group, 'node3');
        //To remove the specific children from group at runtime
        diagramInstance.removeChildFromGroup(group, 'node3');
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


{% endraw %}