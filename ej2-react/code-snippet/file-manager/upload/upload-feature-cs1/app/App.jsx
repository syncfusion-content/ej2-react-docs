
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let fileObj;
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let height = "375px";
    let view = "LargeIcons";

    function onCreated() {
        fileObj.uploadObj.dropArea = null;  // Restrict file uploads by dragging them from the local file system to the File Manager.
    }
    return (<div className="control-section">
        <FileManagerComponent ref={s => (fileObj = s)} id="file" view={view} height={height} 
            ajaxSettings={ajaxSettings} 
            created={onCreated.bind(this)} >
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
