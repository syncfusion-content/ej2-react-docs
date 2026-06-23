
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let fileObj;
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let height = "375px";
    let view = "Details";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let toolbarSettings = { items: ['NewFolder', 'Refresh', 'View', 'Details'] };

    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" view={view} height={height} ajaxSettings={ajaxSettings} toolbarSettings={toolbarSettings}>
                <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
      </div>
  </div>);
}
export default App;
