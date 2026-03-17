{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,Rect,DiagramTools } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
let diagramInstance;
//Initializes the nodes
let node = [
    {
        id: 'node1',
        offsetX: 1000,
        offsetY: 100,
        width: 70,
        height: 40,
      },
];

const bringIntoView = function(){
    let nodeBounds = diagramInstance.nodes[0].wrapper.bounds;
    debugger;
    let bounds = new Rect(
      nodeBounds.x,
      nodeBounds.y,
      nodeBounds.width,
      nodeBounds.height
    );
    /**
     * parameter - bounds of region to bring into view
     */
     diagramInstance.bringIntoView(bounds);
}

//Initializes the Diagram component
function App() {
    return (<div>
        <ButtonComponent content="Bring Into View" onClick={bringIntoView}/>
        <DiagramComponent id="diagram1" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} 
        tool={ DiagramTools.ZoomPan}
         scrollSettings={{
            //Sets the scroll limit
            scrollLimit: 'Infinity',
        }} 
        /></div>); 
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}