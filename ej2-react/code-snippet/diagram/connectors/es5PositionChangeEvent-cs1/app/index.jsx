import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let connectors = [{
        // Name of the connector
        id: "connector1",
        // Sets source and target points
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
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}
        positionChange={
            (args) =>{
                if (args.state === 'Completed') {
                    console.log('positionChange');
                    //Customize
                }
            }
        }
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
