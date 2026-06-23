
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {
  let fileObj: FileManagerComponent;
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let height: string = "330px";
  let view: string = "Details";
  let ajaxSettings: object = {
      downloadUrl: hostUrl + 'api/FileManager/Download',
      getImageUrl: hostUrl + "api/FileManager/GetImage",
      uploadUrl: hostUrl + 'api/FileManager/Upload',
      url: hostUrl + "api/FileManager/FileOperations"
  };
  let toolbarSettings: object = { items: ['NewFolder', 'Refresh', 'View', 'Details'] };

  function onEnable() {
    fileObj.enableToolbarItems(["newfolder"]);
  }
  function onDisable() {
    fileObj.disableToolbarItems(["newfolder"]);
  }
  return (
  <div>
      <ButtonComponent id='enable' style= {{"margin": "10px"}} onClick={onEnable.bind(this)} cssClass='e-success'>Enable New Folder toolbar item</ButtonComponent>
      <ButtonComponent id='disable' style= {{"margin": "10px"}} onClick={onDisable.bind(this)} cssClass='e-danger'>Disable New Folder toolbar item</ButtonComponent>
      <div className="control-section">
          <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" height={height} view={view} 
              ajaxSettings = {ajaxSettings}
              toolbarSettings = {toolbarSettings} >
                <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
      </div>
  </div>
  );
}
export default App;