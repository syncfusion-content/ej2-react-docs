


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App(){
    let userName: HTMLInputElement;
    let password: HTMLInputElement;
    let dialogInstance: DialogComponent;
    const buttons: any = [{
        buttonModel: {
            content: 'DISMISS',
            cssClass: 'e-primary',
            isPrimary: true,
        },
        'click': () => {
            dialogInstance.hide();
        }
    }];

function onSubmit(): void {
    dialogInstance.show();
}

function validation (args: any): void {
    if (userName.value === "" && password.value === "") {
        args.cancel= true;
        alert("Enter the username and password")
    } else if (userName.value === "") {
        args.cancel= true;
        alert("Enter the username")
    } else if (userName.value === "") {
        args.cancel= true;
        alert("Enter the password")
    } else if (userName.value.length < 4) {
        args.cancel= true;
        alert("Username must be minimum 4 characters")
    } else {
        args.cancel= false;
        userName.value = "";
        password.value = "";
    }
}

function onInputFocus(args: any) {
    if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
        args.target.parentElement.classList.add('e-input-focus');
    } else {
        args.target.parentElement.parentElement.classList.add('e-input-focus')
    }
}

function onInputBlur (args: any) {
    if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
    args.target.parentElement.classList.remove('e-input-focus');
    } else {
        args.target.parentElement.parentElement.classList.remove('e-input-focus');
    }
}

return (
    <div className='App' id='dialog-target'>
        <div className="login-form" >
            <div className='wrap'>
                <div id="heading">Sign in</div>
                <div className="e-float-input">
                    <input id="textvalue" type="text" required = {true} ref = {user => userName = user!} onFocus = {onInputFocus} onBlur = {onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text">Username</label>
                </div>
                <div className="e-float-input">
                    <input id="textvalue2" type="password" required = {true} ref = {pwd => password = pwd!} onFocus = {onInputFocus} onBlur = {onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text">Password</label>
                </div>
                <div className="button-contain">
                    <button className="e-control e-btn e-info" id="targetButton" role="button" e-ripple="true" onClick = {onSubmit.bind(this)}>Log in</button>
                </div>
            </div>
        </div>
    <DialogComponent id='dialog' header='Success' buttons={buttons} beforeOpen = {validation} content='Congratulations! Login Success' width='250px' isModal={true} ref={dialog => dialogInstance = dialog!} visible={false}
    target='#dialog-target'/></div>
);
}
export default App;



