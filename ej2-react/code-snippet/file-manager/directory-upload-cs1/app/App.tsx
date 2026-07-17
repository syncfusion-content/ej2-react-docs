
import * as React from 'react';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';
import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';

/**
 * File Manager folder upload sample
 */
function App() {
  let fmObj: FileManagerComponent;
  let hostUrl: string = "https://physical-service.syncfusion.com/";
  let items: ItemModel[] = [{ text: 'Folder' }, { text: 'Files' }];
  let height: string = "375px";
  let ajaxSettings: object = {
    url: hostUrl + "api/FileManager/FileOperations",
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    downloadUrl: hostUrl + 'api/FileManager/Download'
  };

  function onCreated(args) {
      (document.getElementById('file_tb_upload') as HTMLElement).onclick = (e) => {
        e.stopPropagation();
      };
      let drpDownBtn: DropDownButton = new DropDownButton({
          items: items,
          select: (args) => {
            if (args.item.text === 'Folder') {
              fmObj.uploadSettings.directoryUpload = true;
            } else {
              fmObj.uploadSettings.directoryUpload = false;
            }
            setTimeout(function () {
              let uploadBtn: HTMLElement = document.querySelector('.e-file-select-wrap button');
              uploadBtn.click();
            }, 100);
          },
        },
        '#file_tb_upload'
      );
  }
  return(
      <div>
          <div className="control-section">
              <FileManagerComponent id="file" ref={(scope) => { fmObj = scope as FileManagerComponent; }} height={height} ajaxSettings={ajaxSettings}
              created={onCreated.bind(this)}>
          <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
              </FileManagerComponent>

          </div>
      </div>
  );
}
export default App;
