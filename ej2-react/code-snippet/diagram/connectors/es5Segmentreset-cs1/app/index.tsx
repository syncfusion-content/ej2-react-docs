import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,ConnectorModel,ConnectorEditing,ConnectorConstraints,PortVisibility,ControlPointsVisibility
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let nodes: NodeModel[] = [ {
  id: 'Start',
  offsetX: 250,
  offsetY: 150,
  annotations: [{ content: 'Start' }],

},
{
  id: 'End',
  offsetX: 450,
  offsetY: 300,
  annotations: [{ content: 'End' }],

}];
let connectors: ConnectorModel[] = [{
  id: "connector1",
  segments: [
      {
        type: 'Bezier',
        point1: { x: 450, y: 150 },
        point2: { x: 250, y: 250 },
      },
    ],
  //Prevent segment reset whil moving source or target node.
  bezierSettings: { allowSegmentsReset: false },
  targetDecorator: { shape: 'None' },
  // ID of the source and target nodes
  sourceID: "Start",    
  targetID: "End",
  type: 'Bezier',
  
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      getNodeDefaults={(node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.constraints =
          ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);