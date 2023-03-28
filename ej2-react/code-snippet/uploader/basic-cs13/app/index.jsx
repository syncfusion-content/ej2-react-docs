import { getUniqueID } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    onUploadBegin(args) {
        // check whether the file is uploading from paste.
        if (args.fileData.fileSource === 'paste') {
            const newName = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
            args.customFormData = [{ 'fileName': newName }];
        }
    }
    render() {
        return (<UploaderComponent autoUpload={false} asyncSettings={this.path} uploading={this.onUploadBegin = this.onUploadBegin.bind(this)}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
