import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,PortVisibility} from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance;


let node = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [{
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
}];
 
// Method to update ports at run time
const updatePort = () => {
    diagramInstance.nodes[0].ports[0].offset = {
        x: 1,
        y: 1
    };
    diagramInstance.dataBind();
  }

// initialize Diagram component
function App() {
  return (
    <div>
    <ButtonComponent content="update Port" onClick={updatePort} />
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={node}
    />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
