import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import './App.css';

function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    let ajaxSettings = {
        url: hostUrl + "api/FileManager/FileOperations"
    };
    let height = "375px";

    return (
        <FileManagerComponent id="file" height={height} ajaxSettings={ajaxSettings} />
    );
}
export default App;