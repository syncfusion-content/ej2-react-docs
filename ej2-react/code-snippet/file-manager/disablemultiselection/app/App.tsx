
import {  DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let height: string = "375px";
  let allowMultiSelection: boolean = false;
  let showItemCheckBoxes: boolean = false;
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };

  return (
    <div className="control-section">
        <FileManagerComponent id="file" height={height} allowMultiSelection={allowMultiSelection} showItemCheckBoxes={showItemCheckBoxes} ajaxSettings={ajaxSettings} >
            <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
    </div>
  );
}
export default App;