import {  DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar} from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
  <div>
      <div className="control-section">
          <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" 
              ajaxSettings = {{
                downloadUrl: hostUrl +'api/FileAccess/Download',
                getImageUrl: hostUrl +'api/FileAccess/GetImage',
                uploadUrl: hostUrl +'api/FileAccess/Upload',
                url: hostUrl + 'api/FileAccess/FileOperations'         
              }} >
              <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;