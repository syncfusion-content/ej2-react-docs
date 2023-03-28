

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
        Diagram,
        DiagramComponent,
        NodeModel,
        DiagramConstraints,
        NodeConstraints
    } from "@syncfusion/ej2-react-diagrams";
import {
        NodeAnimationSettings
    } from '@syncfusion/ej2-navigations';
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
                        content: 'Node1',
                        position: 'BottomCenter',
                        relativeMode: 'Object',
                        animation: {
                            //Animation settings to be applied on the Tooltip, while it is being shown over the target.
                            open: {
                                //Animation effect on the Tooltip is applied during open and close actions.
                                effect: 'ZoomIn',
                                //Duration of the animation that is completed per animation cycle.
                                duration: 1000,
                                //Indicating the waiting time before animation begins.
                                delay: 0
                            },
                            //Animation settings to be applied on the Tooltip, when it is closed.
                            close: {
                                effect: 'ZoomOut',
                                duration: 500,
                                delay: 0
                            },
                        },
                    },
                }];

//Initializes the Diagram component
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



