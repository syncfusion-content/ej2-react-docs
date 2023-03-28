


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";

let dialogObj;
class App extends React.Component<{}, {}> {
constructor(props: {}) {
        super(props);
        this.state = { };
    }
public buttonClick() {
    document.getElementById("statusText").style.display = "none";
    dialogObj = DialogUtility.alert({
        title: 'Low Battery',
        width: '250px',
        content: '10% of battery remaining',
        okButton: { click: this.alertOkAction.bind(this) },
    });
}
public alertOkAction() {
    dialogObj.hide();
    document.getElementById('statusText').innerHTML =
      'The user closed the Alert dialog.';
    document.getElementById('statusText').style.display = 'block';
}
public render() {
  return (
  <div className="App" id='dialog-target'>
       <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={this.buttonClick.bind(this)}>Alert</ButtonComponent>
       <span id="statusText"></span>
  </div>);
   }
}
export default App;



