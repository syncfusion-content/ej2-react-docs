import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramConstraints, NodeConstraints } from "@syncfusion/ej2-react-diagrams";
let node = [{
        id: "node1",
        width: 100,
        height: 100,
        annotations: [{
                id: 'label',
                content: 'Rectangle',
                offset: {
                    x: 0.5,
                    y: 0.5
                },
                style: {
                    color: 'white'
                },
            }],
        offsetX: 200,
        offsetY: 200,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            content: 'Node1',
            position: 'BottomCenter',
            relativeMode: 'Object',
             //Hide tip pointer
             showTipPointer: false,
        },
    }];
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="container" width={'650px'} height={'350px'} constraints={DiagramConstraints.Default | DiagramConstraints.Tooltip} 
    //Defines nodes
    nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
