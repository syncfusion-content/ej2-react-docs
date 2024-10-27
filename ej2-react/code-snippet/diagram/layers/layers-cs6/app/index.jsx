import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance;

let nodes= [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: 'Layer 1 Object' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{ content: 'Layer 1 Object' }],
    },
    {
        id: 'node3',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 300,
        annotations: [{ content: 'Layer 2 Object' }],
    },
];

const moveObjects = () => {
    /**
   * Move objects from one layer to another layer
   * Parameter 1 - An array of object IDs represented as strings to be moved
   * parameter 2 -  The ID of the target layer to which the objects should be moved.
   */
    diagramInstance.moveObjects(['node1'], 'layer2');
}

// initialize diagram component
function App() {
return (
<div>
<ButtonComponent content="Move Objects" onClick={moveObjects} />
<DiagramComponent
  id="container"
  ref={(diagram) => (diagramInstance = diagram)}
  width={'100%'}
  height={'600px'}
  nodes={nodes}
  // Add layer
  layers = {
        [
            {
                id: 'layer1',
                objects: ['node1','node2'],
            },
            {
                id: 'layer2',
                objects: ['node3'],
            },
        ]
    }
/>
</div>
);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);