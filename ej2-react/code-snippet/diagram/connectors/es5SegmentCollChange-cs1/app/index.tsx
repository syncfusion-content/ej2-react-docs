import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,ConnectorModel,ConnectorConstraints,Diagram, ConnectorEditing,ISegmentCollectionChangeEventArgs} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let connectors: ConnectorModel[]  = [{
        // Name of the connector
        id: "connector1",
        // Sets source and target points
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        },
        constraints:
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}
    segmentCollectionChange={
            (args:ISegmentCollectionChangeEventArgs) =>{
                if (args.type === 'Addition') {
                    console.log('segmentCollectionChange');
                    //Customize
                }
            }
        }
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
