{% raw %}
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let fileObj;
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManagerAccess/Download',
            getImageUrl: hostUrl + 'api/FileManagerAccess/GetImage',
            uploadUrl: hostUrl + 'api/FileManagerAccess/Upload',
            url: hostUrl + 'api/FileManagerAccess/FileOperations'
        }} view={"Details"} >
              <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
      </div>
  </div>);
}
export default App;
{% endraw %}
