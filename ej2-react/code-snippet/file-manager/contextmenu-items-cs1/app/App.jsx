
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let fileObj;
    let hostUrl = "https://physical-service.syncfusion.com/";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let contextMenuSettings = {
        file: ['Open', '|', 'Details'],
        folder: ['Open', '|', 'Details'],
        layout: ['SortBy', 'View', 'Refresh', '|', 'Details', '|']
    };
    let height = "375px";
    let view = "Details";

    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" height={height} view={view} ajaxSettings={ajaxSettings} contextMenuSettings={contextMenuSettings}>
              <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
            </FileManagerComponent>
      </div>
  </div>);
}
export default App;
