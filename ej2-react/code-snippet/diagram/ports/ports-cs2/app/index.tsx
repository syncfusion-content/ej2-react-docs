import * as React from "react";
import * as ReactDOM from "react-dom";
import {Diagram, DiagramComponent,PortVisibility,   NodeModel,PointPortModel,} from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance:DiagramComponent;

let node: NodeModel[] = [{
  offsetX: 250,
  offsetY: 250,
  width: 100,
  height: 100,
}];

let port: PointPortModel[] = [{
  id: 'port1',
  offset: {
    x: 0,
    y: 0.5
  },
  visibility: PortVisibility.Visible
}, {
  id: 'port2',
  offset: {
    x: 1,
    y: 0.5
  },
  visibility: PortVisibility.Visible
},
{
  id: 'port3',
  offset: {
    x: 0.5,
    y: 0
  },
  visibility: PortVisibility.Visible
},
{
  id: 'port4',
  offset: {
    x: 0.5,
    y: 1
  },
  visibility: PortVisibility.Visible
}];

// Method to add ports through run time
const addport = () => {
  // Parameters:
  // - node: The node to which the port will be added.
  // - port: The port collection to be added to the node.
  diagramInstance.addPorts(diagramInstance.nodes[0], port);
}

// initialize Diagram component
function App() {
  return (
    <div>
      <ButtonComponent content="Add Port" onClick={addport} />
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={node}
      // render initialized Diagram
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
