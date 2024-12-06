import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramConstraints, NodeConstraints,NodeModel } from "@syncfusion/ej2-react-diagrams";
let node: NodeModel[] = [{
        id: "node1",
        width: 100,
        height: 100,
        annotations: [{
                content: 'Rectangle',
            }],
        offsetX: 250,
        offsetY: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            content: 'Node1',
            position: 'BottomCenter',
            relativeMode: 'Object',
            //Hide tip pointer
            showTipPointer: false,
        },
    },{
        id: "node2",
        width: 100,
        height: 100,
        annotations: [{
                content: 'Rectangle',
            }],
        offsetX:100,
        offsetY: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            content: 'Node1',
            position: 'BottomCenter',
            relativeMode: 'Object',
            //Hide tip pointer
            showTipPointer: true,
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
