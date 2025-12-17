{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  const largeIconsTemplate = (item: any): JSX.Element => {
    var formattedDate = item.dateModified
      ? new Date(item.dateModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      : '';
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span>
          <strong>{item.name}</strong>
        </span>
        <span>
          <strong>Type:</strong> {item.isFile ? 'File' : 'Folder'}
        </span>
        <span>
          <strong>Modified:</strong> {formattedDate}
        </span>
      </div>
    );
  };

  return (
    <div className="control-section">
      <FileManagerComponent id="file" cssClass="fm_template" height="375px" ajaxSettings={{
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
      }} largeIconsTemplate={largeIconsTemplate as any}>
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App; {% endraw %}