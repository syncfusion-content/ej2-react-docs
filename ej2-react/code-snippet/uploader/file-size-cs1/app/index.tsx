{% raw %}


import { SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component<{}, {}> {
public uploadObj: UploaderComponent;
  public path: object = {
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
  }
  private dropAreaRef: HTMLElement;
  public onCreated(): void {
      this.uploadObj.dropArea = this.dropAreaRef;
      this.uploadObj.dataBind();
  }
  public onSelect(args: SelectedEventArgs): void {
    let totalSize: number = 0;
    for (const file of args.filesData) {
        totalSize = totalSize + file.size;
    }
    const size: string = this.uploadObj.bytesToSize(totalSize);
    alert("Total select file's size is " + size);
  }

    public render(): JSX.Element {
        return (
        <div className = 'control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
      <div className='control-section row uploadpreview'>
      <div className='col-lg-9'>
      <div className='upload_wrapper'>
      <div id='preview' />
          <UploaderComponent id='fileUpload' type='file' ref = {upload => {this.uploadObj = upload !}}
          asyncSettings = {this.path}
          selected={ this.onSelect=this.onSelect.bind(this)} created={this.onCreated = this.onCreated.bind(this)} />
      </div>
      </div>
      </div>
    </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}