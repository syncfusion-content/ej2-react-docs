
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + "api/FileManager/FileOperations"
  };
  let contextMenuSettings: object = { 
    file: ['Open', '|', 'Delete', 'Rename', '|', 'Details', 'Custom'],
    folder: ['Open', '|', 'Delete', 'Rename', '|', 'Details', 'Custom'],
    layout: ['SortBy', 'View', 'Refresh', '|', 'NewFolder', 'Upload', '|', 'Details', '|', 'SelectAll', 'Custom'],
  };
  let height: string = "375px";
  let view: string = "Details";
  function menuClick(args: any): void {
    if (args.item.text === 'Custom') {
        alert('You have clicked custom menu item')
    }
  }

  function menuOpen(args: any): void {
    for(const i in args.items) {
        if(args.items[i].id === fileObj.element.id +'_cm_custom') {
            args.items[i].iconCss= 'e-icons e-fe-tick';
        }
    }
  }

  return (
  <div>
      <div className="control-section">
        <FileManagerComponent ref={s => (fileObj = s as FileManagerComponent)} id="file" height={height} view={view}
          ajaxSettings={ajaxSettings}
          contextMenuSettings={contextMenuSettings}
          menuClick={menuClick} menuOpen={menuOpen} >
              <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;