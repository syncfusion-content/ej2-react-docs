{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let fileObj: FileManagerComponent;
  
  return (
    <div className="control-section">
      <FileManagerComponent ref={s => (fileObj = s as FileManagerComponent)} id="file" height="375px" view="LargeIcons"
        ajaxSettings={{
          downloadUrl: hostUrl + 'api/FileManager/Download',
          getImageUrl: hostUrl + "api/FileManager/GetImage",
          uploadUrl: hostUrl + 'api/FileManager/Upload',
          url: hostUrl + "api/FileManager/FileOperations"
        }} uploadSettings={{ autoUpload: false }}>
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App;
{% endraw %}