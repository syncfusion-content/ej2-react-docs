{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  const navigationPaneTemplate = (item: any): JSX.Element => {
    return (
      <div className="e-nav-pane-node" style={{ display: 'inline-flex', alignItems: 'center' }}>
        <span className="folder-name" style={{ marginLeft: 8 }}>{item.name}</span>
      </div>
    );
  };
  return (
    <div className="control-section">
      <FileManagerComponent id="file" height="375px" ajaxSettings={{
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
      }} navigationPaneTemplate={navigationPaneTemplate as any} >
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App; {% endraw %}