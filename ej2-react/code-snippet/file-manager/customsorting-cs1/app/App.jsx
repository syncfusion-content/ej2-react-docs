
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject, sortComparer } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl = "https://physical-service.syncfusion.com/";
  let ajaxSettings = {
    downloadUrl: hostUrl + 'api/NaturalSorting/Download',
    getImageUrl: hostUrl + "api/NaturalSorting/GetImage",
    uploadUrl: hostUrl + 'api/NaturalSorting/Upload',
    url: hostUrl + "api/NaturalSorting/FileOperations"
  };
  let detailsViewSettings = {
    columns: [
      { field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', sortComparer: sortComparer },
      { field: 'size', headerText: 'File Size', minWidth: 50, width: '110', template: '${size}' },
      { field: '_fm_modified', headerText: 'Date Modified', minWidth: 50, width: '190' }
    ]
  };
  let height = "375px";

  return (<div className="control-section">
    <FileManagerComponent id="file" height={height} ajaxSettings={ajaxSettings} detailsViewSettings={detailsViewSettings} sortComparer={sortComparer}>
      <Inject services={[NavigationPane, DetailsView, Toolbar]} />
    </FileManagerComponent>
  </div>);
}
export default App;
