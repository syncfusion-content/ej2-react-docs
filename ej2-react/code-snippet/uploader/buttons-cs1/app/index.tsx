{% raw %}


import { createElement } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public uploadEle: HTMLElement = createElement('span', { className: 'upload e-icons', innerHTML : 'Upload All' });
  public clearEle: HTMLElement = createElement('span', { className: 'remove e-icons', innerHTML : 'Clear All' });
  public path: object = {
      removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
      saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  private dropAreaRef: HTMLElement;
  public onCreated(): void {
      this.uploadObj.dropArea = this.dropAreaRef;
      this.uploadObj.dataBind();
  }

    public render(): JSX.Element {
        return (
            <div className = 'control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
                <div className='control-section row uploadpreview'>
                <div className='col-lg-9'>
                <div className='upload_wrapper'>
                <div id='preview'/>
                    {/* Render Uploader */}
                    <UploaderComponent id='fileUpload' type='file' ref = {upload => {this.uploadObj = upload !}}
                    asyncSettings = {this.path}
                autoUpload={false}  buttons={ { browse: 'Choose file', clear: this.clearEle, upload: this.uploadEle }}  created={this.onCreated = this.onCreated.bind(this)}/>
                </div>
                </div>
                </div>
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}