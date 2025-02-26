{% raw %}
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (<div className="control-section">
        <FileManagerComponent id="file" view="Details" height="375px" ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} detailsViewSettings={{
            columns: [
                { field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' }, template: '${name}' },
                { field: 'size', headerText: 'File Size', minWidth: 50, width: '110', template: '${size}' },
                { field: '_fm_modified', headerText: 'Date Modified', minWidth: 50, width: '190' }
            ]
        }}>
        <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
      </FileManagerComponent>
    </div>);
}
export default App;
{% endraw %}