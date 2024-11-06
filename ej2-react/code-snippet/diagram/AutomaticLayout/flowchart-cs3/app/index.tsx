{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, NodeModel, ConnectorModel, DataBinding, FlowchartLayout } from "@syncfusion/ej2-react-diagrams";


//Initialize nodes for diagram
let nodes: NodeModel[] = [
  { id: '1', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'Start' }], style: { fill: '#6CA0DC' } },
  { id: '2', shape: { type: 'Flow', shape: 'Data' }, annotations: [{ content: 'Input' }], style: { fill: '#6CA0DC' } },
  { id: '3', shape: { type: 'Flow', shape: 'Decision' }, annotations: [{ content: 'Decision?' }], style: { fill: '#6CA0DC' } },
  { id: '4', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process1' }], style: { fill: '#6CA0DC' } },
  { id: '5', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process2' }], style: { fill: '#6CA0DC' } },
  { id: '6', shape: { type: 'Flow', shape: 'Data' }, annotations: [{ content: 'Output' }], style: { fill: '#6CA0DC' } },
  { id: '7', shape: { type: 'Flow', shape: 'Data' }, annotations: [{ content: 'Output' }], style: { fill: '#6CA0DC' } },
  { id: '8', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'End' }], style: { fill: '#6CA0DC' } }
];

//Initialize connectors for diagram
let connectors: ConnectorModel[] = [
  { id: 'connector1', sourceID: '1', targetID: '2' },
  { id: 'connector2', sourceID: '2', targetID: '3' },
  { id: 'connector3', sourceID: '3', targetID: '4', annotations: [{ content: 'No' }] },
  { id: 'connector4', sourceID: '3', targetID: '5', annotations: [{ content: 'Yes' }] },
  { id: 'connector5', sourceID: '5', targetID: '6' },
  { id: 'connector6', sourceID: '4', targetID: '7' },
  { id: 'connector7', sourceID: '6', targetID: '8' },
  { id: 'connector8', sourceID: '7', targetID: '8' }
];

export default function App() {

  return (
    <div>
      <DiagramComponent
        id="container"
        width={"100%"}
        height={"550px"}
        nodes={nodes}
        connectors={connectors}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'Flowchart',

          //Customizes the flowchart layout
          flowchartLayoutSettings: {
            //Sets the yes branch direction
            yesBranchDirection: 'SameAsFlow',
            //Sets the no branch direction
            noBranchDirection: 'LeftInFlow',
          }
        }}

        //Sets the default properties for nodes
        getNodeDefaults={(node: NodeModel) => {
          node.width = 120; node.height = 50;
          if ((node.shape as any).shape === 'Decision') {
            node.height = 80;
          }
          return node;
        }}

        //Sets the default properties for connectors
        getConnectorDefaults={(connector: ConnectorModel) => {
          connector.type = 'Orthogonal';
          return connector;
        }}
      >

        {/* Inject necessary services for the diagram */}
        <Inject services={[DataBinding, FlowchartLayout]} />
      </DiagramComponent>
    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}