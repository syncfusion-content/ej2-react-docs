
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject, FileLoadEventArgs } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let fileNames: string[] = [
    'EJ2 File Manager.docx',
    'EJ2 File Manager.pdf',
    'File Manager PPT.pptx',
    'Documents'
  ];
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };
  let height: string = "375px";
  let view: string = "Details";

  function fileLoad(args: FileLoadEventArgs) {
    // Set the array of file names to enable selection.
    fileObj.selectedItems = fileNames;
  }
  return (
  <div>
      <div className="control-section">
          <FileManagerComponent ref={ s => ((fileObj as any) = s as FileManagerComponent)} id="file" height={height} view={view} 
              ajaxSettings={ajaxSettings} fileLoad={fileLoad}>
                <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;
