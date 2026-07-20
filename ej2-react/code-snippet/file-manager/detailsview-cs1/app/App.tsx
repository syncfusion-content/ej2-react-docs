
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };
  let detailsViewSettings: object = {
    columns: [
      { field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' }, template: '${name}' },
      { field: 'size', headerText: 'File Size', minWidth: 50, width: '110', template: '${size}' },
      { field: '_fm_modified', headerText: 'Date Modified', minWidth: 50, width: '190' }
    ]
  };
  let view: string = "Details";
  let height: string = "375px";

  return (
    <div className="control-section">
      <FileManagerComponent id="file" view={view} height={height} ajaxSettings={ajaxSettings} detailsViewSettings={detailsViewSettings}>
        <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App;