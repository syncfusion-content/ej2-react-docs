{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, PrintAndExport, SnapConstraints } from "@syncfusion/ej2-react-diagrams";

export default function App() {
    let diagramInstance;
    let exportFormatInstance;

    // Initialize Nodes for the diagram
    let nodes = [
        {
            id: 'node1',
            width: 100,
            height: 50,
            offsetX: 100,
            offsetY: 100,
            style: { strokeColor: '#868686', fill: '#d5f5d5' },
            annotations: [{ content: 'Node 1' }],
        },
        {
            id: 'node2',
            width: 100,
            height: 75,
            offsetX: 100,
            offsetY: 225,
            shape: { type: 'Basic', shape: 'Diamond' },
            style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
            annotations: [{ content: 'Node 2' }],
        }
    ];

    //Function to export the diagram objects.
    function handleExport() {
        let exportOptions = {}
        //Sets the export format
        exportOptions.format = exportFormatInstance.value;
        exportOptions.fileName = 'Export';
        diagramInstance.exportDiagram(exportOptions);
    };

    return (
        // Initialize Diagram component
        <div>
            <label>Export as </label>
            <select id="exportFormat" onChange={handleExport} ref={(exportFormat) => (exportFormatInstance = exportFormat)}>
                <option value="PNG">PNG</option>
                <option value="JPG">JPG</option>
                <option value="SVG">SVG</option>
            </select>
            <DiagramComponent
                id="container"
                ref={(diagram) => (diagramInstance = diagram)}
                width={'100%'}
                height={'600px'}
                nodes={nodes}
                snapSettings={{ constraints: SnapConstraints.None }}
            >
                <Inject services={[PrintAndExport]} />
            </DiagramComponent>
        </div>
    );
};

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

{% endraw %}