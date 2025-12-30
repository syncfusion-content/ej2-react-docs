

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramContextMenu, Inject,NodeModel } from "@syncfusion/ej2-react-diagrams";

let diagramInstance: DiagramComponent;

let node: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{id: 'label1',content: 'Rectangle1'}],
    }, {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{id: 'label2',content: 'Rectangle2'}],
    }
];

//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="diagram_contextmenu" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} 
        contextMenuSettings={{
            //Enables the context menu
            show: true,
            items: [
                {
                  text: 'Google.com',
                  id: 'google',
                  target: '.e-diagramcontent',
                  url: 'https://www.google.co.in/',
                },
                {
                  text: 'w3schools.com',
                  id: 'W3Schools',
                  target: '.e-diagramcontent',
                  url: 'https://www.w3schools.com/',
                },
                {
                  text: 'stackoverflow.com',
                  id: 'stackoverflow',
                  target: '.e-diagramcontent',
                  url: 'https://stackoverflow.com/',
                },
              ],
            // Hides the default context menu items.
            showCustomMenuOnly: true,
        }}>
    <Inject services={[DiagramContextMenu]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


