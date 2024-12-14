{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, DataBinding, ImageElement,
    StackPanel, TextElement } from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

//Initializes data source
let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo", color: 'darkcyan' },
    { Name: "Peter-Manager", ReportingPerson: "Steve-Ceo", color: 'white' },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager", color: 'darkcyan' },
    { Name: "Mary-CSE", ReportingPerson: "Peter-Manager", color: 'white' },
    { Name: "Jim-CSE", ReportingPerson: "Kevin-Manager", color: 'darkcyan' },
    { Name: "Martin-CSE ", ReportingPerson: "Kevin-Manager", color: 'white' },
];

let items = new DataManager(data, new Query().take(7));

export default function App() {

    //Function to add the Template of the Node.
    function setNodeTemplate(node) {

        // Create an outer StackPanel as container to contain image and text elements
        let container = new StackPanel();
        container.width = 200;
        container.height = 60;
        container.style.fill = 'skyblue';
        container.horizontalAlignment = 'Left';
        container.orientation = 'Horizontal';
        container.id = node.data.Name + '_StackContainter';

        // Create an inner image element to displaying image
        let innerContent = new ImageElement();
        innerContent.id = node.data.Name + '_innerContent';
        innerContent.width = 40;
        innerContent.height = 40;
        innerContent.margin.left = 20;
        innerContent.style.fill = 'lightgrey';

        // Create a inner text element for displaying employee details
        let text = new TextElement();
        text.content = 'Name: ' + node.data.Name;
        text.margin = { left: 10, top: 5 };
        text.id = node.data.Name + '_textContent';
        text.style.fill = 'green';
        text.style.color = 'white';
        if (node.data.Name === 'Steve-Ceo') {
            text.style.fill = 'black';
            text.style.color = 'white';
        }

        // Add inner image and text element to the outer StackPanel
        container.children = [innerContent, text];
        return container;
    }

    return (
        <div>
            <DiagramComponent
                id="container"
                width={'80%'}
                height={'550px'}

                setNodeTemplate={setNodeTemplate}
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
                    node.width = 200;
                    node.height = 60;
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
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}