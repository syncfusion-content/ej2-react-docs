
import { DetailsView, FileManagerComponent, NavigationPane, Inject, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };
  let view: string = "Details";
  let height: string = "375px";

  return (
  <div>
      <div className="control-section">
          <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" view={view} height={height} 
              ajaxSettings ={ajaxSettings} >
              <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;