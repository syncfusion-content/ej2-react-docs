{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createElement } from '@syncfusion/ej2-base';
import { DiagramComponent, Inject, DiagramContextMenu } from "@syncfusion/ej2-react-diagrams";

let diagramInstance;

//Initializes the nodes
let node = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{id: 'label1', content: 'Rectangle1' }]
    }, {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{id: 'label2',content: 'Rectangle2'}]
    }];
    
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="diagram_contextmenu" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} 
    contextMenuSettings={{
        //Enables the context menu
        show: true,
        items: [
            {
              text: 'Cut',
              id: 'Cut',
              target: '.e-diagramcontent',
              iconCss: 'e-cut e-icons',
            },
            {
              text: 'Copy',
              id: 'Copy',
              target: '.e-diagramcontent',
              iconCss: 'e-icons e-copy',
            },
            {
              text: 'Paste',
              id: 'Paste',
              target: '.e-diagramcontent',
              iconCss: 'e-icons e-paste',
            },
          ],
        // Hides the default context menu items
        showCustomMenuOnly: true,
    }}  
    contextMenuBeforeItemRender= {(args) =>{
        // To render template in li.
        let shortCutSpan = createElement('span');
        let text = args.item.text;
        let shortCutText =
          text === 'Cut' ? 'Ctrl + X' : text === 'Copy' ? 'Ctrl + C' : 'Ctrl + V';
        shortCutSpan.textContent = shortCutText;
        //Added CSS styles for the class shortcut to customize its position and appearance
        shortCutSpan.setAttribute('class', 'shortcut');
        args.element.appendChild(shortCutSpan);
    }}

    contextMenuClick={(args) =>{
        let selectedNode = diagramInstance.selectedItems.nodes[0];
        if (selectedNode) {
          if (args.item.text === 'Cut') {
            diagramInstance.cut();
           } else if (args.item.text === 'Copy') {
            diagramInstance.copy();
           }
        }
        if (args.item.text === 'Paste') {
            diagramInstance.paste();
        }
    }}>

    <Inject services={[DiagramContextMenu]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}