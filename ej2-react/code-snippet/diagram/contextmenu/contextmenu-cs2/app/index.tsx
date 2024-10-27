import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramContextMenu, Inject, NodeModel } from "@syncfusion/ej2-react-diagrams";
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

let diagramInstance: DiagramComponent ;

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
                  // Text to be displayed
                  text: 'Fill',
                  items: [
                    { id: 'red', text: 'Red' },
                    { id: 'yellow', text: 'Yellow' },
                    { id: 'green', text: 'Green' },
                    { id: 'blue', text: 'Blue' },
                  ],
                  //Sets the id for the item
                  id: 'fill',
                  target: '.e-elementcontent',
                  // Sets the css icons for the item
                  iconCss: 'e-icons e-paint-bucket',
                },
                {
                  text: 'Annotation color',
                  id: 'annotationColor',
                  items: [
                    { id: 'pink', text: 'Pink' },
                    { id: 'orange', text: 'Orange' },
                    { id: 'violet', text: 'Violet' },
                    { id: 'brown', text: 'Brown' },
                  ],
                  target: '.e-elementcontent',
                  iconCss: 'e-icons e-font-color',
                },
                {
                  text: 'Clone',
                  id: 'clone',
                  target: '.e-elementcontent',
                  iconCss: 'e-icons e-copy',
                },
              ],
            // Hides the default context menu items
            showCustomMenuOnly: true,
        }}  

        contextMenuClick={(args: MenuEventArgs) => {
            let selectedNode = diagramInstance.selectedItems.nodes[0];
            if (selectedNode && args.item.id !== 'fill' && args.item.id !== 'annotationColor') {
                if (
                    args.item.text === 'Red' ||
                    args.item.text === 'Blue' ||
                    args.item.text === 'Yellow' ||
                    args.item.text === 'Green'
                ) {
                    selectedNode.style.fill = args.item.text;
                    diagramInstance.dataBind();
                } else if (
                    args.item.text === 'Pink' ||
                    args.item.text === 'Violet' ||
                    args.item.text === 'Orange' ||
                    args.item.text === 'Brown'
                ) {
                    selectedNode.annotations[0].style.fill = args.item.text;
                    diagramInstance.dataBind();
                } else {
                    diagramInstance.copy();
                    diagramInstance.paste();
                }
            }
        }}>
    <Inject services={[DiagramContextMenu]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
