

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

  function App(){
      const path: object = {
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    }
    return (
      <UploaderComponent asyncSettings={path} />
    );
  }

ReactDOM.render(<App />, document.getElementById('fileupload'));


