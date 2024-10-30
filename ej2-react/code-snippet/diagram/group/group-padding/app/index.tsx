import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
const nodes: NodeModel[] = [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: 'Node1' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 200,
        annotations: [{ content: 'Node2' }],
    },
    {
        id: 'node3',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 300,
        annotations: [{ content: 'Node3' }],
    },
    {
        id: 'group',
        children: ['node1', 'node2', 'node3'],
        // Defines the space between the group node edges and its children
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
    }
];

function App() {
    const diagramRef = useRef(null);
    return (<DiagramComponent id="diagram" ref={diagramRef} width={'100%'} height={'600px'}
        nodes={nodes}
        created={() => {
            diagramRef.current.select([diagramRef.current.getObject('group')]);
        }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
