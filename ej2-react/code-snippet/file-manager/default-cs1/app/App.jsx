{% raw %}
import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";

    return (<div className="control-section">
        <FileManagerComponent id="file" height="375px" ajaxSettings={{
            url: hostUrl + "api/FileManager/FileOperations"
        }}/>
    </div>);
}
export default App;
{% endraw %}