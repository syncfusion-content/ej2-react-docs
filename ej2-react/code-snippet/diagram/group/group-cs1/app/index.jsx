import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
const nodes = [
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
    },
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2'],
    },
];
const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.strokeColor = "White";
    return node;
}
function App() {
    const diagramRef = useRef(null);
    return (<DiagramComponent id="diagram" ref={diagramRef} width={'1000px'} height={'600px'}
        nodes={nodes} getNodeDefaults={getNodeDefaults}
        created={() => {
            diagramRef.current.select([diagramRef.current.getObject('group')]);
        }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
