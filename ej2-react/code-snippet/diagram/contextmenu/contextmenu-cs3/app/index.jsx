import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramContextMenu, Inject } from "@syncfusion/ej2-react-diagrams";

let diagramInstance;

let node = [{
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

let connectors = [
    {
      id: 'connector1',
      sourceID: 'node1',
      targetID: 'node2',
    },
  ];

//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="diagram_contextmenu" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} connectors={connectors}
        contextMenuSettings={{
            //Enables the context menu
            show: true,
            items: [
                {
                  text: 'Change fill',
                  id: 'applyFill',
                  target: '.e-diagramcontent',
                  iconCss: 'e-icons e-paint-bucket',
                },
                {
                  text: 'Change stroke',
                  id: 'applyStroke',
                  target: '.e-diagramcontent',
                  iconCss: 'e-icons e-edit',
                },
                {
                  text: 'Select All',
                  id: 'selectAll',
                  target: '.e-diagramcontent',
                },
              ],
            // Hides the default context menu items
            showCustomMenuOnly: true,
        }}  

        contextMenuOpen= {(args) =>{

            let hiddenItems = [];
            let selectedNode = diagramInstance.selectedItems.nodes[0];
            let selectedConnector = diagramInstance.selectedItems.connectors[0];
            if (selectedNode || selectedConnector) {
                hiddenItems.push('selectAll');
            } else {
                hiddenItems = ['applyFill', 'applyStroke'];
            }
            args.hiddenItems = hiddenItems;

        }}

        contextMenuClick= {(args) => {
            let selectedNode = diagramInstance.selectedItems.nodes[0];
            let selectedConnector = diagramInstance.selectedItems.connectors[0];
            if (selectedNode || selectedConnector) {
              if (selectedNode) {
                if (args.item.id === 'applyFill') {
                  selectedNode.style.fill =
                    selectedNode.style.fill === '#6BA5D7' ? 'green' : '#6BA5D7';
                } else if (args.item.id === 'applyStroke') {
                  selectedNode.style.strokeColor =
                    selectedNode.style.strokeColor === 'black' ? 'yellow' : 'black';
                }
              }
              if (selectedConnector) {
                if (args.item.id === 'applyFill') {
                  selectedConnector.targetDecorator.style.fill =
                    selectedConnector.targetDecorator.style.fill === 'yellow'
                      ? 'black'
                      : 'yellow';
                }
                selectedConnector.style.strokeColor =
                  selectedConnector.style.strokeColor === 'black'
                    ? 'yellow'
                    : 'black';
              }
            } else {
                diagramInstance.selectAll();
            }
        }}>
    <Inject services={[DiagramContextMenu]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);