import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel,PortVisibility} from "@syncfusion/ej2-react-diagrams";


let nodes: NodeModel[] = [
    {
      id: 'node1',
      offsetX: 100,
      offsetY: 100,
      width: 100,
      height: 100,
      annotations: [{ content: 'Left Top' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Left',
          verticalAlignment: 'Top',
        },
      ],
    },
    {
      id: 'node2',
      offsetX: 250,
      offsetY: 100,
      width: 100,
      height: 100,
      annotations: [{ content: 'Left Bottom' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Left',
          verticalAlignment: 'Bottom',
        },
      ],
    },
    {
      id: 'node3',
      offsetX: 400,
      offsetY: 100,
      width: 100,
      height: 100,
      annotations: [{ content: 'Left Center' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Left',
          verticalAlignment: 'Center',
        },
      ],
    },
    {
      id: 'node4',
      offsetX: 100,
      offsetY: 250,
      width: 100,
      height: 100,
      annotations: [{ content: 'Right Top' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Right',
          verticalAlignment: 'Top',
        },
      ],
    },
    {
      id: 'node5',
      offsetX: 250,
      offsetY: 250,
      width: 100,
      height: 100,
      annotations: [{ content: 'Right Bottom' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Right',
          verticalAlignment: 'Bottom',
        },
      ],
    },
    {
      id: 'node6',
      offsetX: 400,
      offsetY: 250,
      width: 100,
      height: 100,
      annotations: [{ content: 'Right Center' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Right',
          verticalAlignment: 'Center',
        },
      ],
    },
    {
      id: 'node7',
      offsetX: 100,
      offsetY: 400,
      width: 100,
      height: 100,
      annotations: [{ content: 'Center Top' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Center',
          verticalAlignment: 'Top',
        },
      ],
    },
    {
      id: 'node8',
      offsetX: 250,
      offsetY: 400,
      width: 100,
      height: 100,
      annotations: [{ content: 'Center Bottom' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Center',
          verticalAlignment: 'Bottom',
        },
      ],
    },
    {
      id: 'node9',
      offsetX: 400,
      offsetY: 400,
      width: 100,
      height: 100,
      annotations: [{ content: 'Center Center' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Center',
          verticalAlignment: 'Center',
        },
      ],
    },
  ];

// initialize Diagram component
function App() {
  return (
      <DiagramComponent
        id="container"
        width={'100%'}
        height={'600px'}
        nodes={nodes}
      />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

