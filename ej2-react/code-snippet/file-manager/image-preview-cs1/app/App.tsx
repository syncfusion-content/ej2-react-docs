
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let view: string = "LargeIcons";
  let height: string = "375px";
  let ajaxSettings: object = {
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    url: hostUrl + "api/FileManager/FileOperations"
  };
  return (
    <div className="control-section">
      <FileManagerComponent id="file" view={view} height={height} ajaxSettings={ajaxSettings} >
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App; 