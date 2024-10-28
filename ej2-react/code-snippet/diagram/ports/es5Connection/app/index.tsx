import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility,NodeModel,ConnectorModel } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance: DiagramComponent;

var nodes:NodeModel[] = [
    {
      id: 'node1',
      offsetX: 450,
      offsetY: 200,
      width: 100,
      height: 100,
      ports: [
        {
          id: 'port1',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
        },
      ],
    },
    {
      id: 'node2',
      offsetX: 270,
      offsetY: 300,
      width: 100,
      height: 100,
      ports: [
        {
          id: 'port3',
          offset: { x: 0.5, y: 0.5 },
          visibility: PortVisibility.Visible,
          //Sets the connection direction as Left
          connectionDirection: 'Left',
        },
      ],
    },
  ];

let connectors: ConnectorModel[] = [
    {
        id: 'connector1',
        type: 'Orthogonal',
        sourceID: 'node2',
        targetID: 'node1',
        sourcePortID: 'port3',
        targetPortID: 'port1',
}];

// Method to add ports through run time
const changeConnectionDirection = () => {
    diagramInstance.nodes[1].ports[0].connectionDirection='Top'
  }

function App() {
    return (
        <div>
          <ButtonComponent content="Change Connection Direction" onClick={changeConnectionDirection} />
          <DiagramComponent
            id="container"
            ref={(diagram) => (diagramInstance = diagram)}
            width={'100%'}
            height={'600px'}
            nodes={nodes}
            connectors={connectors}
          // render initialized Diagram
          />
        </div>
      );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

