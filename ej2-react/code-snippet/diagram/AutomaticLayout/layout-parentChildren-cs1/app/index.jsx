{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, DataBinding, NodeConstraints,
    randomId, SymbolPaletteComponent } from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

//Initializes data source
let data = [
    { Name: 'Steve-Ceo' },
    { Name: 'Kevin-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'Peter-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'John-Manager', ReportingPerson: 'Peter-Manager' },
    { Name: 'Mary-CSE ', ReportingPerson: 'Peter-Manager' },
    { Name: 'Jim-CSE ', ReportingPerson: 'Kevin-Manager' },
    { Name: 'Martin-CSE', ReportingPerson: 'Kevin-Manager' }
];

let items = new DataManager(data, new Query().take(7));

//Initialize shapes for symbol palette
let palettes = [
    {
        title: 'Basic shapes',
        id: 'basicShapes',
        symbols: [
            {
                id: 'Node',
                width: 100,
                height: 50,
                data: { Name: 'New Node' },
            },
        ],
    },
];

export default function App() {
    let diagramInstance;

    // Handle drop event that create a connection between the source and target item
    function drop(args) {
        setTimeout(() => {
            //Argument element is used to get the dropped node.
            let node = args.element;
            let bottomNode = args.target;
            //Gets the connector that connected to dropped node
            let edges = diagramInstance.getEdges(node);
            if (edges && edges.length > 0) {
                let connector = diagramInstance.getObject(edges[0]);
                //Argument target is used to get the hovered node
                connector.sourceID = args.target.id;
                diagramInstance.dataBind();
            } else {
                let newCon = {
                    id: 'newcon' + randomId(),
                    sourceID: args.target.id,
                    targetID: args.element.id,
                };
                if (newCon.sourceID === undefined || newCon.sourceID === 'container') {
                    newCon.sourceID = diagramInstance.nodes[0].id;
                }
                diagramInstance.dataBind();
                diagramInstance.add(newCon);
            }
            diagramInstance.doLayout();
        }, 100);
    }

    return (
        <div>
            <div style={{ height: "600px", width: "30%", float: "left" }}>
                <SymbolPaletteComponent
                    id='symbolPalette'
                    width={'100%'}
                    height={'550px'}
                    palettes={palettes}
                /></div>

            <DiagramComponent
                id="container"
                width={'70%'}
                height={'550px'}
                ref={(diagram) => (diagramInstance = diagram)}
                // Event Triggers when a symbol is dragged and dropped from symbol palette
                drop={drop}
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
                    node.width = 100;
                    node.height = 40;
                    node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;

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