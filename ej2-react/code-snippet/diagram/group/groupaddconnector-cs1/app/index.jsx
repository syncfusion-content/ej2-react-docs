import * as React from "react";
import * as ReactDOM from "react-dom";
import {useRef} from "react";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
const connectors = [{
    id: 'connector1', type: 'Orthogonal', sourceID: 'node1', targetID: 'node2'
},
];
const nodes = [{
    id: 'node1', height: 100, width: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
},
{
    id: 'node2', height: 100, width: 100, offsetX: 300, offsetY: 100, annotations: [{ content: 'Node2' }]
},
{
    id: 'group', children: ['node1', 'node2', 'connector1',], style: { strokeWidth: 0 }
}];
function App() {
    const diagramRef = useRef(null);
    return (<DiagramComponent id="diagram" ref={diagramRef} width={'1000px'} height={'700px'} nodes={nodes} connectors={connectors}
        created={() => {
            diagramRef.current.select([diagramRef.current.getObject('group')]);
        }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
