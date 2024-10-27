import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, NodeModel } from '@syncfusion/ej2-react-diagrams';
let diagramInstance: DiagramComponent;
let node: NodeModel[] = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6AA8D7',strokeWidth:1},
  },
];
// initialize Diagram component
function App() {
  const color = () => {
      if(diagramInstance.nodes[0].style.fill === '#6AA8D7'){
        diagramInstance.nodes[0].style.fill = 'orange';
      }
      else{
        diagramInstance.nodes[0].style.fill = '#6AA8D7';
      }
  };
  const size = () => {
    if(diagramInstance.nodes[0].width === 100){
        diagramInstance.nodes[0].width = 200;
      }
      else{
        diagramInstance.nodes[0].width =100;
      }
  };
  return (
    <div>
      <button onClick={color}>Change Color</button>
      <button onClick={size}>Change Size</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        nodes={node}
        width={'100%'}
        height={'600px'}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
