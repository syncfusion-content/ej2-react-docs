


import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component<{}, {}> {
// Uploader component
  public path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
public render(): JSX.Element{
    return (
            <UploaderComponent asyncSettings = {this.path}
                allowedExtensions='.doc, .docx, .xls, .xlsx'/>
         );
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


