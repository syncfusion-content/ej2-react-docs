{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, ImportAndExportVisio } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance;

  let nodes = [
    {
      id: 'Start',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 200,
      annotations: [
        {
          content: 'Start',
        }
      ],
      ports: [{
        id: 'port1',
        offset: {
          x: 1,
          y: 0.5
        }
      }],
      style: { fill: '#2AA8D9', strokeColor: 'grey' }
    },
    {
      id: 'End',
      width: 100,
      height: 100,
      offsetX: 600,
      offsetY: 200,
      annotations: [
        {
          content: 'End',

        }
      ],
      style: { fill: '#2AA8D9', strokeColor: 'grey' }
    }
  ];

  let connectors = [
    {
      id: 'connector1',
      sourceID: 'Start',
      sourcePortID: 'port1',
      targetID: 'End',
      annotations: [
        {
          content: 'Connect',
          alignment: 'Before',
          displacement: { y: 10 },
        }
      ]
    }
  ];

  function exportVisio() {
    let exportOptions = {};
    exportOptions.fileName = 'diagram1.vsdx';
    exportOptions.pageName = 'page1';
    diagramInstance.exportToVisio(exportOptions);
  };

  return (
    // Initialize Diagram component
    <div>
      <button id="export" onClick={exportVisio}>Export</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'700px'}
        nodes={nodes}
        connectors={connectors}
        diagramExporting={
          (args) => {
            if (args.status === 'started') {
              // Export has started: show a loader / disable UI
            } else if (args.status === 'completed') {
              // Export completed: hide loader / enable UI
            } else if (args.status === 'failed') {
              console.error('Visio export failed.', args);
            }
          }
        }
      >
        <Inject services={[ImportAndExportVisio]} />
      </DiagramComponent>
    </div>
  );
};

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

{% endraw %}