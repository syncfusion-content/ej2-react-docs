{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let nodes = [{
        id: 'node',
        width: 100, height: 100,
        offsetX: 350, offsetY: 350,
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={nodes} rulerSettings={{ showRulers: true }} scrollSettings={{
            //Sets the scroll padding
            padding: { left: 100, top: 100 }
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}