
import {  DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let height: string = "375px";
  let view: string = "Details";
  let allowMultiSelection: boolean = true;
  let ajaxSettings: object = {
      downloadUrl: hostUrl + 'api/FileManager/Download',
      getImageUrl: hostUrl + "api/FileManager/GetImage",
      uploadUrl: hostUrl + 'api/FileManager/Upload',
      url: hostUrl + "api/FileManager/FileOperations"
  };
  function onFileSelect(args: any) {
    console.log(args.fileDetails.name + " has been " + args.action + "ed");
  }

  return (
    <div className="control-section">
        <FileManagerComponent id="file" view={view} height={height} allowMultiSelection={allowMultiSelection} ajaxSettings={ajaxSettings} fileSelect={onFileSelect.bind(this)} >
            <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
    </div>
  );
}
export default App;