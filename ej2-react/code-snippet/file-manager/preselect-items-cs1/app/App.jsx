{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let fileObj;
    let fileNames = [
        'Documents',
        'EJ2 File Manager.docx',
        'EJ2 File Manager.pdf',
        'File Manager PPT.pptx'
      ];
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/"; 
    function fileLoad(args) {
        // Set the array of file names to enable selection.
        fileObj.selectedItems = fileNames;
    }
    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" view="Details" ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} fileLoad={fileLoad}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
      </div>
  </div>);
}
export default App;
{% endraw %}