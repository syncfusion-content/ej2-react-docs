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
        annotations: [{ content: 'Layer 2 Object' }],
    },
];

//method to add layer through run time.
const addLayer = () => {
    /**
   * Add the layers to the existing diagram layer collection
   * newLayer - representing the layer to be added to the diagram.
   * layerObject -  An optional array of objects associated with the layer.
   */
    let newLayer = {
        id: 'newlayer',
        visible: true,
        lock: false,
      };
    let layerObject = [
        {
          id: 'con1',
          type: 'Straight',
          sourceID: 'node1',
          targetID: 'node2',
        },
    ];
    diagramInstance.addLayer(newLayer, layerObject);
  }

// initialize diagram component
function App() {
return (
<div>
<ButtonComponent content="Add Layer" onClick={addLayer} />
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