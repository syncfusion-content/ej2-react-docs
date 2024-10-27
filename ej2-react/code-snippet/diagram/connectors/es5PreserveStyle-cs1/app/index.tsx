import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectorConstraints,NodeModel,ConnectorModel,DiagramComponent,NodeConstraints,Connector,ICollectionChangeEventArgs } from '@syncfusion/ej2-react-diagrams';
let diagramInstance:DiagramComponent;
let nodes:NodeModel[] = [{
        id: 'node1',
        offsetX: 150, offsetY: 150,
        annotations: [{ content: 'node1' }]
    },
    {
        id: 'node2',
        offsetX: 650, offsetY: 150,
        annotations: [{ content: 'node2' }]
    },
    {
        id: 'node3',
        offsetX: 490, offsetY: 290,
        annotations: [{ content: 'node3' }]
    },
];
let connectors: ConnectorModel[]= [{
        id: 'connector1', sourceID: "node1", targetID: "node2",
        style: { strokeColor: 'red', strokeWidth: 2, strokeDashArray: '3,3' }
    }
];
function App() {
    return (<DiagramComponent id="container" width={1500} height={1000} 
    ref={(diagram) => (diagramInstance = diagram)}
    enableConnectorSplit={true} nodes={nodes} connectors={connectors}
    getConnectorDefaults={(obj:ConnectorModel) => {
        obj.constraints =
        ConnectorConstraints.Default | ConnectorConstraints.AllowDrop;
    }}
    getNodeDefaults={(obj:NodeModel) => {
        obj.width = 100;
        obj.height = 100;
        obj.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop; 
    }}
    enableConnectorSplit:boolean = {true}
    collectionChange={(args: ICollectionChangeEventArgs)=>{
        if (args.state === 'Changed' && args.element instanceof Connector) {
        let sourceNode = diagramInstance.getObject(args.element.sourceID);
        if (sourceNode) {
            sourceNode.inEdges.forEach((edgeId) => {
                let initialConnector = diagramInstance.getObject(edgeId);
                args.element.style = initialConnector.style;
              });  
        }
        }
        diagramInstance.dataBind();
    }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);