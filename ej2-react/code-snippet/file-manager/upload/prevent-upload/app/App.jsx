{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let fileObj;
    function onCreated() {
        // fileObj.uploadObj.dropArea = null;  // Restrict file uploads by dragging them from the local file system to the File Manager.
    }
    return (<div className="control-section">
        <FileManagerComponent ref={s => (fileObj = s)} id="file" view="LargeIcons" created={onCreated.bind(this)}
            ajaxSettings={{
                downloadUrl: hostUrl + 'api/FileManager/Download',
                getImageUrl: hostUrl + "api/FileManager/GetImage",
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                url: hostUrl + "api/FileManager/FileOperations"
            }} uploadSettings={{ allowedExtensions: '.jpg,.png' }}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
{% endraw %}