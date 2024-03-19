{% raw %}
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
    onSelect(args) {
        let totalSize = 0;
        for (const file of args.filesData) {
            totalSize = totalSize + file.size;
        }
        const size = this.uploadObj.bytesToSize(totalSize);
        alert("Total select file's size is " + size);
    }
    render() {
        return (<div className='control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
      <div className='control-section row uploadpreview'>
      <div className='col-lg-9'>
      <div className='upload_wrapper'>
      <div id='preview'/>
          <UploaderComponent id='fileUpload' type='file' ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} selected={this.onSelect = this.onSelect.bind(this)} created={this.onCreated = this.onCreated.bind(this)}/>
      </div>
      </div>
      </div>
    </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}