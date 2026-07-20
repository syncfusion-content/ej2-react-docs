
import { DetailsView, FileManagerComponent, NavigationPane, Inject, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let view: string = "LargeIcons";
  let height: string = "375px";
  let showFileExtension: boolean = false;
  let ajaxSettings: object = {
      downloadUrl: hostUrl + 'api/FileManager/Download',
      getImageUrl: hostUrl + "api/FileManager/GetImage",
      uploadUrl: hostUrl + 'api/FileManager/Upload',
      url: hostUrl + "api/FileManager/FileOperations"
  };

  function onBeforeFileLoad(args: any) {
    console.log(args.fileDetails.name + " is loading");
  }
  function onBeforeFileOpen(args: any) {
    console.log(args.fileDetails.name + " is opened");
  }
  return (
    <div className="control-section">
        <FileManagerComponent id="file" view={view} height={height} showFileExtension={showFileExtension} ajaxSettings={ajaxSettings} fileLoad={onBeforeFileLoad.bind(this)} fileOpen={onBeforeFileOpen.bind(this)} >
          <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>
  );
}
export default App;