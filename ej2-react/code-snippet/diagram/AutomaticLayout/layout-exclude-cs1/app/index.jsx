{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, DataBinding } from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

//Initializes data source
let data = [
    { Name: 'Steve-Ceo' },
    { Name: 'Kevin-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'Robert', ReportingPerson: 'Steve-Ceo' },
    { Name: 'Peter-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'John- Manager', ReportingPerson: 'Peter-Manager' },
    { Name: 'Mary-CSE ', ReportingPerson: 'Peter-Manager' },
    { Name: 'Jim-CSE ', ReportingPerson: 'Kevin-Manager' },
    { Name: 'Martin-CSE', ReportingPerson: 'Kevin-Manager' }
];
let items = new DataManager(data, new Query().take(7));

export default function App() {

    return (
        <div>
            <DiagramComponent
                id="container"
                width={'100%'}
                height={'550px'}

                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'HierarchicalTree',
                }}

                //Configures data source for diagram
                dataSourceSettings={{
                    id: 'Name',
                    parentId: 'ReportingPerson',
                    dataManager: items,
                }}

                //Sets the default properties for nodes
                getNodeDefaults={(node) => {
                    node.annotations = [{ content: node.data.Name }];
                    node.width = 100;
                    node.height = 40;
                    if ((node.data).Name === 'Robert') {
                        //Excludes node from layout
                        node.excludeFromLayout = true;
                        node.offsetX = 350;
                        node.offsetY = 75;
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
                <Inject services={[DataBinding, HierarchicalTree]} />
            </DiagramComponent>

        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}