import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance;
let node = [{
        offsetX: 250,
        offsetY: 250,
        width: 100,
        height: 100,
        ports: [{
                offset: {
                    x: 1,
                    y: 0.5
                },
                visibility: PortVisibility.Visible,
                style: {
                    fill: 'red',
                    strokeWidth: 2,
                    strokeColor: 'black',
                    opacity: 0.7,
                    strokeDashArray: '2 2',
                },
                width: 12,
                height: 12,
                shape: 'Circle'
            }]
    }];

// Method to update port appearance through run time
const changeAppearance = () => {
    let port = diagramInstance.nodes[0].ports[0];
    port.style.fill = 'yellow';
    port.style.opacity = 1;
    port.width = 25;
    port.height = 25;
    diagramInstance.dataBind();
  }

// initialize Diagram component
function App() {
    return (
    <div>
        <ButtonComponent content="Change Appearance" onClick={changeAppearance} />
        <DiagramComponent id="container" width={'100%'} height={'600px'} ref={(diagram) => (diagramInstance = diagram)} nodes={node}/>
    </div>);
} 
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

