

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App(){
  const path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
      }
    return (
      <UploaderComponent autoUpload={false} asyncSettings={path} />
    );
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


