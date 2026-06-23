
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let height = "375px";
    let allowMultiSelection = false;
    let showItemCheckBoxes = false;
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };

    return (<div className="control-section">
        <FileManagerComponent id="file" height={height} allowMultiSelection={allowMultiSelection} showItemCheckBoxes={showItemCheckBoxes} ajaxSettings={ajaxSettings} >
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
    </div>);
}
export default App;
