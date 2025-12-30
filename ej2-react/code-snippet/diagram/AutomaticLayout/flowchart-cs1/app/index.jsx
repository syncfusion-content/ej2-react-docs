

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, DataBinding, FlowchartLayout } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";


//Initializes data source
let data = [
    {
        "id": "1",
        "name": "Start",
        "shape": "Terminator",
        "color": "#6CA0DC"
    },
    {
        "id": "2",
        "name": "Input",
        "parentId": ["1"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
    },
    {
        "id": "3",
        "name": "Decision?",
        "parentId": ["2"],
        "shape": "Decision",
        "color": "#6CA0DC"
    },
    {
        "id": "4",
        "label": ["No"],
        "name": "Process1",
        "parentId": ["3"],
        "shape": "Process",
        "color": "#6CA0DC"
    },
    {
        "id": "5",
        "label": ["Yes"],
        "name": "Process2",
        "parentId": ["3"],
        "shape": "Process",
        "color": "#6CA0DC"
    },
    {
        "id": "6",
        "name": "Output",
        "parentId": ["5"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
    },
    {
        "id": "7",
        "name": "Output",
        "parentId": ["4"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
    },
    {
        "id": "8",
        "name": "End",
        "parentId": ["6", "7"],
        "shape": "Terminator",
        "color": "#6CA0DC"
    }
];

let items = new DataManager(data, new Query().take(7));

export default function App() {

    return (
        <div>
            <DiagramComponent
                id="container"
                width={"100%"}
                height={"550px"}

                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'Flowchart'
                }}

                //Configures data source for diagram
                dataSourceSettings={{
                    id: 'id',
                    parentId: 'parentId',
                    dataSource: items
                }}

                //Sets the default properties for nodes
                getNodeDefaults={(node) => {
                    node.width = 120; node.height = 50;
                    if (node.shape.shape === 'Decision') {
                        node.height = 80;
                    }
                    return node;
                }}

                //Sets the default properties for connectors
                getConnectorDefaults={(connector) => {
                    connector.type = 'Orthogonal';
                    return connector;
                }}
            >

                {/* Inject necessary services for the diagram */}
                <Inject services={[DataBinding, FlowchartLayout]} />
            </DiagramComponent>
        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

