import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, UndoRedo, Inject } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Rectangle'
        }],
    }];
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={nodes} created={() => {
            //Start to group the changes
            diagramInstance.startGroupAction();
            //Makes the changes
            let color = ['black', 'red', 'green', 'yellow'];
            for (var i = 0; i < color.length; i++) {
                // Updates the fillColor for all the child elements.
                diagramInstance.nodes[0].style.fill = color[i];
                diagramInstance.dataBind();
            }
            //Ends grouping the changes
            diagramInstance.endGroupAction();
        }}>
      <Inject services={[UndoRedo]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);