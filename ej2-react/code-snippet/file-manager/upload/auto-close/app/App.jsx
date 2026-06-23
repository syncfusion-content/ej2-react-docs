
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let fileObj;
    let height = "375px";
    let view = "LargeIcons";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let uploadSettings = { autoClose: false };
    
    return (<div className="control-section">
        <FileManagerComponent ref={s => (fileObj = s)} id="file" height={height} view={view} 
            ajaxSettings={ajaxSettings} uploadSettings={uploadSettings}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
