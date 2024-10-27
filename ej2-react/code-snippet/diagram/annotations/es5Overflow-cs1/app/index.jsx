import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Clip Wrap',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Clip', textWrapping: 'Wrap' },
      },
    ],
  },
  {
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Clip NoWrap',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Clip', textWrapping: 'NoWrap' },
      },
    ],
  },
  {
    // Position of the node
    offsetX: 500,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Clip WrapWithOverflow',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Clip', textWrapping: 'WrapWithOverflow' },
      },
    ],
  },

  {
    // Position of the node
    offsetX: 100,
    offsetY: 300,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Ellipsis Wrap',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Ellipsis', textWrapping: 'Wrap' },
      },
    ],
  },
  {
    // Position of the node
    offsetX: 300,
    offsetY: 300,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Ellipsis NoWrap',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Ellipsis', textWrapping: 'NoWrap' },
      },
    ],
  },
  {
    // Position of the node
    offsetX: 500,
    offsetY: 300,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Ellipsis WrapWithOverflow',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Ellipsis', textWrapping: 'WrapWithOverflow' },
      },
    ],
  },

  {
    // Position of the node
    offsetX: 100,
    offsetY: 700,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Wrap Wrap',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Wrap', textWrapping: 'Wrap' },
      },
    ],
  },
  {
    // Position of the node
    offsetX: 300,
    offsetY: 500,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Wrap NoWrap',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Wrap', textWrapping: 'NoWrap' },
      },
    ],
  },
  {
    // Position of the node
    offsetX: 500,
    offsetY: 700,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      {
        content: 'Wrap WrapWithOverflow',
        offset: { x: 0.5, y: 1.4 },
      },
      {
        content:
          'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
        style: { textOverflow: 'Wrap', textWrapping: 'WrapWithOverflow' },
      },
    ],
  },];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
