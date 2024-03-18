{% raw %}



import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public path: object = {
      removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
      saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  public uploadFirst(): void {
    if(!isNullOrUndefined(this.uploadObj.getFilesData()[0])) {
        this.uploadObj.upload(this.uploadObj.getFilesData()[0]);
    }
  }
  public uploadAll(): void {
    this.uploadObj.upload(this.uploadObj.getFilesData());
  }
  public render(): JSX.Element {
    return (
      <div id='container'>
        <div className="control_wrapper">
            <UploaderComponent autoUpload={false} ref = {upload => {this.uploadObj = upload !}} asyncSettings={this.path} />
        </div>
        <span className="upload-buttons">
            <button id='first' className='e-btn e-control' onClick={this.uploadFirst = this.uploadFirst.bind(this)}>Upload first file</button>
        </span>
        <span className="upload-buttons">
            <button id='full' className='e-btn e-control' onClick={this.uploadAll = this.uploadAll.bind(this)}>Upload all files</button>
        </span>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}