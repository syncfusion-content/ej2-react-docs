{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    Inject,
    DiagramContextMenu,
    DiagramBeforeMenuOpenEventArgs,
    ConnectorModel,
    NodeModel
} from "@syncfusion/ej2-react-diagrams";
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

let diagramInstance: DiagramComponent;

//Initializes the connector
let connector: ConnectorModel[] = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    style: {
        strokeColor : '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth :  2,
    },
    targetDecorator: {
            style: {
                fill : '#6BA5D7',
                strokeColor :   '#6BA5D7'
            }
        }
}];

//Initializes the nodes
let node: NodeModel[] = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
}, {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
}];
//Initializes the Diagram component
function App() {
  return (
    <DiagramComponent
      id="diagram_contextmenu"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'650px'}
      height={'350px'}
      nodes={node}
      connectors={connector}
      contextMenuSettings={{
        //Enables the context menu
        show: true,
        items: [
          {
            text: 'delete',
            id: 'delete',
          },
        ],
        // Hides the default context menu items
        showCustomMenuOnly: false,
      }}
      contextMenuOpen={(args) => {
        //do your custom action here.
        for (let item of args.items) {
          if (item.text === 'delete') {
            if (
              !diagramInstance.selectedItems.nodes.length &&
              !diagramInstance.selectedItems.connectors.length
            ) {
              args.hiddenItems.push(item.text);
            }
          }
        }
      }}
      contextMenuClick={(args) => {
        //do your custom action here.
        if (args.item.text === 'delete') {
          if (
            diagramInstance.selectedItems.nodes.length +
              diagramInstance.selectedItems.connectors.length >
            0
          ) {
            diagramInstance.cut();
          }
        }
      }}
    >
      <Inject services={[DiagramContextMenu]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


{% endraw %}