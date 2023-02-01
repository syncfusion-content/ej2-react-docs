{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Rect, DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
                id: 'label1',
                content: 'Start'
            }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    }];
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={nodes} scrollSettings={{
            //Sets the scroll limit
            scrollLimit: 'Infinity',
            //Sets the scrollable Area
            scrollableArea: new Rect(0, 0, 500, 500),
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