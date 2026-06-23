
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let height = "375px";
    let view = "Details";
    let allowMultiSelection = true;
    let enableRangeSelection = true;
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };

    function onFileSelect(args) {
        console.log(args.fileDetails.name + " has been " + args.action + "ed");
    }
    return (<div className="control-section">
        <FileManagerComponent id="file" view={view} height={height} allowMultiSelection={allowMultiSelection} enableRangeSelection={enableRangeSelection} ajaxSettings={ajaxSettings} fileSelect={onFileSelect.bind(this)}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
    </div>);
}
export default App;
