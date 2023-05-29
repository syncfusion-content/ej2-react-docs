

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public path: object = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
  }
  public render(): JSX.Element {
    return (
      <UploaderComponent asyncSettings={this.path} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


