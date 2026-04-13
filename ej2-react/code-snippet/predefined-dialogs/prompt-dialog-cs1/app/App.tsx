


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
    dialogObj = DialogUtility.confirm({
        title: 'Join Chat Group',
      width: '300px',
      content:
        '<p>Enter your name:</p> <input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
      okButton: { click: this.promptOkAction.bind(this) },
      cancelButton: { click: this.promptCancelAction.bind(this) },
    });
}
public promptOkAction(){
    let value:string ;
    value = (document.getElementById("inputEle")as any).value;
    if (value==""){
        dialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user's input is returned as\" \" ";
        document.getElementById("statusText").style.display="block";
    }
    else{
        dialogObj.hide();
        document.getElementById("statusText").innerHTML="The user's input is returned as" +" "+ value;
        document.getElementById("statusText").style.display="block";
    }
}
public promptCancelAction(){
        dialogObj.hide();
        document.getElementById("statusText").innerHTML="The user canceled the prompt dialog";
        document.getElementById("statusText").style.display="block";
}
public render() {
  return (
  <div className="App" id='dialog-target'>
        <ButtonComponent id="promptBtn" isPrimary onClick={this.buttonClick.bind(this)}>Prompt</ButtonComponent>
       <span id="statusText"></span>
  </div>);
   }
}
export default App;



