


import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="multiline">
            <TextBoxComponent name="disable" multiline={true} placeholder='Enter your address' floatLabelType='Auto' cssClass="sample"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('default'));


