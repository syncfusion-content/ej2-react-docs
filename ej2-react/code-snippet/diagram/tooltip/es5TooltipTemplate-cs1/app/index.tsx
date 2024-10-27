

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    DiagramConstraints,
    NodeConstraints
} from "@syncfusion/ej2-react-diagrams";
import {
    NodeAnimationSettings
} from '@syncfusion/ej2-navigations';
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
                id: "node1",
                width: 100,
                height: 100,
                annotations: [{
                    id: 'label',
                    content: 'Rectangle',
                    offset: {
                        x: 0.5,
                        y: 0.5
                    },
                    style: {
                        color: 'white'
                    },
                }],
                offsetX: 200,
                offsetY: 200,
                style: {
                    strokeColor: '#6BA5D7',
                    fill: '#6BA5D7'
                },
                constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
                //Defines mouse over tooltip for a node
                tooltip: {
                    //Sets the content of the Tooltip
                    content: getContent(),
                }
            }];

function App() {
  return (
    <DiagramComponent
      id="container"
      width={'650px'}
      height={'350px'}
      constraints={DiagramConstraints.Default | DiagramConstraints.Tooltip}
      //Defines nodes
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

function getContent(): HTMLElement {
    let tooltipContent: HTMLElement = document.createElement('div');
    tooltipContent.innerHTML = '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> <span style="margin: 10px;"> Tooltip !!! </span> </div>';
    return tooltipContent;
}



