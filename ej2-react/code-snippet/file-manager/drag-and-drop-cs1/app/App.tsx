import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  // File Manager Drag start event
  function onFileDragStart(args: any) {
    console.log("File Drag Start");
  }
  // File Manager Drag start event
  function onFileDragStop(args: any) {
    console.log("File Drag Stop");
  }
  // File Manager Drag start event
  function onFileDragging(args: any) {
    console.log("File Dragging");
  }
  // File Manager Drag start event
  function onFileDropped(args: any) {
    console.log("File Dropped");
  }
  return (
  <div>
      <div className="control-section">
          <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" allowDragAndDrop={true}
              ajaxSettings = {{
                downloadUrl: hostUrl + 'api/FileManager/Download',
                getImageUrl: hostUrl + "api/FileManager/GetImage",
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                url: hostUrl + "api/FileManager/FileOperations"
              }} fileDragStart={onFileDragStart.bind(this)} fileDragStop={onFileDragStop.bind(this)}  fileDragging={onFileDragging.bind(this)} fileDropped={onFileDropped.bind(this)}>
              <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;