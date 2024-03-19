{% raw %}


import { SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
   public uploadObj: UploaderComponent;
  public path: object = {
      removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
      saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  private dropAreaRef: HTMLElement;
  public onCreated(): void {
      this.uploadObj.dropArea = this.dropAreaRef;
      this.uploadObj.dataBind();
  }
  public onSelected(args: SelectedEventArgs): void {
    if (args.event.type === 'drop') {
        const allImages = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
        const files = args.filesData;
        const modifiedFiles = [];
        for (const file of files) {
            if (allImages.indexOf(file.type) === -1) {
                file.status = 'File type is not allowed';
                file.statusCode = '0';
            }
            modifiedFiles.push(file);
        }
        args.isModified = true;
    }
  }
  public render(): JSX.Element {
        return (
            <div className = 'control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
                <div className='control-section row uploadpreview'>
                <div className='col-lg-9'>
                <div className='upload_wrapper'>
                    {/* Render Uploader */}
                    <UploaderComponent id='fileUpload' autoUpload = {false} type='file' ref = {upload => {this.uploadObj = upload !}}
                    asyncSettings = {this.path}
                    selected={ this.onSelected = this.onSelected.bind(this)} created={this.onCreated = this.onCreated.bind(this)} />
                </div>
                </div>
                </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}