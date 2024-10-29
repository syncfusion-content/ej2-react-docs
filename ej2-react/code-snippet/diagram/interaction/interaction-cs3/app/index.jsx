import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, } from "@syncfusion/ej2-react-diagrams";
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        }
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node} selectedItems={{
            handleSize: 40,
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);