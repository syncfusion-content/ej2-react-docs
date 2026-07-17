
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };
  let contextMenuSettings: object = { 
    file: ['Open', '|', 'Details'],
    folder: ['Open', '|', 'Details'],
    layout: ['SortBy', 'View', 'Refresh', '|', 'Details', '|']
  };
  let height: string = "375px";
  let view: string = "Details";
  return (
  <div>
      <div className="control-section">
          <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" height={height} view={view} 
              ajaxSettings={ajaxSettings} 
              contextMenuSettings={contextMenuSettings} >
              <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
            </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;