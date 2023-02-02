import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        shape: {
            type: 'SwimLane',
            orientation: 'Horizontal',
            //Intialize header to swimlane
            header: {
                annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: 'transparent' } },
                height: 50, style: { fontSize: 11 },
            },
            lanes: [
                {
                    id: 'stackCanvas1',
                    height: 100,
                    header: {
                        annotation: { content: 'CUSTOMER' }, width: 50,
                        style: { fontSize: 11 }
                    },
                    children: [
                        {
                            id: 'node1',
                            annotations: [
                                {
                                    content: 'Consumer learns \n of product',
                                    style: { fontSize: 11 }
                                }
                            ],
                            margin: { left: 60, top: 30 },
                            height: 40, width: 100,
                        }, {
                            id: 'node2',
                            shape: { type: 'Flow', shape: 'Decision' },
                            annotations: [
                                {
                                    content: 'Does \n Consumer want \nthe product',
                                    style: { fontSize: 11 }
                                }
                            ],
                            margin: { left: 200, top: 20 },
                            height: 60, width: 120,
                        },
                    ],
                },
            ],
            // Set phase to swimlane
            phases: [
                {
                    id: 'phase1', offset: 120,
                    header: { annotation: { content: 'Phase' } }
                }, {
                    id: 'phase2', offset: 200,
                    header: { annotation: { content: 'Phase' } }
                },
            ],
            phaseSize: 20,
        },
        offsetX: 300, offsetY: 200,
        height: 200,
        width: 350
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
