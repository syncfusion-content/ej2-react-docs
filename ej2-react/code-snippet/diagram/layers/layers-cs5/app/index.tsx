import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance: DiagramComponent;

let nodes: NodeModel[] = [
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
        annotations: [{ content: 'Layer 2 Object' }],
    },
];

//Method to remove layer through run time
const removeLayer = () => {
    /**
     * Remove the layer from the existing diagram layer collection
     * layerId - representing the id of the layer to be removed from the diagram.
     */
    diagramInstance.removeLayer('layer1');
}

// initialize diagram component
function App() {
return (
<div>
<ButtonComponent content="Remove Layer" onClick={removeLayer} />
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
        ]
    }
/>

</div>
);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);