{% raw %}
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let fileObj;
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" view="Details" ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} contextMenuSettings={{
            file: ['Open', '|', 'Details'],
            folder: ['Open', '|', 'Details'],
            layout: ['SortBy', 'View', 'Refresh', '|', 'Details', '|']
        }}>
              <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
            </FileManagerComponent>
      </div>
  </div>);
}
export default App;
{% endraw %}