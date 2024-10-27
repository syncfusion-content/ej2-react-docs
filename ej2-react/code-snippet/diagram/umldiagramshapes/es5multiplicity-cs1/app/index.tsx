

import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,ConnectorModel} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
// A node is created and stored in nodes array.
let connector: ConnectorModel[] = [
  {
    id: 'connector1',
    //Define connector start and end points
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'OneToOne',
      },
    },
  },
  {
    id: 'connector2',
    //Define connector start and end points
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 400, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'ManyToOne',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  },
{
    id: "connector3",
    //Define connector start and end points
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 500, y: 300 },
    type: "Straight",
    shape: {
        type: "UmlClassifier",
        relationship: "Dependency",
        multiplicity: {
            //Set multiplicity type
            type: "OneToMany",
            //Set source label to connector
            source: {
                optional: true,
                lowerBounds: 89,
                upperBounds: 67
            },
            //Set target label to connector
            target: {
                optional: true,
                lowerBounds: 78,
                upperBounds: 90
            }
        }
    }
},
{
    id: 'connector4',
    //Define connector start and end points
    sourcePoint: { x: 400, y: 100 },
    targetPoint: { x: 600, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Dependency',
      multiplicity: {
        //Set multiplicity type
        type: 'ManyToMany',
        //Set source label to connector
        source: {
          optional: true,
          lowerBounds: '89',
          upperBounds: '67',
        },
        //Set target label to connector
        target: {
          optional: true,
          lowerBounds: '78',
          upperBounds: '90',
        },
      },
    },
  },

];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add connector
      connectors={connector}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


