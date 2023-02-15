{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
        id: 'Start',
        width: 100, height: 100,
        offsetX: 350, offsetY: 350,
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    }];
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={nodes} scrollSettings={{
            //Sets the scroll padding
            padding: { right: 50, bottom: 50 }
        }} getNodeDefaults={(node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}