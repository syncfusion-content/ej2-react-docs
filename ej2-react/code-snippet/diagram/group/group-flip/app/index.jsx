import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent,FlipDirection } from "@syncfusion/ej2-react-diagrams";
const nodes = [
    {
        id: 'node1',
        width: 70,
        height: 70,
        offsetX: 100,
        offsetY: 100,
        //Sets the flip as Vertical
        flip: FlipDirection.Vertical,
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        style: {
          fill: '#6BA5D7',
        },
      },
      {
        id: 'node2',
        width: 70,
        height: 70,
        offsetX: 180,
        offsetY: 180,
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        style: {
          fill: '#6BA5D7',
        },
    
      },
      {
        id: 'group',
        children: ['node1', 'node2',],
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
        //Sets the flip as Horizontal
        flip: FlipDirection.Horizontal,
        style: {
          fill: 'white', strokeColor:'black'
        },
      }
];

function App() {
    const diagramRef = useRef(null);
    return (<DiagramComponent id="diagram" ref={diagramRef} width={'100%'} height={'600px'}
        nodes={nodes}
        created={() => {
            diagramRef.current.select([diagramRef.current.getObject('group')]);
        }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
