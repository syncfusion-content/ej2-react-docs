{% raw %}
import {  DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar} from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  function onBeforeSend(args) {
    args.ajaxSettings.beforeSend = function (args) {
        args.httpRequest.setRequestHeader('Authorization', 'Access control');
    };
  }
  return (
  <div>
      <div className="control-section">
          <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" 
              ajaxSettings = {{
                downloadUrl: hostUrl +'api/FileManager/Download',
                getImageUrl: hostUrl +'api/FileManager/GetImage',
                uploadUrl: hostUrl +'api/FileManager/Upload',
                url: hostUrl + 'api/FileManager/FileOperations'         
              }} view={"Details"} beforeSend={onBeforeSend.bind(this)} >
              <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;{% endraw %}
