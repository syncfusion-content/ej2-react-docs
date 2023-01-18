


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
public dialogInstance: DialogComponent;
public innerDialogInstance: DialogComponent;
public nameInput: HTMLInputElement;
public emailInput: HTMLInputElement;
public contactInput: HTMLInputElement;
public addressInput: HTMLTextAreaElement;

public buttons: any = [{
    buttonModel: {
        content: 'Submit',
        cssClass: 'e-flat',
        isPrimary: true,
    },
    'click': () => {
        this.dlgbuttonClick();
    }
}];

public handleClick() {
    this.dialogInstance.show();
}

public nestedbuttonClick() {
    this.innerDialogInstance.hide();
    this.dialogInstance.show();
}

public footerbuttonclick() {
    this.innerDialogInstance.hide();
}

public dialogContent(): JSX.Element {
  return (
    <form>
        <div className='form-group'>
            <label>Name:</label>
            <input type='name' className='form-control' id='name' ref={n => this.nameInput = n!}/>
        </div>
        <div className='form-group'>
            <label>Email Id:</label>
            <input type='email' placeholder='user@syncfusion.com' className='form-control' id='email'  ref={e => this.emailInput = e!}/>
        </div>
        <div className='form-group'>
            <label>Contact Number:</label>
            <input type='contact' className='form-control' id='contact'  ref={c => this.contactInput = c!} />
        </div>
        <div className='form-group'><label>Address:</label>
            <textarea className='form-control' id='address'  ref={a => this.addressInput = a!}/>
        </div>
    </form>
  )
}

public dlgbuttonClick() {
    this.dialogInstance.hide();
    this.innerDialogInstance.content = this.getDynamicContent();
    this.innerDialogInstance.buttons = [{click: this.footerbuttonclick.bind(this), buttonModel: { content: 'Yes', isPrimary: true }},
    {click: this.nestedbuttonClick.bind(this), buttonModel: { content: 'No', isPrimary: true }}];
    this.innerDialogInstance.show();
}

public getDynamicContent() {
    const template: string = "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><b>Confirm your details</b></div>" +
    "</div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='name'> Name: </span>" +
    "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='nameValue'>"+ this.nameInput.value + "</span> </div></div>" +
    "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='email'> Email: </span>" +
    "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='emailValue'>" + this.emailInput.value +
    "</span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
    "<span id='Contact'> Contact number: </span></div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
    "<span id='contactValue'>"+ this.contactInput.value +" </span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>"+
    "<span id='Address'> Address: </span> </div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='AddressValue'>" + this.addressInput.value +"</span></div></div>"
    return template;
}

public render() {
  return (
  <div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>

      <DialogComponent id='dialog' width='400px' target='#dialog-target' header='Dialog' visible={false} closeOnEscape={false}
      showCloseIcon={true}  buttons={this.buttons} ref={dialog => this.dialogInstance = dialog!}>
        <div>{this.dialogContent()}</div>
      </DialogComponent>

      <DialogComponent id='innerDialog'
            header='User details' isModal={true} showCloseIcon={true}
            width='400px' visible={false}
            ref={dialog => this.innerDialogInstance = dialog!}
            closeOnEscape={false} target='#dialog-target'/>
  </div>);
}
}
export default App;



