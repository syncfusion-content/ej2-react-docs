import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    onUploadSuccess(args) {
        if (args.operation === 'upload') {
            // window.console.log('File uploaded successfully');
        }
    }
    onUploadFailure(args) {
        // window.console.log('File failed to upload');
    }
    render() {
        return (<UploaderComponent autoUpload={false} asyncSettings={this.path} success={this.onUploadSuccess = this.onUploadSuccess.bind(this)} failure={this.onUploadFailure = this.onUploadFailure.bind(this)}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
