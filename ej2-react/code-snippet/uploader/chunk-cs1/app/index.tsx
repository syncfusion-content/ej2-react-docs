


import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public path: object = {
    chunkSize: 102400,
    // set chunk size for enable the chunk upload
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'

  }
  public render(): JSX.Element {
    return (
      <div className="chunkupload">
            <UploaderComponent asyncSettings={this.path} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


