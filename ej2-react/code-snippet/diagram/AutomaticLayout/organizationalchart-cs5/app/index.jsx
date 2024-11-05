{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, DataBinding, HierarchicalTree } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

//Initializes data source
let data = [
    { Id: 1, Role: 'General Manager' },
    { Id: 2, Role: 'Assistant Manager', Team: 1 },
    { Id: 3, Role: 'Human Resource Manager', Team: 1 },
    { Id: 4, Role: 'Design Manager', Team: 1 },
    { Id: 5, Role: 'Operation Manager', Team: 1 },
    { Id: 6, Role: 'Marketing Manager', Team: 1 },
];
let items = new DataManager(data, new Query().take(7));

export default function App() {

    return (
        <div>
            <DiagramComponent
                id="container"
                width={"100%"}
                height={"550px"}
                snapSettings={{ constraints: 0 }}

                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'OrganizationalChart',
                    // define the getLayoutInfo
                    getLayoutInfo: (node, options) => {
                        if (node.data['Role'] === 'General Manager') {
                            options.assistants.push(options.children[0]);
                            options.children.splice(0, 1);
                        }
                        if (!options.hasSubTree) {
                            options.type = 'Center';
                            options.orientation = 'Horizontal';
                        }
                    }
                }}

                //Configures data source for diagram
                dataSourceSettings={{
                    id: 'Id',
                    parentId: 'Team',
                    dataSource: items
                }}

                //Sets the default properties for nodes
                getNodeDefaults={(node) => {
                    node.annotations = [{ content: node.data.Role }];
                    node.width = 150;
                    node.height = 50;
                    return node;
                }}

                //Sets the default properties for connectors
                getConnectorDefaults={(connector) => {
                    connector.type = 'Orthogonal';
                    connector.targetDecorator.shape = 'None';
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