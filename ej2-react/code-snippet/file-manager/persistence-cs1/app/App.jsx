{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';

function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";

    function onSuccess() {
        console.log("Ajax request successful");
    }
    function onFailure() {
        console.log("Ajax request has failed");
    }
    return (<div className="control-section">
        <FileManagerComponent id="file" view="LargeIcons" height="375px" enablePersistence={true} ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} success={onSuccess} failure={onFailure}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
{% endraw %}