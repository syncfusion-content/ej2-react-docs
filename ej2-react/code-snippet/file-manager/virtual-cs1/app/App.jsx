
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, Virtualization } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
/**
 * File Manager virtualization feature sample
 */
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let height = "375px";
    let view = "Details";
    let enableVirtualization = true;
    let ajaxSettings = {
        url: hostUrl + "api/Virtualization/FileOperations",
        getImageUrl: hostUrl + "api/Virtualization/GetImage",
        uploadUrl: hostUrl + 'api/Virtualization/Upload',
        downloadUrl: hostUrl + 'api/Virtualization/Download'
    };
    function onBeforeSend(args) {
        args.ajaxSettings.beforeSend = function (args) {
            args.httpRequest.setRequestHeader('Authorization', 'FileBrowser');
        };
    }
    function beforeImageLoad(args) {
        args.imageUrl = args.imageUrl + '&rootName=' + 'FileBrowser';
    }
    function beforeDownload(args) {
        args.data.rootFolderName = 'FileBrowser';
    }
    return (<div>
            <div className="control-section">
                <FileManagerComponent id="filemanager" height={height} 
                    ajaxSettings={ajaxSettings} 
                    view={view} 
                    enableVirtualization={enableVirtualization} 
                    beforeSend={onBeforeSend.bind(this)} 
                    beforeImageLoad={beforeImageLoad.bind(this)} 
                    beforeDownload={beforeDownload.bind(this)}>
                    <Inject services={[NavigationPane, DetailsView, Toolbar, Virtualization]}/>
                </FileManagerComponent>
            </div>
        </div>);
}
export default App;
