{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramTools } from "@syncfusion/ej2-react-diagrams";
let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Rectangle'
        }],
    }];
let tool = DiagramTools.ZoomPan;
function App() {
    const scrollChange= (args) => {
        console.log(args.panState);
        //Handle scrollChange event for custom logic
      };  
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} tool={tool} nodes={nodes} scrollSettings={{
            //Sets the scroll limit
            scrollLimit: 'Infinity',
        }}
        scrollChange={scrollChange} />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}