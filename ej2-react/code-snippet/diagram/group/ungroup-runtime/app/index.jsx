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
        annotations: [{
            content: 'rectangle1',
        }],
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
        annotations: [{
            content: 'rectangle2',
        }],
    },
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2'],
    }
];

function App() {
    const diagramRef = useRef(null);
    const unGroup = () => {
        //Ungroups the selected nodes and connectors.
        diagramRef.current.unGroup();
    }
    return (
        <div>
            <button onClick={unGroup}>UnGroup</button>
            <DiagramComponent id="diagram" ref={diagramRef} width="100%"
                height="600px" nodes={nodes}
                created={() => {
                    diagramRef.current.select([diagramRef.current.getObject('group')]);
                }}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
