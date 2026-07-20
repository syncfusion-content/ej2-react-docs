
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let fileObj: FileManagerComponent;
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };
  let uploadSettings: object = { allowedExtensions: '.jpg,.png' };
  let height: string = "375px";
  let view: string = "LargeIcons";

  return (
    <div className="control-section">
      <FileManagerComponent ref={s => (fileObj = s as FileManagerComponent)} id="file" view={view} height={height} 
        ajaxSettings={ajaxSettings} uploadSettings={uploadSettings}>
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App;
