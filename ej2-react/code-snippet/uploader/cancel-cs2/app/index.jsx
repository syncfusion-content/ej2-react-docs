import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    const path = {
        // set chunk size for enable the chunk upload
        chunkSize: 102400,
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    return (<div className="chunkupload">
        <UploaderComponent asyncSettings={path}/>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
