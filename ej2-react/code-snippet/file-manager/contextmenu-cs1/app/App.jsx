
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let fileObj;
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let contextMenuSettings = {
        file: ['Open', '|', 'Delete', 'Rename', '|', 'Details', 'Custom'],
        folder: ['Open', '|', 'Delete', 'Rename', '|', 'Details', 'Custom'],
        layout: ['SortBy', 'View', 'Refresh', '|', 'NewFolder', 'Upload', '|', 'Details', '|', 'SelectAll', 'Custom'],
    };
    let height = "375px";
    let view = "Details";   
    function menuClick(args) {
        if (args.item.text === 'Custom') {
            alert('You have clicked custom menu item');
        }
    }
    function menuOpen(args) {
        for (const i in args.items) {
            if (args.items[i].id === fileObj.element.id + '_cm_custom') {
                args.items[i].iconCss = 'e-icons e-fe-tick';
            }
        }
    }
    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" view={view} ajaxSettings={ajaxSettings} height={height} contextMenuSettings={contextMenuSettings} menuClick={menuClick} menuOpen={menuOpen}>
              <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
      </div>
  </div>);
}
export default App;
