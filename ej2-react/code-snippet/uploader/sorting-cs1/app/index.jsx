{% raw %}
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    initial = true;
    path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    dropAreaRef;
    onCreated() {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }
    onSelect(args) {
        if (this.initial) {
            this.initial = false;
            return;
        }
        args.isModified = true;
        const oldFiles = this.uploadObj.getFilesData();
        const filesData = args.filesData.concat(oldFiles);
        const modifiedData = this.sortFileList(filesData);
        args.modifiedFilesData = modifiedData;
    }
    sortFileList(filesData) {
        const files = filesData;
        const fileNames = [];
        for (const i of files) {
            fileNames.push(i.name);
        }
        const sortedFileNames = fileNames.sort();
        const sortedFilesData = [];
        for (const name of sortedFileNames) {
            for (const i of files) {
                if (name === i.name) {
                    sortedFilesData.push(i);
                }
            }
        }
        return sortedFilesData;
    }
    render() {
        return (<div className='control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
      <div className='control-section row uploadpreview'>
      <div className='col-lg-9'>
      <div className='upload_wrapper' id="container">
      <div id='preview'/>
          {/* Render Uploader */}
          <UploaderComponent id='fileUpload' type='file' ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} selected={this.onSelect = this.onSelect.bind(this)} created={this.onCreated = this.onCreated.bind(this)}/>
      </div>
      </div>
      </div>
  </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}