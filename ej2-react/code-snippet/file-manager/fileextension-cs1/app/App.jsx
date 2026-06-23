
import { DetailsView, FileManagerComponent, NavigationPane, Inject, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let view = "LargeIcons";
    let height = "375px";
    let showFileExtension = false;
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };
    function onBeforeFileLoad(args) {
        console.log(args.fileDetails.name + " is loading");
    }
    function onBeforeFileOpen(args) {
        console.log(args.fileDetails.name + " is opened");
    }
    return (<div className="control-section">
        <FileManagerComponent id="file" view={view} height={height} showFileExtension={showFileExtension} ajaxSettings={ajaxSettings} fileLoad={onBeforeFileLoad.bind(this)} fileOpen={onBeforeFileOpen.bind(this)}>
          <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
        </FileManagerComponent>
    </div>);
}
export default App;
