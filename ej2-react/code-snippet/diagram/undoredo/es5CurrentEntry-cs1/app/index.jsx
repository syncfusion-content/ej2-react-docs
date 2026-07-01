
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, UndoRedo, Inject } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
        id: 'Start',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{
            id: 'label1',
            content: 'Perform interaction with node to get current entry'
        }],
    }];
function App() {
    const historyChange = () => {
        //To get current entry
        console.log(diagramInstance.historyManager.currentEntry);
    };
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={nodes} historyChange={historyChange}>
      <Inject services={[UndoRedo]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
