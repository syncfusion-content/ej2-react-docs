{% raw %}
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    onBeforeUpload(args) {
        // get the file size in bytes
        const sizeInBytes = args.fileData.size;
        // get the file size in standard format
        alert("File size is: " + this.uploadObj.bytesToSize(sizeInBytes));
    }
    render() {
        return (<UploaderComponent autoUpload={false} ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} uploading={this.onBeforeUpload = this.onBeforeUpload.bind(this)}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}