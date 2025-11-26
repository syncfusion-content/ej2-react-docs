import { select } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public path: object = {
      removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
      saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  public browseClick(): void {
    const wrapperEle: HTMLElement = select('.e-file-select-wrap button', document) as HTMLElement;
    wrapperEle.click();
  }
  public render(): JSX.Element {
    return (
        <div className="control_wrapper">
            <div id="dropArea">
                <span id="drop"> Drop image (JPG, PNG) files here or <button className='e-btn e-control' id="browse" onClick = {this.browseClick = this.browseClick.bind(this)}>Browse</button></span>
            </div>
            <UploaderComponent ref={uplaod => {this.uploadObj = uplaod !}} asyncSettings={this.path} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));