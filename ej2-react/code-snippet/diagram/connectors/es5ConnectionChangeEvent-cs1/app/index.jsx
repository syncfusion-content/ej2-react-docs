import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let nodes = [
    {
        id: 'node1',
        offsetX: 200,
        offsetY: 200,
        width: 120,
        height: 60,
        style: { fill: 'skyblue' },
    },
    {
        id: 'node2',
        offsetX: 500,
        offsetY: 200,
        width: 120,
        height: 60,
        style: { fill: 'skyblue' },
    },
];
let connectors = [{
    // Name of the connector
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
}];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={nodes} connectors={connectors}
        connectionChange={
            (args) => {
                if (args.state === 'Changed') {
                    console.log('connectionChange');
                    //Customize
                }
            }
        }
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
