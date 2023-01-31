


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
public userName: HTMLInputElement;
public password: HTMLInputElement;
public dialogInstance: DialogComponent;

private buttons: any = [{
    buttonModel: {
        content: 'DISMISS',
        cssClass: 'e-primary',
        isPrimary: true,
    },
    'click': () => {
        this.dialogInstance.hide();
    }
}];

public onSubmit(): void {
  this.dialogInstance.show();
}

public validation = (args: any): void => {
    if (this.userName.value === "" && this.password.value === "") {
        args.cancel= true;
        alert("Enter the username and password")
    } else if (this.userName.value === "") {
        args.cancel= true;
        alert("Enter the username")
    } else if (this.userName.value === "") {
        args.cancel= true;
        alert("Enter the password")
    } else if (this.userName.value.length < 4) {
        args.cancel= true;
        alert("Username must be minimum 4 characters")
    } else {
        args.cancel= false;
        this.userName.value = "";
        this.password.value = "";
    }
}
public onInputFocus = (args: any) => {
    if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
        args.target.parentElement.classList.add('e-input-focus');
    } else {
        args.target.parentElement.parentElement.classList.add('e-input-focus')
    }
}



public onInputBlur = (args: any) => {
    if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
    args.target.parentElement.classList.remove('e-input-focus');
    } else {
        args.target.parentElement.parentElement.classList.remove('e-input-focus');
    }
}

public render() {
    return (
    <div className='App' id='dialog-target'>
        <div className="login-form" >
            <div className='wrap'>
                <div id="heading">Sign in</div>
                <div className="e-float-input">
                    <input id="textvalue" type="text" required = {true} ref = {user => this.userName = user!} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text">Username</label>
                </div>
                <div className="e-float-input">
                    <input id="textvalue2" type="password" required = {true} ref = {pwd => this.password = pwd!} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text">Password</label>
                </div>
                <div className="button-contain">
                    <button className="e-control e-btn e-info" id="targetButton" role="button" e-ripple="true" onClick = {this.onSubmit = this.onSubmit.bind(this)}>Log in</button>
                </div>
            </div>
        </div>
    <DialogComponent id='dialog' header='Success' buttons={this.buttons} beforeOpen = {this.validation} content='Congratulations! Login Success' width='250px' isModal={true} ref={dialog => this.dialogInstance = dialog!} visible={false}
target='#dialog-target'/></div>
    )
}
}
export default App;



