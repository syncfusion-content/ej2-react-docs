{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, FlowchartLayout, DataBinding } from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

//Initializes data source
let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE", ReportingPerson: "Peter-Manager" },
    { Name: "Jim-CSE", ReportingPerson: "Kevin-Manager" },
    { Name: "Martin-CSE ", ReportingPerson: "Kevin-Manager" },
];

let items = new DataManager(data, new Query().take(7));

export default function App() {
    return (
        <div>
            <DiagramComponent
                id="container"
                width={'80%'}
                height={'550px'}

                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'Flowchart',
                    fixedNode: 'Steve-Ceo'
                }}

                //Configures data source for diagram
                dataSourceSettings={{
                    id: 'Name',
                    parentId: 'ReportingPerson',
                    dataManager: items,
                }}

                //Sets the default properties for nodes
                getNodeDefaults={(node) => {
                    node.width = 100;
                    node.height = 40;
                    node.annotations = [{ content: node.data.Name }];

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
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}