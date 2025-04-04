

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let connectors: ConnectorModel[] = [{
    id: "connector1",
    type: 'Straight',
    // Decorator shape- circle
    sourceDecorator: {
        shape: 'Circle',
        // Defines the style for the sourceDecorator
        style: {
            // Defines the strokeWidth for the sourceDecorator
            strokeWidth: 3,
            // Defines the strokeColor for the sourceDecorator
            strokeColor: 'red'
        },
    },
    // Decorator shape - Diamond
    targetDecorator: {
        // Defines the custom shape for the connector's target decorator
        shape: 'Custom',
        //Defines the  path for the connector's target decorator
        pathData: 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
            'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z',
        //defines the style for the target decorator
        style: {
            // Defines the strokeWidth for the targetDecorator
            strokeWidth: 3,
            // Defines the strokeColor for the sourceDecorator
            strokeColor: 'green',
            // Defines the opacity for the sourceDecorator
            opacity: .8
        },
    },
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
},
{
    id: "connectors2",
    type: 'Straight',
    // Decorator shape - IndentedArrow
    sourceDecorator: {
        shape: 'IndentedArrow',
        style: {
            strokeWidth: 3,
            strokeColor: 'blue'
        },

    },
    // Decorator shape - OutdentedArrow
    targetDecorator: {
        shape: 'OutdentedArrow',
        style: {
            strokeWidth: 3,
            strokeColor: 'yellow'
        },
    },
    sourcePoint: {
        x: 400,
        y: 100
    },
    targetPoint: {
        x: 300,
        y: 200
    }
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



