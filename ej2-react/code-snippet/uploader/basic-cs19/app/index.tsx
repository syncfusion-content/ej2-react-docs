


import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  public onUploadSuccess(args: any): void  {
    if (args.operation === 'upload') {
      // window.console.log('File uploaded successfully');
    }
  }
  public onUploadFailure(args: any): void  {
    // window.console.log('File failed to upload');
  }
  public render(): JSX.Element {
    return (
      <UploaderComponent autoUpload={false} asyncSettings={this.path}
      success={this.onUploadSuccess=this.onUploadSuccess.bind(this)} failure={this.onUploadFailure=this.onUploadFailure.bind(this)}/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


