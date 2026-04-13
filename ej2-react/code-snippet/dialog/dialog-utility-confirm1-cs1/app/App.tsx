

import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public buttonClick(): void {
    DialogUtility.confirm({
      animationSettings: { effect: 'Zoom' },
      cancelButton: {  text: 'Cancel', click: this.cancelClick.bind(this) },
      closeOnEscape: true,
      content: "This is a Confirmation Dialog!",
      okButton: {  text: 'OK', click: this.okClick.bind(this) },
      showCloseIcon: true,
      title: ' Confirmation Dialog',
    });
  }

  public okClick(): void {
    alert('you clicked OK button');
  }

  public cancelClick(): void {
    alert('you clicked Cancel button');
  }
  public render() {
  return (
    <button className="e-control e-btn" onClick={this.buttonClick = this.buttonClick.bind(this)} id="targetButton" role="button">Open Confirm Dialog</button>
  );
  }
  }
export default App;



