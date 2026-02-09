

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, DataBinding, MindMap } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

//Initializes data source
let data = [
    { id: 1, Label: "StackPanel" },
    { id: 2, Label: "Label", parentId: 1 },
    { id: 3, Label: "ListBox", parentId: 1 },
    { id: 4, Label: "StackPanel", parentId: 2 },
    { id: 5, Label: "Border", parentId: 2 },
    { id: 6, Label: "Border", parentId: 4 },
    { id: 7, Label: "Button", parentId: 4 },
    { id: 8, Label: "ContentPresenter", parentId: 5 },
    { id: 9, Label: "Text Block", parentId: 5 },
];
let items = new DataManager(data, new Query().take(7));

export default function App() {
    return (
        <DiagramComponent
            id="container"
            width={"100%"}
            height={"550px"}

            //Uses layout to auto-arrange nodes on the diagram page
            layout={{
                //Sets layout type
                type: "MindMap",
                orientation: "Horizontal",
                getBranch: (node) => {
                    if (node.data.id === 1) {
                        return 'Root';
                    }
                    return 'Right';
                }
            }}

            //Configures data source for diagram
            dataSourceSettings={{
                id: "id",
                parentId: "parentId",
                dataManager: items,
                root: String(1),
            }}

            //Sets the default properties for nodes
            getNodeDefaults={(node) => {
                node.annotations = [{ content: node.data.Label }];
                node.width = 100; node.height = 40;
                return node;
            }}

            //Sets the default properties for connectors
            getConnectorDefaults={(connector) => {
                connector.type = "Orthogonal";
                return connector;
            }}
        >

            {/* Inject necessary services for the diagram */}
            <Inject services={[DataBinding, MindMap]} />
        </DiagramComponent>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

