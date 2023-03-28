


import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
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
public render(): JSX.Element {
    return (
      <div id='container'>
        <div id='droparea' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
            Drop files here to upload
        </div>
        <div id='uploadfile' >
            <UploaderComponent autoUpload={false}  ref = { upload => this.uploadObj = upload !} asyncSettings={this.path} created={this.onCreated = this.onCreated.bind(this)} />
        </div>
      </div>
    );
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


