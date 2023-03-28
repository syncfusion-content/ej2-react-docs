import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let dialogInstance;
    let userName;
    let password;
    const buttons = [{
            buttonModel: {
                content: 'LOG IN',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            'click': () => {
                dialogInstance.hide();
            }
        }];
    function dialogContent() {
        return (<div className="login-form">
        <div className='wrap'>
            <div id="heading"/>
            <div className="e-float-input">
                <input id="textvalue" type="text" ref={user => userName = user} required={true}/>
                <span className="e-float-line"/>
                <label className="e-float-text">Username</label>
            </div>
            <div className="e-float-input">
                <input id="textvalue2" type="password" ref={pwd => password = pwd} required={true}/>
                <span className="e-float-line"/>
                <label className="e-float-text">Password</label>
            </div>
        </div>
    </div>);
    }
    function validation(args) {
        if (userName.value === "" && password.value === "") {
            args.cancel = true;
            alert("Enter the username and password");
        }
        else if (userName.value === "") {
            args.cancel = true;
            alert("Enter the username");
        }
        else if (userName.value === "") {
            args.cancel = true;
            alert("Enter the password");
        }
        else if (userName.value.length < 4) {
            args.cancel = true;
            alert("Username must be minimum 4 characters");
        }
        else {
            args.cancel = false;
            userName.value = "";
            password.value = "";
        }
    }
    return (<div className="App" id='container'>
        <DialogComponent id="dlg-button" width='300px' isModal={true} target='#container' header='Sign In' showCloseIcon={false} closeOnEscape={false} beforeClose={validation} buttons={buttons} ref={dialog => dialogInstance = dialog}>
        <div>{dialogContent()}</div>
        </DialogComponent>
    </div>);
}
export default App;
