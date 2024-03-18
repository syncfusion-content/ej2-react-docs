

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  const path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  function onUploadSuccess(args: any): void  {
    if (args.operation === 'upload') {
      // window.console.log('File uploaded successfully');
    }
  }
  function onUploadFailure(args: any): void  {
    // window.console.log('File failed to upload');
  }
    return (
      <UploaderComponent autoUpload={false} asyncSettings={path}
      success={onUploadSuccess=onUploadSuccess.bind(this)} failure={onUploadFailure=onUploadFailure.bind(this)}/>
    );
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


