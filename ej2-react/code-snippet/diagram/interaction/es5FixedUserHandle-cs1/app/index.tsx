import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel, FixedUserHandleClickEventArgs } from "@syncfusion/ej2-react-diagrams";
let node: NodeModel[] = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    // A fixed user handle is created and stored in fixed user handle collection of Node.
    fixedUserHandles: [{ 
      id: 'color',
      pathData: 'M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z ',
      width: 20,
      height: 20,
    }]
}];
let diagramInstance: DiagramComponent;
function App() {
  const fixedUserHandleClick = (args: FixedUserHandleClickEventArgs) => {
    let node = args.element;
    node.style.fill = node.style.fill === '#64A6' ? '#64Abbb' : '#64A6';
    diagramInstance.dataBind();
};
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={node}
      fixedUserHandleClick={fixedUserHandleClick}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



