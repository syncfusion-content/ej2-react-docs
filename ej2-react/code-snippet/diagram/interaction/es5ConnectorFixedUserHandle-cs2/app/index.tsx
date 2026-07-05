



import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    SelectorConstraints,
    NodeConstraints,
    UserHandleModel
} from "@syncfusion/ej2-react-diagrams";
let node: NodeModel[] = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    tooltip: { content: 'node1', position: 'BottomRight', relativeMode: 'Object' },
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip
}];
let handles: UserHandleModel[] = [{
     name: 'clone', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,' +
            '0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z ' +
            'M68.5,72.5h-30V34.4h30V72.5z',
        visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 },
        tooltip: { content: 'handle1', position: 'BottomRight', relativeMode: 'Object' }
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
      selectedItems={{
        constraints: SelectorConstraints.All,
        userHandles: handles,
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



