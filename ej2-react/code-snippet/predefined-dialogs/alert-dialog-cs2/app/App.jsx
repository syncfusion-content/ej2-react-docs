import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
let dialogObj;
function App() {
    function buttonClick() {
        document.getElementById("statusText").style.display = "none";
        dialogObj = DialogUtility.alert({
            title: 'Low Battery',
            width: '250px',
            content: '10% of battery remaining',
            okButton: { click: alertOkAction.bind(this) },
        });
    }
    function alertOkAction() {
        dialogObj.hide();
        document.getElementById('statusText').innerHTML =
            'The user closed the Alert dialog.';
        document.getElementById('statusText').style.display = 'block';
    }
    return (<div className="App" id='dialog-target'>
            <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={buttonClick.bind(this)}>Alert</ButtonComponent>
            <span id="statusText"></span>
        </div>);
}
export default App;
