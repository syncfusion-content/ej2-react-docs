import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let fileObj;
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    function toolbarCreate(args) {
        for (var i = 0; i < args.items.length; i++) {
            if (args.items[i].text === 'Custom') {
                args.items[i].prefixIcon = 'e-icons e-fe-tick';
            }
        }
    }
    function toolbarClick(args) {
        if (args.item.text === 'Custom') {
            alert('You have clicked custom toolbar item');
        }
    }
    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" view="Details" toolbarClick={toolbarClick} toolbarCreate={toolbarCreate} ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} toolbarSettings={{ items: ['NewFolder', 'Custom', 'Upload', 'Delete', 'Download', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details'] }}>
                <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
      </div>
  </div>);
}
export default App;
