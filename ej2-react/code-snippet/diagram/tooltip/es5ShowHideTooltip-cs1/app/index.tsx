import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramConstraints, NodeConstraints,NodeModel } from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
let node:NodeModel[] = [{
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
           //To show tooltip on button click
          openOn: 'Custom',
        },
    }];
//Initializes the Diagram component
function App() {
    const showTooltip = () => {
    /**
   * parameter -  The object for which the tooltip will be shown.
   */
     diagramInstance.showTooltip(diagramInstance.nodes[0]);  
    }
    const hideTooltip = () => {
    /**
   * parameter - The object for which the tooltip should be hidden.
   */
     diagramInstance.hideTooltip(diagramInstance.nodes[0]);
    }
    return (
    <div>
      <button  onClick={showTooltip}>showTooltip</button>
      <button  onClick={hideTooltip}>hideTooltip</button>
    <DiagramComponent id="container" width={'650px'} 
    ref={(diagram) => (diagramInstance = diagram)}
    height={'350px'} constraints={DiagramConstraints.Default | DiagramConstraints.Tooltip} 
    //Defines nodes
    nodes={node}/>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
