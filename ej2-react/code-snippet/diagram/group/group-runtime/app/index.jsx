import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

const nodes = [
    {
        id: 'node1', height: 100, width: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
    },
    {
        id: 'node2', height: 100, width: 100, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
    },
    {
        id: 'node3', height: 100, width: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
    },
];

function App() {
    const diagramRef = useRef(null);
    const group = () => {
        //Groups the selected nodes and connectors.
        diagramRef.current.group();
    }
    return (
        <div>
            <button onClick={group}>Group Selected Nodes</button>
            <DiagramComponent id="diagram" ref={diagramRef} width="100%"
                height="900px" nodes={nodes}
                created={() => {
                    diagramRef.current.selectAll();
                }}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
