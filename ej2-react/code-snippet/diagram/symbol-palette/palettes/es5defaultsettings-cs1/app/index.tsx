import * as React from "react";
import * as ReactDOM from "react-dom";
import '../index.css';
import { SymbolPaletteComponent, NodeModel, ConnectorModel, PaletteModel, SymbolInfo } from "@syncfusion/ej2-react-diagrams";

//Initialize the flowshapes for the symbol palette
export function getFlowShapes(): NodeModel[] {
  let flowShapes: NodeModel[] = [
    {
      id: "process",
      shape: {
        type: "Flow",
        shape: "Process",
      },
    },
    {
      id: "document",
      shape: {
        type: "Flow",
        shape: "Document",
      },
    },
    {
      id: "predefinedprocess",
      shape: {
        type: "Flow",
        shape: "PreDefinedProcess",
      },
    },
  ];
  return flowShapes;
}
//Initialize the connectors for the symbol palette
export function getConnectors(): ConnectorModel[] {
  let connectors: ConnectorModel[] = [
    {
      id: 'Link1',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
    },
    {
      id: 'link3',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'None' },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
    {
      id: 'Link21',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
    },
    {
      id: 'link23',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'None' },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
    {
      id: 'link33',
      type: 'Bezier',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'None' },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
  ];
  return connectors;
}

//Returns the default properties of node
export function getNodeDefaults(node: NodeModel): NodeModel {
  (node).style.fill = 'yellow';
  return node;
}
//Returns the default properties of connector
export function getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
  (connector).targetDecorator.shape = 'DoubleArrow';
  return connector;
}
const palettes: PaletteModel[] = [{
  id: 'flow',
  symbols: getFlowShapes(),
  title: 'Flow Shapes',
  iconCss: 'e-ddb-icons e-flow'
},
{
  id: 'connectors',
  symbols: getConnectors(),
  title: 'Connectors',
  iconCss: 'e-ddb-icons e-connector'
}];
//Initializes the symbol palette
function App() {
  return (<SymbolPaletteComponent id="symbolpalette" expandMode={"Multiple"} palettes={palettes}
    getNodeDefaults={getNodeDefaults} getConnectorDefaults={getConnectorDefaults} />);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
