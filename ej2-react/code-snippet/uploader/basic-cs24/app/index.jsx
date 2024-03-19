import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    // Uploader component
    const path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    return (<UploaderComponent asyncSettings={path} allowedExtensions='.doc, .docx, .xls, .xlsx'/>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
