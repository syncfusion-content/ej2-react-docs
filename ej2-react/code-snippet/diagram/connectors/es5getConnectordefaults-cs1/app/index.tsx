import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, ConnectorModel } from "@syncfusion/ej2-react-diagrams";
var connectors:ConnectorModel[] = [
    {
      id: 'connector1',
      type: 'Straight',
      sourcePoint: {
        x: 100,
        y: 100,
      },
      targetPoint: {
        x: 200,
        y: 200,
      },
    },
    {
      id: 'connector2',
      type: 'Straight',
      sourcePoint: {
        x: 300,
        y: 100,
      },
      targetPoint: {
        x: 400,
        y: 200,
      },
    },
  ];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}
     // Defines the default properties for the connector
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.style.strokeColor = 'red';
        connector.sourceDecorator.shape = 'Circle';
        connector.targetDecorator.style.fill = '#6BA5D7'
        connector.targetDecorator.style.strokeColor = '#6BA5D7'
        connector.style.strokeWidth = 2;
    }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
