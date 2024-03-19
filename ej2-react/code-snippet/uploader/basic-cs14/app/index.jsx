import { getUniqueID } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    const path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    function onUploadBegin(args) {
        // check whether the file is uploading from paste.
        if (args.fileData.fileSource === 'paste') {
            const newName = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
            args.customFormData = [{ 'fileName': newName }];
        }
    }
    return (<UploaderComponent autoUpload={false} asyncSettings={path} uploading={onUploadBegin = onUploadBegin.bind(this)}/>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
