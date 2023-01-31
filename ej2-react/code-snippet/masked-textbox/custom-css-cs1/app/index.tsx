

import { MaskedTextBoxComponent, MaskFocusEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.onfocus = this.onfocus.bind(this);
  }
  public onfocus(args: MaskFocusEventArgs) {
      // sets cursor position at start of MaskedTextBox
      args.selectionEnd= args.selectionStart;
  }
  public render() {
      return (
        <div>
          <br/>
          <MaskedTextBoxComponent id="mask1" name="mask_value" placeholder="Enter user ID" floatLabelType='Always' mask= "00000" cssClass="e-style" value= "42648" focus={this.onfocus}/>
        </div>
      );
  }
};
ReactDOM.render(<App />, document.getElementById('masktextbox'));



