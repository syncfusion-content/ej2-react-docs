{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    function onFileSelect(args) {
        console.log(args.fileDetails.name + " has been " + args.action + "ed");
    }
    return (<div className="control-section">
        <FileManagerComponent id="file" view="Details" height="375px" allowMultiSelection={true} ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} fileSelect={onFileSelect.bind(this)}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
    </div>);
}
export default App;
{% endraw %}