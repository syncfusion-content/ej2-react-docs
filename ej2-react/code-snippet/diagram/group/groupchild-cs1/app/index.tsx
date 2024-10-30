import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";

const nodes: NodeModel[] = [
    {
        id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
    }, {
        id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
    }, {
        id: 'group1', children: ['node1', 'node2']
    }, {
        id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
    }
];

function App() {
    const diagramRef = useRef(null);
    const addChild = () => {
        // Adds the specified diagram object to the specified group node.
        /**
         * parameter 1 - The group node to which the diagram object will be added.
         * parameter 2 - The diagram object to be added to the group.
         */
        diagramRef.current.addChildToGroup(
            diagramRef.current.getObject('group1'),
            'node3'
        );
    }
    const removeChild = () => {
        // Removes the specified diagram object from the specified group node.
        /**
         * parameter 1 - The group node from which the diagram object will be removed.
         * parameter 2 - The diagram object to be removed from the group.
         */
        diagramRef.current.removeChildFromGroup(
            diagramRef.current.getObject('group1'),
            'node3'
        );
    }
    return (
        <div>
            <button onClick={addChild}>AddChildToGroup</button>
            <button onClick={removeChild}>RemoveChildFromGroup</button>
            <DiagramComponent id="diagram" ref={diagramRef} width="100%" height="600px" nodes={nodes}
                created={() => {
                    diagramRef.current.select([diagramRef.current.getObject('group')]);
                }}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);