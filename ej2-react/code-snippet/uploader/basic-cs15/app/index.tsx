


import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
public render(){
    return (
      <UploaderComponent />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


