

import { getUniqueID } from '@syncfusion/ej2-base';
import { UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const path: object = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    }
    function onUploadBegin(args: UploadingEventArgs): void {
        // check whether the file is uploading from paste.
        if (args.fileData.fileSource === 'paste') {
            const newName: string = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
            args.customFormData = [{'fileName': newName}];
        }
    }
        return (
            <UploaderComponent autoUpload={false}
            asyncSettings={path} uploading={onUploadBegin = onUploadBegin.bind(this)} />);
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


