{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <div className="control-section">
        <FileManagerComponent id="file" view="LargeIcons" height="375px" ajaxSettings = {{
          getImageUrl: hostUrl + "api/FileManager/GetImage",
          url: hostUrl + "api/FileManager/FileOperations"
        }} >
          <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>
  );
}
export default App;{% endraw %}