{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, ConnectorModel, NodeModel } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let colorPickerInstance;
let node: NodeModel = [ {
    id:"node1",
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    fixedUserHandles: [{ offset: { x: 0, y: 0 }, margin: { right: 20 }, width: 50, height: 20, id: 'usercon1' }]
}];
let connectors: ConnectorModel = [{
    id: "connector1",
    sourcePoint: {
        x: 400,
        y: 200
    },
    targetPoint: {
        x: 500,
        y: 300
    }, type: 'Orthogonal',
    fixedUserHandles: [{ offset: 0.5, width: 120, alignment: 'Before', height: 20, id: 'usercon2', displacement: { x: 10, y: 10 } }]

}];
function fixedUserHandleTemplate(props) {
    const { id } = props; 
    {
        return (
            <div style={{ width: '100%', height: '100%' }}>
               {id === 'usercon1' ? (
                <input 
                    id="colorPicker" 
                    ref={colorPicker => (colorPickerInstance = colorPicker)} 
                    type="color" 
                    defaultValue="#008000" 
                    onChange={handleColorChange}
                />
            ) : id === 'usercon2' ? (
                <input 
                    type="button" 
                    value="FixedUserHandleTemplate" 
                    style={{ width:'width', color: 'red' }} // Apply width and color
                />
            ) : null}
            </div>
        );
    }
}
function handleColorChange()
{
    let currentColor = colorPickerInstance.value;
    diagramInstance.nodes[0].style.fill = currentColor;
}
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
      connectors={connectors}
      ref={diagram => (diagramInstance = diagram)}  fixedUserHandleTemplate={fixedUserHandleTemplate.bind(this)}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}

