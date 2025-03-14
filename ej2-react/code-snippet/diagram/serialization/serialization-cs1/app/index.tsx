
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel } from '@syncfusion/ej2-react-diagrams';
import { UploaderComponent, FileInfo } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function App() {
  let diagramInstance: DiagramComponent;

  // Initialize Uploader Object
  let uploadObject = {
    saveUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
  }

  // Callback function for when the upload is successful
  function onUploadSuccess(args: { file: FileInfo }) {
    var file: any = args.file.rawFile;
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = loadDiagram;
  }

  // Function to load the diagram from the uploaded file
  function loadDiagram(event: any) {
    diagramInstance.loadDiagram(event.target.result);
  }

  // Function to save the current diagram
  function saveDiagram() {
    download(diagramInstance.saveDiagram());
  }

  // Function to download the diagram data as a JSON file
  function download(data: string) {
    if ((window.navigator as any).msSaveBlob) {
      let blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
      (window.navigator as any).msSaveBlob(blob, 'Diagram.json');
    } else {
      let dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
      let a: HTMLAnchorElement = document.createElement('a');
      a.href = dataStr;
      a.download = 'Diagram.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }

  // Initialize nodes for the diagram
  let nodes: NodeModel[] = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 50,
      annotations: [{ id: 'label1', content: 'Start' }],
      shape: { type: 'Flow', shape: 'Terminator' }
    },
  ];

  return (
    // Initialize Diagram component
    <div>
      <UploaderComponent asyncSettings={uploadObject} success={onUploadSuccess} />
      <ButtonComponent content="Save Diagram" onClick={saveDiagram} />
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={nodes}
      />
    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);
