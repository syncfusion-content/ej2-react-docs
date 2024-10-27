import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, DiagramContextMenu } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;

let connector = [{
        id: 'connector1',
        sourceID: 'node1',
        targetID: 'node2',
  
}];

let node = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ id: 'label1', content: 'Rectangle1' }]
    }, {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{id: 'label2', content: 'Rectangle2'}]
}];

//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="diagram_contextmenu" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} connectors={connector} contextMenuSettings={{
            //Enables the context menu
            show: true,
            items: [
                {
                  text: 'menu item 1',
                  id: 'item1',
                },
                {
                  text: 'menu item 2',
                  id: 'item2',
                },
              ],
            // Hides the default context menu items
            showCustomMenuOnly: true,
    }} 
    contextMenuBeforeItemRender={(args) => {
        //Triggers when the menu is openned
        console.log('context menu before item render');
    }}
    contextMenuOpen={(args) => {
        //Triggers when the menu is openned
        console.log('context menu openned');
    }}
    contextMenuClick={(args) => {
       //Triggers when the item is clicked
       console.log('context menu clicked');
 
    }}>
    <Inject services={[DiagramContextMenu]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);