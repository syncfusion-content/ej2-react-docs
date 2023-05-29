


import { FilesPropModel, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public path: object = {
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
  }
  public preloadFiles: FilesPropModel[] = [
    {name: 'Books', size: 500, type: '.png'},
    {name: 'Movies', size: 12000, type: '.pdf'},
    {name: 'Study materials', size: 500000, type: '.docx'},
  ];
  public render() {
    return (
      <UploaderComponent files={this.preloadFiles}
      asyncSettings={this.path} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


