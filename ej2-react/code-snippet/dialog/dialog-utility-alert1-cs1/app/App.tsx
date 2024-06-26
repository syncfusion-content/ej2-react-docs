

import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public buttonClick(): void {
    DialogUtility.alert({
        animationSettings: { effect: 'Zoom' },
        closeOnEscape: true,
        content: "This is an Alert Dialog!",
        okButton: {  text: 'OK', click: this.okClick.bind(this) },
        showCloseIcon: true,
        title: 'Alert Dialog'
    });
}
public okClick(): void {
    alert('you clicked OK button');
}
public render() {
    return (
    <button className="e-control e-btn" onClick={this.buttonClick = this.buttonClick.bind(this)} id="targetButton" role="button">Open Alert Dialog</button>);
}
}
export default App;



