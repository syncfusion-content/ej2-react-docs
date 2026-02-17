import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, ImportAndExportVisio, IImportingEventArgs} from "@syncfusion/ej2-react-diagrams";
import { UploaderComponent, FileInfo } from '@syncfusion/ej2-react-inputs';

export default function App() {
  let diagramInstance: DiagramComponent;

  let uploadObject = {
      saveUrl:
        'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl:
        'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
    }
  
  async function onUploadSuccess(args) {
    let file = args.file;
    let rawFile = file.rawFile;
    const warnings = await diagramInstance.importFromVisio(rawFile, { pageIndex: 0 });
    if (warnings.length) {
      for (var i = 0; i < warnings.length - 1; i++) {
        console.warn(warnings[i]);
      }
    }
  }

  return (
    // Initialize Diagram component
    <div>
      <UploaderComponent asyncSettings={uploadObject} success={onUploadSuccess} allowedExtensions={".vsdx"} />
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={'100%'}
        height={'700px'}
        diagramImporting={
          (args: IImportingEventArgs) => {
            if (args.status === 'started') {
              // Import has started: show a loader / disable UI
            } else if (args.status === 'completed') {
              // Import completed: hide loader / enable UI
            } else if (args.status === 'failed') {
              console.error('Visio import failed.', args);
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
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);


