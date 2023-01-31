import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
let dialogObj;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    buttonClick() {
        document.getElementById("statusText").style.display = "none";
        dialogObj = DialogUtility.confirm({
            title: 'Delete Multiple Items',
            content: 'Are you sure you want to permanently delete these items?',
            width: '300px',
            okButton: { click: this.confirmOkAction.bind(this) },
            cancelButton: { click: this.confirmCancelAction.bind(this) }
        });
    }
    confirmOkAction() {
        dialogObj.hide();
        document.getElementById("statusText").innerHTML = " The user confirmed the dialog box";
        document.getElementById("statusText").style.display = "block";
    }
    confirmCancelAction() {
        dialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user canceled the dialog box.";
        document.getElementById("statusText").style.display = "block";
    }
    render() {
        return (<div className="App" id='dialog-target'>
       <ButtonComponent id="confirmBtn" cssClass="e-success" onClick={this.buttonClick.bind(this)}>Confirm</ButtonComponent>
       <span id="statusText"></span>
  </div>);
    }
}
export default App;
