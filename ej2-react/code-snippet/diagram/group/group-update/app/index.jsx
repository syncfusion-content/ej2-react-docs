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
        style: { strokeColor: 'green' },
    },
];

function App() {
    const diagramRef = useRef(null);
    const updatePadding = () => {
        let group = diagramRef.current.getObject('group');
        //Update group padding 
        (group.padding = { left: 10, right: 10, top: 10, bottom: 10 }), group.style;
        diagramRef.current.dataBind();
    }
    const updateStyle = () => {
        let group = diagramRef.current.getObject('group');
        //Update group style 
        group.style = { fill: 'green' };
        diagramRef.current.dataBind();
    }
    return (
        <div>
            <button onClick={updatePadding}>UpdateGroupPadding</button>
            <button onClick={updateStyle}>UpdateGroupStyle</button>
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
