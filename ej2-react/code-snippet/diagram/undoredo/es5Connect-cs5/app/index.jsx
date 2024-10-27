import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, UndoRedo, Inject } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Node'
        }],
    }];
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={nodes} 
        created={() => {
            // canLog decide whether the entry add or not in history List
            diagramInstance.historyManager.canLog = function (entry) {
                entry.cancel = false;
                return entry;
            };
        }}
        >
      <Inject services={[UndoRedo]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);