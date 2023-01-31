{% raw %}


import { UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public path: object = {
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
  }
  public onBeforeUpload(args: UploadingEventArgs): void {
    // get the file MIME type
    alert("File MIME type is: " + (args.fileData.rawFile as Blob).type);
  }
  public render() {
    return (
     <UploaderComponent autoUpload={false} ref = {upload => {this.uploadObj = upload !}} asyncSettings={this.path} uploading={this.onBeforeUpload = this.onBeforeUpload.bind(this)} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}