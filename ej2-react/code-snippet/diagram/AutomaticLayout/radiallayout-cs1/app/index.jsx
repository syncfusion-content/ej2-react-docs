
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, DataBinding, RadialTree } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

//Initializes data source
let data = [
    {
        Id: 'parent',
        Name: 'Maria Anders',
        Designation: 'Managing Director'
    },
    {
        Id: '1',
        Name: 'Ana Trujillo',
        Designation: 'Project Manager',
        ReportingPerson: 'parent',
    },
    {
        Id: '2',
        Name: 'Lino Rodri',
        Designation: 'Project Manager',
        ReportingPerson: 'parent',
    },
    {
        Id: '3',
        Name: 'Philip Cramer',
        Designation: 'Project Manager',
        ReportingPerson: 'parent',
    },
    {
        Id: '4',
        Name: 'Pedro Afonso',
        Designation: 'Project Manager',
        ReportingPerson: 'parent',
    },
    {
        Id: '15',
        Name: 'Paul Henriot',
        Designation: 'Project Manager',
        ReportingPerson: 'parent',
    },
    {
        Id: '18',
        Name: 'Laura Callahan',
        Designation: 'Project Manager',
        ReportingPerson: 'parent',
    },
    {
        Id: '5',
        Name: 'Anto Moreno',
        Designation: 'Project Lead',
        ReportingPerson: '1',
    },
    {
        Id: '6',
        Name: 'Elizabeth Roel',
        Designation: 'Project Lead',
        ReportingPerson: '1',
    },
    {
        Id: '7',
        Name: 'Aria Cruz',
        Designation: 'Project Lead',
        ReportingPerson: '18',
    },
    {
        Id: '8',
        Name: 'Eduardo Roel',
        Designation: 'Project Lead',
        ReportingPerson: '18',
    },
    {
        Id: '9',
        Name: 'Howard Snyd',
        Designation: 'Project Lead',
        ReportingPerson: '2',
    },
    {
        Id: '10',
        Name: 'Daniel Tonini',
        Designation: 'Project Lead',
        ReportingPerson: '2',
    },
    {
        Id: '11',
        Name: 'Nardo Batista',
        Designation: 'Project Lead',
        ReportingPerson: '3',
    },
    {
        Id: '12',
        Name: 'Michael Holz',
        Designation: 'Project Lead',
        ReportingPerson: '3',
    },
    {
        Id: '13',
        Name: 'Kloss Perrier',
        Designation: 'Project Lead',
        ReportingPerson: '4',
    },
    {
        Id: '14',
        Name: 'Liz Nixon',
        Designation: 'Project Lead',
        ReportingPerson: '4',
    },
    {
        Id: '16',
        Name: 'Paula Parente',
        Designation: 'Project Lead',
        ReportingPerson: '15',
    },
    {
        Id: '17',
        Name: 'Matti Kenna',
        Designation: 'Project Lead',
        ReportingPerson: '15',
    }
];
let items = new DataManager(data, new Query().take(7));

export default function App() {
    return (
        <DiagramComponent
            id="container"
            width={"100%"}
            height={"550px"}
            snapSettings={{ constraints: 0 }}

            //Uses layout to auto-arrange nodes on the diagram page
            layout={{
                //set layout type
                type: 'RadialTree',
                root: 'parent'
            }}

            //Configures data source for diagram
            dataSourceSettings={{
                id: 'Id',
                parentId: 'ReportingPerson',
                dataSource: items
            }}

            //Sets the default properties for nodes
            getNodeDefaults={(node) => {
                node.height = 20;
                node.width = 20;
                return node;
            }}

            //Sets the default properties for connectors
            getConnectorDefaults={(connector) => {
                connector.targetDecorator.shape = 'None';
                connector.type = 'Straight';
                return connector;
            }}
        >

            {/* Inject necessary services for the diagram */}
            <Inject services={[DataBinding, RadialTree]} />
        </DiagramComponent>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
