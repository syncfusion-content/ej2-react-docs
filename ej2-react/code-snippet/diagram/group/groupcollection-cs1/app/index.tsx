import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";

const group: NodeModel[] = [
    { id: "rectangle1", offsetX: 100, offsetY: 100, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle2", offsetX: 200, offsetY: 200, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group', children: ['rectangle1', 'rectangle2'] },
    { id: "rectangle3", offsetX: 400, offsetY: 400, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle4", offsetX: 500, offsetY: 500, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group2', children: ['rectangle3', 'rectangle4'], padding: { left: 10, right: 10, top: 10, bottom: 10 } },
];

function App() {
    const diagramRef = useRef(null);
    return (
        <div>
            <DiagramComponent id="diagram" ref={diagramRef} width="100%" height="500px"
                created={() => {
                    // Add nodes collection into the diagram
                    diagramRef.current.addElements(group);
                }}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
