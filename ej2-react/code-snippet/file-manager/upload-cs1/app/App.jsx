
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://physical-service.syncfusion.com/";
    let view = "LargeIcons";
    let height = "375px";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let uploadSettings = { maxFileSize: 233332, minFileSize: 120, autoUpload: true };

    return (<div className="control-section">
        <FileManagerComponent id="file" view={view} height={height} 
            ajaxSettings={ajaxSettings} 
            uploadSettings={uploadSettings}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
        </FileManagerComponent>
    </div>);
}
export default App;
