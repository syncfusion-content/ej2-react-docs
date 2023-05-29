import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    const path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    function onUploadSuccess(args) {
        if (args.operation === 'upload') {
            // window.console.log('File uploaded successfully');
        }
    }
    function onUploadFailure(args) {
        // window.console.log('File failed to upload');
    }
    return (<UploaderComponent autoUpload={false} asyncSettings={path} success={onUploadSuccess = onUploadSuccess.bind(this)} failure={onUploadFailure = onUploadFailure.bind(this)}/>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
