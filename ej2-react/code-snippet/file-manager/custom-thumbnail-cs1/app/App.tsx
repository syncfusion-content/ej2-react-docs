
import { FileManagerComponent, Inject, NavigationPane, Toolbar} from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let ajaxSettings: object = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  };
  let height: string = "375px";
  let showThumbnail: boolean = false;
  
  return (
  <div>
      <div className="control-section">
          <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} height={height} id="file" showThumbnail={showThumbnail}
              ajaxSettings={ajaxSettings} >
              <Inject services={[ NavigationPane, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;