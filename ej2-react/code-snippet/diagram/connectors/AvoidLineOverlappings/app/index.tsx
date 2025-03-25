import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, LineRouting, AvoidLineOverlapping, Snapping, NodeModel, ConnectorModel, DiagramConstraints, PortVisibility, PointPortModel } from "@syncfusion/ej2-react-diagrams";

Diagram.Inject(LineRouting, AvoidLineOverlapping, Snapping);

let orData: string = 'M21.7,76.5L21.7,76.5c6.4-18.1,6.4-37.8,0-55.9l0-0.1h1.6c21.5,0,41.7,10.4,54.2,28l0,0l0,0  c-12.5,17.6-32.7,28-54.2,28H21.7z M99.5,48.5l-22,0 M0,31.5h25 M0,65.5h25';
let andData: string = 'M21.5,20.5h28a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h-28a0,0,0,0,1,0,0v-56a0,0,0,0,1,0,0Z M78,48.5 L 100,48.5Z M0,32.5 L 21.4,32.5Z M0,65.5 L 21.4,65.5Z';
let notData: string = 'M75.5,50.5l-52,28v-56L75.5,50.5z M81.5,50.5h18 M1.5,50.5h22 M78.5,47.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3  S80.2,47.5,78.5,47.5z';

let orPort: PointPortModel[] = [
  { id: 'Or_port1', offset: { x: 0.01, y: 0.1963 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }, { id: 'Or_port2', offset: { x: 0.26, y: 0.5 } },
  { id: 'Or_port3', offset: { x: 0.01, y: 0.805 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }, { id: 'Or_port4', offset: { x: 0.99, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }
];
let andPort: PointPortModel[] = [
  { id: 'And_port1', offset: { x: 0.01, y: 0.215 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }, { id: 'And_port2', offset: { x: 0.22, y: 0.5 } },
  { id: 'And_port3', offset: { x: 0.01, y: 0.805 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }, { id: 'And_port4', offset: { x: 0.99, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }
];
let notPort: PointPortModel[] = [
  { id: 'Not_port1', offset: { x: 0.01, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }, { id: 'Not_port2', offset: { x: 0.99, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }
];
let nodes: NodeModel[] = [
  { id: 'switch', offsetX: 80, offsetY: 50, width: 50, height: 50, ports: [{ id: 'port1', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }], annotations: [{ content: 'A' }] },
  { id: 'Push', offsetX: 80, offsetY: 150, width: 50, height: 50, ports: [{ id: 'port1', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }], annotations: [{ content: 'B' }] },
  { id: 'clock', offsetX: 80, offsetY: 250, width: 50, height: 50, ports: [{ id: 'port1', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }], annotations: [{ content: 'C' }] },
  { id: 'switch2', offsetX: 80, offsetY: 350, width: 50, height: 50, ports: [{ id: 'port1', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }], annotations: [{ content: 'D' }] },

  { id: 'AND21', offsetX: 200, offsetY: 100, width: 60, height: 40, shape: { type: 'Path', data: andData }, ports: andPort },
  { id: 'OR22', offsetX: 200, offsetY: 200, width: 60, height: 40, shape: { type: 'Path', data: orData }, ports: orPort },
  { id: 'AND23', offsetX: 200, offsetY: 300, width: 60, height: 40, shape: { type: 'Path', data: andData }, ports: andPort },

  { id: 'AND31', offsetX: 300, offsetY: 250, width: 60, height: 40, shape: { type: 'Path', data: andData }, ports: andPort },

  { id: 'OR41', offsetX: 400, offsetY: 150, width: 60, height: 40, shape: { type: 'Path', data: orData }, ports: orPort },
  { id: 'NOT42', offsetX: 400, offsetY: 350, width: 60, height: 40, shape: { type: 'Path', data: notData }, ports: notPort },

  {
    id: 'Exor5', ports: orPort, offsetX: 500, offsetY: 250, width: 60, height: 40,
    shape: {
      type: 'Path', data: 'M21.7,76.5L21.7,76.5c6.4-18.1,6.4-37.8,0-55.9l0-0.1h1.6c21.5,0,41.7,10.4,54.2,28l0,0l0,0  c-12.5,17.6-32.7,28-54.2,28H21.7z M73.4,48.5L73.4,48.5 M17.5,76.8L17.5,76.8c6.7-18.2,6.7-38.1,0-56.3l0-0.1 M77.5,48.5h22   M0,32.5h21 M0,65.5h21'
    },
  },

  { id: 'bulb', offsetX: 600, offsetY: 150, width: 50, height: 50, ports: [{ id: 'bulbPort', offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Visible, style: { fill: 'black' }, shape: 'Circle' }], annotations: [{ content: 'Out' }] }
];

let connectors: ConnectorModel[] = [
  { id: 'ExOr-Output', sourceID: 'Exor5', targetID: 'bulb', sourcePortID: 'Or_port4', targetPortID: 'bulbPort', type: 'Orthogonal' },
  { id: '4-ExOr1', sourceID: 'OR41', targetID: 'Exor5', sourcePortID: 'Or_port4', targetPortID: 'Or_port1', type: 'Orthogonal' },
  { id: '4-ExOr2', sourceID: 'NOT42', targetID: 'Exor5', sourcePortID: 'Not_port2', targetPortID: 'Or_port3', type: 'Orthogonal' },
  { id: '3-AND-OR', sourceID: 'AND31', targetID: 'OR41', sourcePortID: 'And_port4', targetPortID: 'Or_port3', type: 'Orthogonal' },
  { id: '2AND1-4AND1', sourceID: 'AND21', targetID: 'OR41', sourcePortID: 'And_port4', targetPortID: 'Or_port1', type: 'Orthogonal' },
  { id: '2OR2-3AND', sourceID: 'OR22', targetID: 'AND31', sourcePortID: 'Or_port4', targetPortID: 'And_port1', type: 'Orthogonal' },
  { id: '2AND3-3AND', sourceID: 'AND23', targetID: 'AND31', sourcePortID: 'And_port4', targetPortID: 'And_port3', type: 'Orthogonal' },

  { id: 'switch-Not42', sourceID: 'switch', targetID: 'NOT42', sourcePortID: 'port1', targetPortID: 'Not_port1', type: 'Orthogonal' },

  { id: 'Push-AND21', sourceID: 'Push', targetID: 'AND21', sourcePortID: 'port1', targetPortID: 'And_port3', type: 'Orthogonal' },
  { id: 'Push-OR22', sourceID: 'Push', targetID: 'OR22', sourcePortID: 'port1', targetPortID: 'Or_port1', type: 'Orthogonal' },
  { id: 'Push-AND23', sourceID: 'Push', targetID: 'AND23', sourcePortID: 'port1', targetPortID: 'And_port1', type: 'Orthogonal' },

  { id: 'clock-OR22', sourceID: 'clock', targetID: 'OR22', sourcePortID: 'port1', targetPortID: 'Or_port3', type: 'Orthogonal' },
  { id: 'clock-AND23', sourceID: 'clock', targetID: 'AND23', sourcePortID: 'port1', targetPortID: 'And_port3', type: 'Orthogonal' },

  { id: 'switch2-And21', sourceID: 'switch2', targetID: 'AND21', sourcePortID: 'port1', targetPortID: 'And_port1', type: 'Orthogonal' },
];
function App() {
  return (<DiagramComponent id="diagram" width={'100%'} height={'700px'} nodes={nodes} connectors={connectors} rulerSettings={{ showRulers: true }}
    constraints={DiagramConstraints.Default | DiagramConstraints.LineRouting | DiagramConstraints.AvoidLineOverlapping}
    getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
      connector.cornerRadius = 5; return connector;
    }} />);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
