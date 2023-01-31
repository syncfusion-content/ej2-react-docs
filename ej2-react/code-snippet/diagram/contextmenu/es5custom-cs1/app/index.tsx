{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    DiagramContextMenu,
    Inject,
    ConnectorModel,
    NodeModel,
    DiagramBeforeMenuOpenEventArgs
} from "@syncfusion/ej2-react-diagrams";
import {
    MenuEventArgs
} from '@syncfusion/ej2-navigations';

//Initializes the connector
let connector: ConnectorModel[] = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Straight',
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
      width={'650px'}
      height={'350px'}
      nodes={node}
      connectors={connector}
      contextMenuSettings={{
        //Enables the context menu
        show: true,
        // Defines the custom context menu items
        items: [
          {
            // Text to be displayed
            text: 'Save',
            //Sets the id for the item
            id: 'save',
            //ContextMenu can be visible based on the target in which you open the ContextMenu.
            target: '.e-elementcontent',
            // Sets the css icons for the item
            iconCss: 'e-save',
          },
          {
            text: 'Load',
            id: 'load',
            target: '.e-elementcontent',
            iconCss: 'e-load',
          },
          {
            text: 'Clear',
            id: 'clear',
            target: '.e-elementcontent',
            iconCss: 'e-clear',
          },
        ],
        // Hides the default context menu items
        showCustomMenuOnly: false,
      }}
    >
      <Inject services={[DiagramContextMenu]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



{% endraw %}