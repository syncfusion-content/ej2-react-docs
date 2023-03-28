

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
// Uploader component
  const path: object = {
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
  }
    return (
        <UploaderComponent asyncSettings = {path} minFileSize = {10000} maxFileSize= {28400000}
        />
        )
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


