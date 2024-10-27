import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram,DiagramComponent ,HierarchicalTree,ConnectorConstraints,ConnectorEditing,NodeModel,ConnectorModel} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(HierarchicalTree, ConnectorEditing);
let diagramInstance:DiagramComponent;
let nodes:NodeModel[]  = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 50,
      annotations: [
        {
          content: 'Node1',
        },
      ],
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
      },
      expandIcon: {
        shape: 'ArrowDown',
        width: 20,
        height: 15,
      },
      collapseIcon: {
        shape: 'ArrowUp',
        width: 20,
        height: 15,
      },
    },
    {
      id: 'Init',
      width: 140,
      height: 50,
      offsetX: 200,
      offsetY: 240,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
      },
      annotations: [
        {
          content: 'Node2',
        },
      ],
    },
  ];
let connectors:ConnectorModel[] = [ {
    // Unique name for the connector
    id: 'connector1',
    // Source and Target node's name to which connector needs to be connected.
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
    constraints:
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
  },];
function App() {
    const resetSegment = () =>{
        diagramInstance.resetSegments();
    }
    return (
    <div>
    <button onClick={resetSegment}>resetSegment</button>
    <DiagramComponent id="container" width={'100%'}  connectors={connectors} nodes={nodes} height={'600px'} 
    ref={(diagram) => (diagramInstance = diagram)}
        >
    </DiagramComponent>
    </div>
    );
    
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);