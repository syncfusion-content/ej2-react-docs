{% raw %}
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, Virtualization } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
/**
 * File Manager virtualization feature sample
 */
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
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
                <FileManagerComponent id="filemanager" ajaxSettings={{
            url: hostUrl + "api/FileManager/FileOperations",
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        }} view={"Details"} enableVirtualization={true} beforeSend={onBeforeSend.bind(this)} beforeImageLoad={beforeImageLoad.bind(this)} beforeDownload={beforeDownload.bind(this)}>
                <Inject services={[NavigationPane, DetailsView, Toolbar, Virtualization]}/>
                </FileManagerComponent>
            </div>
        </div>);
}
export default App;
{% endraw %}