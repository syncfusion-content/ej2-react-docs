{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    ConnectorModel,
    OrthogonalSegmentModel,
    ConnectorConstraints,
    ConnectorEditing
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let connectors: ConnectorModel[] = [{
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    type: 'Orthogonal',
    maxSegmentThumb: 3,
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.DragSegmentThumb,
    segments: [{ type: 'Orthogonal', direction: 'Bottom', length: 50 }],

}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}

