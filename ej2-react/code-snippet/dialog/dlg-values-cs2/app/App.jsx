import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let dialogInstance;
    let innerDialogInstance;
    let nameInput;
    let emailInput;
    let contactInput;
    let addressInput;
    const buttons = [{
            buttonModel: {
                content: 'Submit',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            'click': () => {
                dlgbuttonClick();
            }
        }];
    function handleClick() {
        dialogInstance.show();
    }
    function nestedbuttonClick() {
        innerDialogInstance.hide();
        dialogInstance.show();
    }
    function footerbuttonclick() {
        innerDialogInstance.hide();
    }
    function dialogContent() {
        return (<form>
        <div className='form-group'>
            <label>Name:</label>
            <input type='name' className='form-control' id='name' ref={n => nameInput = n}/>
        </div>
        <div className='form-group'>
            <label>Email Id:</label>
            <input type='email' placeholder='user@syncfusion.com' className='form-control' id='email' ref={e => emailInput = e}/>
        </div>
        <div className='form-group'>
            <label>Contact Number:</label>
            <input type='contact' className='form-control' id='contact' ref={c => contactInput = c}/>
        </div>
        <div className='form-group'><label>Address:</label>
            <textarea className='form-control' id='address' ref={a => addressInput = a}/>
        </div>
    </form>);
    }
    function dlgbuttonClick() {
        dialogInstance.hide();
        innerDialogInstance.content = getDynamicContent();
        innerDialogInstance.buttons = [{ click: footerbuttonclick.bind(this), buttonModel: { content: 'Yes', isPrimary: true } },
            { click: nestedbuttonClick.bind(this), buttonModel: { content: 'No', isPrimary: true } }];
        innerDialogInstance.show();
    }
    function getDynamicContent() {
        const template = "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><b>Confirm your details</b></div>" +
            "</div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='name'> Name: </span>" +
            "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='nameValue'>" + nameInput.value + "</span> </div></div>" +
            "<div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='email'> Email: </span>" +
            "</div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='emailValue'>" + emailInput.value +
            "</span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>" +
            "<span id='Contact'> Contact number: </span></div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>" +
            "<span id='contactValue'>" + contactInput.value + " </span></div></div><div class='row'><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'>" +
            "<span id='Address'> Address: </span> </div><div class='col-xs-6 col-sm-6 col-lg-6 col-md-6'><span id='AddressValue'>" + addressInput.value + "</span></div></div>";
        return template;
    }
    return (<div className="App" id='dialog-target'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>
        <DialogComponent id='dialog' width='400px' target='#dialog-target' header='Dialog' visible={false} closeOnEscape={false} showCloseIcon={true} buttons={buttons} ref={dialog => dialogInstance = dialog}>
        <div>{dialogContent()}</div>
        </DialogComponent>
        <DialogComponent id='innerDialog' header='User details' isModal={true} showCloseIcon={true} width='400px' visible={false} ref={dialog => innerDialogInstance = dialog} closeOnEscape={false} target='#dialog-target'/>
    </div>);
}
export default App;
