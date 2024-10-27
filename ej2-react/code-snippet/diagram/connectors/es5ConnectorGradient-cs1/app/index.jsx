import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let connectors = [
    {
        id: 'connector1',
        type: 'Straight',
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
          strokeWidth: 2,
        },
        // Cutomize the target decorator
        targetDecorator: {
          style: {
            strokeWidth: 1,
            opacity: 0.5,
            gradient: {
              x1: 20,
              y1: 20,
              x2: 70,
              y2: 70,
              stops: [
                {
                  color: 'green',
                  offset: 50,
                  opacity: 1,
                },
                {
                  color: 'yellow',
                  offset: 100,
                  opacity: 1,
                },
              ],
              type: 'Linear',
            } ,
          },
        },
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
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
          strokeWidth: 2,
        },
        // Cutomize the target decorator
        targetDecorator: {
          style: {
            gradient: {
              cx: 50,
              cy: 50,
              fx: 50,
              fy: 50,
              stops: [
                { color: '#00555b', offset: 0 },
                { color: 'yellow', offset: 90 },
              ],
              type: 'Radial',
            },
          },
        },
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
    ref={(diagram) => (diagramInstance = diagram)}
    created={() => {
        diagramInstance.zoomTo({
            type:'ZoomIn',
            ZoomFactor:2,
            focusPoint:{x:0,y:0.5}
        });
        diagramInstance.fitToPage();
    }}

    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
