import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance: DiagramComponent ;

let nodes: NodeModel[]= [
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
        offsetY: 130,
        annotations: [{ content: 'Layer 1 Object' }],
    },
    
    {
        id: 'node3',
        width: 100,
        height: 100,
        offsetX: 160,
        offsetY: 360,
        annotations: [{ content: 'Layer 2 Object' }],
    },
];

const cloneLayer = () => {
    /**
   * To Clone the layer
   * Parameter 1 - A string representing the name of the layer to be cloned.
   */
    diagramInstance.cloneLayer('layer1');
}

// initialize diagram component
function App() {
return (
<div>
<ButtonComponent content="cloneLayer" onClick={cloneLayer} />
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