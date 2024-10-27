import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let node = [{
    id: 'node1',
    offsetX: 300,
    offsetY: 300,
    height: 100,
    width: 100,
    style: { fill: '#64a6', strokeColor: '#64Abbb', strokeWidth: 3 },
    fixedUserHandles: [
      {
        id: 'color',
        pathData:
          'M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z ',
        width: 30,
        height: 30,
        offset: { x: 1, y: 0 },
        margin: { left: 20, bottom: 10 },
        //Sets the stroke color of fixed user handle
        handleStrokeColor: 'green',
        //Sets the stroke width of fixed user handle
        handleStrokeWidth: 4,
        //Sets the stroke color of icon
        iconStrokeColor: '#64Abbb',
        //Sets the stroke width of icon
        iconStrokeWidth: 1,
        //Sets the fill color of the fixed user handle
        fill: 'yellow',
        //Sets the corner radius of the fixed user handle
        cornerRadius: 5,
      },
    ],
  }];
let connector = [{
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 200 },
    style: { strokeColor: '#64Abbb', fill: '#64A6', strokeWidth: 3 },
    fixedUserHandles: [
      {
        id: 'stroke',
        pathData:
          'M0,13.85 L15.62,13.85 L15.62,20 L25,9.74 L15.62,0 L15.62,6.41 L0,6.41 L0,13.85 Z ',
        width: 30,
        height: 25,
        //Offset of fixed user handle
        offset: 0.5,
        //Sets the stroke color of fixed user handle
        handleStrokeColor: 'green',
        //Sets the stroke width of fixed user handle
        handleStrokeWidth: 4,
        //Sets the stroke color of icon
        iconStrokeColor: '#64Abbb',
        //Sets the stroke width of icon
        iconStrokeWidth: 1,
        //Sets the fill color of the fixed user handle
        fill: 'yellow',
        //Sets the corner radius of the fixed user handle
        cornerRadius: 5,
      },
    ],
  }];
let diagramInstance;
function App() {
    const onFixedUserHandleMouseDown = (args) => {
        let node = args.element.parentObj;
        node.style.strokeColor =
        node.style.strokeColor === '#64A6' ? '#64Abbb' : '#64A6';
        diagramInstance.dataBind();
    }
    const onFixedUserHandleMouseEnter = (args) => {
      if (args.element) {
        args.element.fill = 'red';
        args.element.handleStrokeColor = 'pink';
      }
    }
    const onFixedUserHandleMouseUp = (args) => {
      if (args.element) {
        args.element.fill = 'blue';
        args.element.handleStrokeColor = 'pink';
      }
    }

    const onFixedUserHandleMouseLeave = (args) => {
      if (args.element) {
        args.element.fill = 'yellow';
        args.element.handleStrokeColor = 'green';
      }
    }
    return (<DiagramComponent id="container"  ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node} connectors={connector} onFixedUserHandleMouseDown={onFixedUserHandleMouseDown} onFixedUserHandleMouseEnter={onFixedUserHandleMouseEnter} onFixedUserHandleMouseUp={onFixedUserHandleMouseUp} onFixedUserHandleMouseLeave={onFixedUserHandleMouseLeave}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
