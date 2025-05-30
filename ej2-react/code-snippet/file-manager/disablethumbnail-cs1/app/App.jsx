{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Inject, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (<div className="control-section">
        <FileManagerComponent id="file" view="LargeIcons" height="375px" showThumbnail={false} ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }}>
          <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
        </FileManagerComponent>
    </div>);
}
export default App;
{% endraw %}