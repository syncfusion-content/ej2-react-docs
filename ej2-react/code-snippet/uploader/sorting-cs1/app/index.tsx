{% raw %}


import { FileInfo, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public initial: boolean = true;
  public path: object = {
      removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
      saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  private dropAreaRef: HTMLElement;
  public onCreated(): void {
      this.uploadObj.dropArea = this.dropAreaRef;
      this.uploadObj.dataBind();
  }
public onSelect(args: SelectedEventArgs): void {
    if (this.initial) { this.initial = false; return; }
    args.isModified = true;
    const oldFiles: FileInfo[] = this.uploadObj.getFilesData();
    const filesData: FileInfo[] = args.filesData.concat(oldFiles);
    const modifiedData: FileInfo[] = this.sortFileList(filesData);
    args.modifiedFilesData = modifiedData;
}

public sortFileList(filesData: FileInfo[]): FileInfo[] {
    const files: FileInfo[] = filesData;
    const fileNames: string[] = [];
    for (const i of files) {
        fileNames.push(i.name);
    }
    const sortedFileNames: string[] = fileNames.sort();
    const sortedFilesData: FileInfo[] = [];
    for (const name of sortedFileNames) {
        for (const i of files) {
            if (name === i.name) {
                sortedFilesData.push(i);
            }
        }
    }
    return sortedFilesData;
}
  public render(): JSX.Element {
        return (
      <div className = 'control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
      <div className='control-section row uploadpreview'>
      <div className='col-lg-9'>
      <div className='upload_wrapper' id="container">
      <div id='preview'/>
          {/* Render Uploader */}
          <UploaderComponent id='fileUpload' type='file' ref = {upload => {this.uploadObj = upload !}}
          asyncSettings = {this.path}
          selected={this.onSelect=this.onSelect.bind(this)} created={this.onCreated = this.onCreated.bind(this)}/>
      </div>
      </div>
      </div>
  </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}