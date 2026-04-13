import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    dialogInstance;
    userName;
    password;
    buttons = [{
            buttonModel: {
                content: 'LOG IN',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            'click': () => {
                this.dialogInstance.hide();
            }
        }];
    dialogContent() {
        return (<div className="login-form">
          <div className='wrap'>
              <div id="heading"/>
              <div className="e-float-input">
                  <input id="textvalue" type="text" ref={user => this.userName = user} required={true}/>
                  <span className="e-float-line"/>
                  <label className="e-float-text">Username</label>
              </div>
              <div className="e-float-input">
                  <input id="textvalue2" type="password" ref={pwd => this.password = pwd} required={true}/>
                  <span className="e-float-line"/>
                  <label className="e-float-text">Password</label>
              </div>
          </div>
      </div>);
    }
    validation = (args) => {
        if (this.userName.value === "" && this.password.value === "") {
            args.cancel = true;
            alert("Enter the username and password");
        }
        else if (this.userName.value === "") {
            args.cancel = true;
            alert("Enter the username");
        }
        else if (this.userName.value === "") {
            args.cancel = true;
            alert("Enter the password");
        }
        else if (this.userName.value.length < 4) {
            args.cancel = true;
            alert("Username must be minimum 4 characters");
        }
        else {
            args.cancel = false;
            this.userName.value = "";
            this.password.value = "";
        }
    };
    render() {
        return (<div className="App" id='container'>
  
        <DialogComponent id="dlg-button" width='300px' isModal={true} target='#container' header='Sign In' showCloseIcon={false} closeOnEscape={false} beforeClose={this.validation} buttons={this.buttons} ref={dialog => this.dialogInstance = dialog}>
         <div>{this.dialogContent()}</div>
         </DialogComponent>
    </div>);
    }
}
export default App;
