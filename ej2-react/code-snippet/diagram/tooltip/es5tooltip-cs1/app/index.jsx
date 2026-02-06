{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, SelectorConstraints } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        id: "node1",
        width: 100,
        height: 100,
        annotations: [{
                id: 'label',
                content: 'Default tooltip disabled',
                offset: {
                    x: 0.5,
                    y: 0.5
                },
                style: {
                    color: 'white',
                },
            }],
        offsetX: 200,
        offsetY: 200,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
       
    }];
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="container" width={'650px'} height={'350px'} 
    selectedItems={{ constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip }}
    //Defines nodes
    nodes={node} 
    //Defines mouse over tooltip
    tooltip={{
            content: 'Nodes',
            position: 'TopLeft',
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}