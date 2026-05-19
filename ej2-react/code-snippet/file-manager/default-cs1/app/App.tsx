import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import './App.css';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <FileManagerComponent id="file" height="375px" ajaxSettings={{
      url: hostUrl + "api/FileManager/FileOperations"
    }} />
  );
}
export default App;