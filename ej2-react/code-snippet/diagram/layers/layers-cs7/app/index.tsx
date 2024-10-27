import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance: DiagramComponent;

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
        offsetX: 130,
        offsetY: 130,
        annotations: [{ content: 'Layer 2 Object' }],
    },
    {
        id: 'node3',
        width: 100,
        height: 100,
        offsetX: 160,
        offsetY: 160,
        annotations: [{ content: 'Layer 3 Object' }],
    },
];

const bringLayerForward = () => {
    /**
     * Move the layer forward
     * Parameter 1 -A string representing the id of the layer to be moved forward.
     */
    diagramInstance.bringLayerForward('layer1');
}

const sendLayerBackward = () => {
    /**
     * Move the layer Backward
     * Parameter 1 - A string representing the id of the layer to be  moved backward.
     */
    diagramInstance.sendLayerBackward('layer1');
}

// initialize diagram component
function App() {
return (
<div>
<ButtonComponent content="bringLayerForward" onClick={bringLayerForward} />
<ButtonComponent content="sendLayerBackward" onClick={sendLayerBackward} />
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
                objects: ['node1'],
            },
            {
                id: 'layer2',
                objects: ['node2'],
            },
            {
                id: 'layer3',
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