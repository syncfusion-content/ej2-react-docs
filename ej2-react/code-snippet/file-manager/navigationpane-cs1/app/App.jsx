{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (<div className="control-section">
        <FileManagerComponent id="file" view="LargeIcons" height="375px" ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} navigationPaneSettings={{ maxWidth: '850px', minWidth: '140px', visible: true, sortOrder: 'Ascending'}}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
        </FileManagerComponent>
    </div>);
}
export default App;
{% endraw %}