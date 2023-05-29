

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App(){
  const path: object = {
    chunkSize: 102400,
    // set chunk size for enable the chunk upload
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'

  }
    return (
      <div className="chunkupload">
            <UploaderComponent asyncSettings={path} />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('fileupload'));


