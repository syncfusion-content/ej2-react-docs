{% raw %}
import {  DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  function onCreated(args: any) {
    console.log("File Manager has been created successfully");
  }
  return (
    <div className="control-section">
        <FileManagerComponent id="file" view="LargeIcons" height="375px" ajaxSettings = {{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
          }} created = {onCreated.bind(this)}>
            <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>
  );
}
export default App;{% endraw %}