{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject, sortComparer } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
  return (<div className="control-section">
    <FileManagerComponent id="file" height="375px" ajaxSettings={{
      downloadUrl: hostUrl + 'api/NaturalSorting/Download',
      getImageUrl: hostUrl + "api/NaturalSorting/GetImage",
      uploadUrl: hostUrl + 'api/NaturalSorting/Upload',
      url: hostUrl + "api/NaturalSorting/FileOperations"
    }} detailsViewSettings={{
      columns: [
        { field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', sortComparer: sortComparer },
        { field: 'size', headerText: 'File Size', minWidth: 50, width: '110', template: '${size}' },
        { field: '_fm_modified', headerText: 'Date Modified', minWidth: 50, width: '190' }
      ]
    }} sortComparer={sortComparer}>
      <Inject services={[NavigationPane, DetailsView, Toolbar]} />
    </FileManagerComponent>
  </div>);
}
export default App;
{% endraw %}