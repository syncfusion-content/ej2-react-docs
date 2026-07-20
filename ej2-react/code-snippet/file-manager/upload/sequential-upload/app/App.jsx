
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://physical-service.syncfusion.com/";
    let fileObj;
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let uploadSettings = { sequentialUpload: true };
    let height = "375px";
    let view = "LargeIcons";

    return (<div className="control-section">
        <FileManagerComponent ref={s => (fileObj = s)} id="file" view={view} height={height} 
            ajaxSettings={ajaxSettings} uploadSettings={uploadSettings}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
