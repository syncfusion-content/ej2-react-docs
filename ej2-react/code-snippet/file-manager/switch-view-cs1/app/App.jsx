
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';

function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let view = "LargeIcons";
    let height = "375px";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };

    function onCreated() {
        console.log("File Manager has been created successfully");
    }
    return (<div className="control-section">
        <FileManagerComponent id="file" view={view} height={height} ajaxSettings={ajaxSettings} created={onCreated}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
