import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    dropAreaRef;
    onCreated() {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }
    render() {
        return (<div id='container'>
        <div id='droparea' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
            Drop files here to upload
        </div>
        <div id='uploadfile'>
            <UploaderComponent autoUpload={false} ref={upload => this.uploadObj = upload} asyncSettings={this.path} created={this.onCreated = this.onCreated.bind(this)}/>
        </div>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
