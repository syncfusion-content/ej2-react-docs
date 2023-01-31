


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";

let dialogObj;
function App(){
    function buttonClick() {
        document.getElementById("statusText").style.display = "none";
        dialogObj = DialogUtility.confirm({
            title: 'Delete Multiple Items',
            content: 'Are you sure you want to permanently delete these items?',
            width: '300px',
            okButton: { click: confirmOkAction.bind(this) },
            cancelButton: { click: confirmCancelAction.bind(this) }
        });
    }
    function confirmOkAction() {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = " The user confirmed the dialog box";
            document.getElementById("statusText").style.display = "block";
    }
    function confirmCancelAction() {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = "The user canceled the dialog box.";
            document.getElementById("statusText").style.display = "block";
    }

    return (
        <div className="App" id='dialog-target'>
            <ButtonComponent id="confirmBtn" cssClass="e-success" onClick={buttonClick.bind(this)}>Confirm</ButtonComponent>
            <span id="statusText"></span>
        </div>
    );

}
export default App;



