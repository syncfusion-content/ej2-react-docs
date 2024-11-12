

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
export default class Default extends React.Component {
  public render() {
    return (<div>
      <h4> Bigger Size </h4>
  
      <TextBoxComponent
              id='default'
              placeholder="Enter Name"
              floatLabelType="Auto"
              cssClass="e-bigger"
      />
      <h4> Small Size </h4>
  
      <TextBoxComponent
              id='textboz'
              placeholder="Enter Name"
              floatLabelType="Auto"
              cssClass="e-small"
      />
      </div>)
  }
}

ReactDOM.render(<Default />, document.getElementById('input-container'));