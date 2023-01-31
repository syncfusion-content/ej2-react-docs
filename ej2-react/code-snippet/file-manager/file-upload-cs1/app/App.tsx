{% raw %}
import { DetailsView, Inject, FileManagerComponent, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent,AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let fileUploadObj: UploaderComponent;
  let dialogObj: DialogComponent;
  let filemanagerObj: FileManagerComponent; 
  let animationSettings:AnimationSettingsModel = { effect: 'None' };
   // 'Uploader' will be shown, if Dialog is closed
   function dialogClose(): void {
    document.getElementById('uploadFileManager').style.display = 'block';
  }

  // 'Uploader' will be hidden, if Dialog is opened
  function dialogOpen(): void {
    document.getElementById('uploadFileManager').style.display = 'none';
  }

  // File Manager's fileOpen event function
  function onFileOpen(args: any): void {
    let file = (args as any).fileDetails;
    if (file.isFile) {
        args.cancel = true;
        if (file.size <= 0 ) { file.size = 10000; }
        fileUploadObj.files = [{name: file.name, size: file.size, type: file.type }];
        dialogObj.hide();
    }
  }

  function btnClick(): void {
    dialogObj.show();
    filemanagerObj.path ="/";
    filemanagerObj.selectedItems =[];
    filemanagerObj.refresh();
  }
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let contextmenuItems: string[] = ['Open', '|', 'Cut', 'Copy', 'Delete', 'Rename', '|', 'Details'];

  return (
    <div>
      <div className="control-section">
          <div id='uploadFileManager' className="fileupload">
              <UploaderComponent id='fileUpload' type='file' ref = {(scope) => {fileUploadObj = scope}}></UploaderComponent>
              <ButtonComponent id="openBtn"  onClick={ btnClick.bind(this) }>File Browser</ButtonComponent>
          </div>
          <div id='target' className="control-section">
              <DialogComponent width='850px' id='dialog' target={'#target'} ref={(scope) => {(dialogObj as any) = scope}} header="Select a file" showCloseIcon={true} 
                  visible={false} open={dialogOpen.bind(this)} close={dialogClose.bind(this)} animationSettings={animationSettings} >
                  <FileManagerComponent id="filemanager" ref = {(scope) => {(filemanagerObj as any) = scope}} ajaxSettings = {{
                      url: hostUrl + "api/FileManager/FileOperations",
                      getImageUrl: hostUrl + "api/FileManager/GetImage",
                      uploadUrl: hostUrl + 'api/FileManager/Upload',
                      downloadUrl: hostUrl + 'api/FileManager/Download'
                      }} allowMultiSelection={false} 
                      toolbarSettings={{ items: ['NewFolder', 'Upload', 'Delete', 'Cut', 'Copy', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details'] }} 
                      contextMenuSettings={{ file: contextmenuItems, folder: contextmenuItems }} fileOpen={onFileOpen.bind(this)}>
                  <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
                  </FileManagerComponent>
              </DialogComponent>
          </div>
      </div>
    </div>
  );
}
export default App;{% endraw %}