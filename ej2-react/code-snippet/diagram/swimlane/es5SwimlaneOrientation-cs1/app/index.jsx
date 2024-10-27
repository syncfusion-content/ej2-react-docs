import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let node = [
  {
    id: 'swimlane1',
    shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      //Intialize header to swimlane
      header: {
        annotation: {
          content: 'Horizontal Swimlane',
        },
        height: 50,
        style: { fontSize: 11 },
      },
      lanes: [
        {
          id: 'stackCanvas1',
          height: 100,
          header: {
            annotation: { content: 'CUSTOMER' },
            width: 50,
            style: { fontSize: 11 },
          },
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 150,
          addInfo: { name: 'phase1' },
          header: {
            annotation: {
              content: 'First phase',
            },
          },
        },
        {
          id: 'phase2',
          offset: 200,
          header: { annotation: { content: 'Second phase' } },
        },
      ],
      phaseSize: 40,
    },
    offsetX: 300,
    offsetY: 200,
    height: 200,
    width: 350,
  },
  {
    id: 'swimlane2',
    shape: {
      type: 'SwimLane',
      orientation: 'Vertical',
      //Intialize header to swimlane
      header: {
        annotation: {
          content: 'Vertical Swimlane',
        },
        height: 50,
        style: { fontSize: 11 },
      },
      lanes: [
        {
          id: 'stackCanvas1',
          height: 100,
          header: {
            annotation: { content: 'CUSTOMER' },
            width: 50,
            style: { fontSize: 11 },
          },
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 120,
          addInfo: { name: 'phase1' },
          header: {
            annotation: {
              content: 'First phase',
            },
          },
        },
        {
          id: 'phase2',
          offset: 200,
          header: { annotation: { content: 'Second phase' } },
        },
      ],
      phaseSize: 40,
    },
    offsetX: 800,
    offsetY: 200,
    height: 200,
    width: 350,
  },
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
