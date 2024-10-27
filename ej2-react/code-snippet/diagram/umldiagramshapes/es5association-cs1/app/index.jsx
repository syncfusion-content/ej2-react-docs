import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
// A node is created and stored in nodes array.
let connector = [{
        id: "connector",
        //Define connector start and end points
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 300, y: 300 },
        type: "Straight",
        shape: {
            type: "UmlClassifier",
            relationship: "Association",
            //Define type of association
            association: "BiDirectional"
        }
    },
    {
        id: 'connector2',
        //Define connector start and end points
        sourcePoint: { x: 200, y: 100 },
        targetPoint: { x: 400, y: 300 },
        type: 'Straight',
        shape: {
          type: 'UmlClassifier',
          relationship: 'Association',
          associationType: 'BiDirectional',
        },
      }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add connector
    connectors={connector}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
