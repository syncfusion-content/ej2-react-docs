import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject, SuccessEventArgs, FailureEventArgs  } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  function onSuccess(args: SuccessEventArgs) {
    console.log("Ajax request successful");
  }
  function onFailure(args: FailureEventArgs) {
    console.log("Ajax request has failed");
  }
  return (
    <div className="control-section">
        <FileManagerComponent id="file" view="LargeIcons" enablePersistence={true} ajaxSettings = {{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
          }} success={onSuccess.bind(this)} failure={onFailure.bind(this)} >
            <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>
  );
}
export default App;