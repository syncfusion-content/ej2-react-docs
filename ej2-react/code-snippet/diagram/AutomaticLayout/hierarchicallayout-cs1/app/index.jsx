{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, DataBinding, HierarchicalTree } from "@syncfusion/ej2-react-diagrams";

//Initialize nodes for diagram
let nodes = [
    {
        id: 'Steve-Ceo',
    },
    {
        id: 'Kevin-Manager',
    },
    {
        id: 'Peter-Manager',
    },
    {
        id: 'John-Manager',
    },
    {
        id: 'Mary-CSE',
    },
    {
        id: 'Jim-CSE',
    },
    {
        id: 'Martin-CSE',
    },
];

//Initialize connectors for diagram
let connectors = [
    {
        id: 'Steve-Ceo_Kevin-Manager',
        sourceID: 'Steve-Ceo',
        targetID: 'Kevin-Manager',
    },
    {
        id: 'Steve-Ceo_Peter-Manager',
        sourceID: 'Steve-Ceo',
        targetID: 'Peter-Manager',
    },
    {
        id: 'Peter-Manager_John-Manager',
        sourceID: 'Peter-Manager',
        targetID: 'John-Manager',
    },
    {
        id: 'Peter-Manager_Mary-CSE',
        sourceID: 'Peter-Manager',
        targetID: 'Mary-CSE',
    },
    {
        id: 'Kevin-Manager_Jim-CSE',
        sourceID: 'Kevin-Manager',
        targetID: 'Jim-CSE',
    },
    {
        id: 'Kevin-Manager_Martin-CSE',
        sourceID: 'Kevin-Manager',
        targetID: 'Martin-CSE',
    },
];

export default function App() {

    return (
        <div>
            <DiagramComponent
                id="container"
                width={"100%"}
                height={"550px"}
                nodes={nodes}
                connectors={connectors}
                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'HierarchicalTree'
                }}

                //Sets the default properties for nodes
                getNodeDefaults={(node) => {
                    node.annotations = [{ content: node.id }];
                    node.width = 100; node.height = 40;
                    return node;
                }}

                //Sets the default properties for connectors
                getConnectorDefaults={(connector) => {
                    connector.type = 'Orthogonal';
                    return connector;
                }}
            >

                {/* Inject necessary services for the diagram */}
                <Inject services={[DataBinding, HierarchicalTree]} />
            </DiagramComponent>
        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

{% endraw %}