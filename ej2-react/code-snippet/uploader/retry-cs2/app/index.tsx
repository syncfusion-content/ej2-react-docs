

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  const path: object = {
    // set chunk size for enable the chunk upload
    chunkSize: 102400,
    // provided the wrong url to showcase the chunk upload failure related properties.
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    // set time delay for automatic retry when chunk upload failed
    retryAfterDelay: 3000,
    // set count for automatic retry when chunk upload failed
    retryCount: 5,
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'

  }
    return (
    <div className="chunkupload">
        <UploaderComponent asyncSettings={path} />
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


