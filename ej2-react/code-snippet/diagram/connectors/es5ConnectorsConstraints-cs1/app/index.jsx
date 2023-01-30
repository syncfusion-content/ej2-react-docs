import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";
let connectors = [{
        id: "connector1",
        // Disables selection constraints
        constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
        type: 'Straight',
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        }
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'700px'} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
