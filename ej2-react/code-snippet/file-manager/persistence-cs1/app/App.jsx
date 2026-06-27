
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let view = "LargeIcons";
    let height = "375px";
    let enablePersistence = true;
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    function onSuccess() {
        console.log("Ajax request successful");
    }
    function onFailure() {
        console.log("Ajax request has failed");
    }
    return (<div className="control-section">
        <FileManagerComponent id="file" view={view} height={height} enablePersistence={enablePersistence} ajaxSettings={ajaxSettings} success={onSuccess} failure={onFailure}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
