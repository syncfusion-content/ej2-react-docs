

import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
      return (
        <div>
          <br/><MaskedTextBoxComponent name="mask_value" mask='999-99999' value= "342-45432" type="tel"/>
        </div>
      );
  }
};
ReactDOM.render(<App />, document.getElementById('masktextbox'));



