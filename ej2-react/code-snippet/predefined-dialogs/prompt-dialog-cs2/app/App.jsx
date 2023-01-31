import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
let dialogObj;
function App() {
    function buttonClick() {
        document.getElementById("statusText").style.display = "none";
        dialogObj = DialogUtility.confirm({
            title: 'Join Chat Group',
            width: '300px',
            content: '<p>Enter your name:</p> <input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
            okButton: { click: promptOkAction.bind(this) },
            cancelButton: { click: promptCancelAction.bind(this) },
        });
    }
    function promptOkAction() {
        let value;
        value = document.getElementById("inputEle").value;
        if (value == "") {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = "The user's input is returned as\" \" ";
            document.getElementById("statusText").style.display = "block";
        }
        else {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = "The user's input is returned as" + " " + value;
            document.getElementById("statusText").style.display = "block";
        }
    }
    function promptCancelAction() {
        dialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user canceled the prompt dialog";
        document.getElementById("statusText").style.display = "block";
    }
    return (<div className="App" id='dialog-target'>
                <ButtonComponent id="promptBtn" isPrimary onClick={buttonClick.bind(this)}>Prompt</ButtonComponent>
            <span id="statusText"></span>
        </div>);
}
export default App;
