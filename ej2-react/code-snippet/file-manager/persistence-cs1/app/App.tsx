
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let view: string = "LargeIcons";
  let height: string = "375px";
  let enablePersistence: boolean = true;
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };

  function onSuccess() {
    console.log("Ajax request successful");
  }
  function onFailure() {
    console.log("Ajax request has failed");
  }
  return (
    <div className="control-section">
      <FileManagerComponent id="file" view={view} height={height} enablePersistence={enablePersistence} ajaxSettings={ajaxSettings} success={onSuccess} failure={onFailure} >
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App; 