import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";

const nodes: NodeModel[] = [
    {
        id: 'rectangle1',
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
        annotations: [
            {
                content: 'rectangle1',
            },
        ],
    },
    {
        id: 'rectangle2',
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
        annotations: [
            {
                content: 'rectangle2',
            },
        ],
    }
];
const group: NodeModel = {
    id: 'group2',
    children: ['rectangle1', 'rectangle2']
}

function App() {
    const diagramRef = useRef(null);
    return (
        <div>
            <DiagramComponent id="diagram" ref={diagramRef} width="100%"
                height="600px" nodes={nodes}
                created={() => {
                    // Add the group into the diagram
                    diagramRef.current.add(group);
                }}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
