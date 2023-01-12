import * as React from 'react';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
/**
 * File Manager folder upload sample
 */
function App() {
    let fmObj;
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let items = [{ text: 'Folder' }, { text: 'Files' }];
    function onCreated(args) {
        document.getElementById('file_tb_upload').onclick = (e) => {
            e.stopPropagation();
        };
        let drpDownBtn = new DropDownButton({
            items: items,
            select: (args) => {
                if (args.item.text === 'Folder') {
                    fmObj.uploadSettings.directoryUpload = true;
                }
                else {
                    fmObj.uploadSettings.directoryUpload = false;
                }
                setTimeout(function () {
                    let uploadBtn = document.querySelector('.e-file-select-wrap button');
                    uploadBtn.click();
                }, 100);
            },
        }, '#file_tb_upload');
    }
    return (<div>
          <div className="control-section">
              <FileManagerComponent id="file" ref={(scope) => { fmObj = scope; }} ajaxSettings={{
            url: hostUrl + "api/FileManager/FileOperations",
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        }} created={onCreated.bind(this)}>
          <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
              </FileManagerComponent>

          </div>
      </div>);
}
export default App;
