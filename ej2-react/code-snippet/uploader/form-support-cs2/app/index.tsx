{% raw %}


import { select } from '@syncfusion/ej2-base';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { FormValidatorModel } from '@syncfusion/ej2-inputs';
import { SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function Validation(){
let uploadObj: UploaderComponent;
let dialogInstance: DialogComponent;
let formObject: FormValidator;
const animationSettings: object = { effect: 'Zoom' };
function floatFocus(args: React.FocusEvent): void {
  ((args.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
}
function floatBlur(args: any): void {
    ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
}
  // Dialog will be closed, while clicking on overlay
function onOverlayClick() {
      dialogInstance.hide();
}
React.useEffect(() => {
  const options: FormValidatorModel = {
        rules: {
        'email': {
          required: [true, '* Enter your email']
        },
        'mobile': {
          required: [true, '* Enter your mobile number']
        },
        'name': {
            required: [true, '* Enter your name']
        },
        'upload': {
            required: [true, '* Select any file']
        }
      }
    };
    formObject = new FormValidator('#form1', options);
}, []);

function onClick(args: React.MouseEvent) {
    const wrapperEle: HTMLElement = select('.e-file-select-wrap button', document) as HTMLElement;
    wrapperEle.click();
    args.preventDefault();
}

function onSubmitClick(): void {
    if(formObject.validate()) {
        formObject.element.reset();
        dialogInstance.show();
    }
}

function onFileSelected(args: SelectedEventArgs) : void {
    const inputElement:HTMLInputElement = document.getElementById('upload') as HTMLInputElement;
    inputElement.value = args.filesData[0].name;
}

return(
    <div className = 'control-pane'>
        <div className='control-section col-lg-12 uploadpreview'>
            <h4 className="form-title">Photo Contest</h4>
            <div className='upload_wrapper'>
                <div className="control_wrapper" id="control_wrapper">
                <form id="form1"  method="post">
                    <div className="form-group" >
                        <div className="e-float-input">
                            <input type="text" id="name" name="name" onFocus= {floatFocus} onBlur= {floatBlur}  data-msg-containerid="nameError" />
                            <span className="e-float-line"/>
                            <label className="e-float-text e-label-top" htmlFor="name">Name</label>
                        </div>
                    <div id="nameError"/>
                </div>
                <div className="form-group">
                    <div className="e-float-input">
                        <input type="email" id="Email" name="email" data-msg-containerid="mailError"/>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top" htmlFor="email" >Email</label>
                    </div>
                    <div id="mailError"/>
                </div>
                <div className="form-group" >
                    <div className="e-float-input">
                        <input type="text" id="mobileno" name="mobile" data-msg-containerid="noError" />
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top"  htmlFor="mobile" >Mobile no</label>
                    </div>
                    <div id="noError"/>
                </div>
                <div className="form-group" >
                    <div className="e-float-input upload-area">
                        <input type="text" readOnly={true} id="upload" name="upload" data-msg-containerid="uploadError"/>
                        <button id="browse" className="e-control e-btn e-info" onClick={onClick}>Browse..</button>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top">Choose a file</label>
                    </div>
                    <div id="uploadError"/>
                        <UploaderComponent id='fileUpload' type = 'file' ref = {upload => {uploadObj = upload !}}
                        selected={onFileSelected=onFileSelected.bind(this)}
                        autoUpload = {false}
                        allowedExtensions= 'image/*' />
                    </div>
                    <div className="form-group" >
                        <div className="e-float-input">
                            <textarea className="address-field" id="Address" name="Address"/>
                            <span className="e-float-line"/>
                            <label className="e-float-text e-label-top" >Address</label>
                        </div>
                    </div>
                </form>
                <div className="submitBtn">
                    <button className="submit-btn e-btn" onClick={onSubmitClick = onSubmitClick.bind(this)} id="submit-btn">Submit</button>
                </div>
                <div id="confirmationDialog"/> </div>
            </div>
        </div>
        <DialogComponent id="defaultdialog" isModal={true} visible ={false} content = 'Your details has been updated successfully, Thank you' animationSettings={animationSettings} width={'50%'}  ref={dialog => dialogInstance = dialog!}
        target={'.control-section'} overlayClick={onOverlayClick=onOverlayClick.bind(this)} />
    </div>
    )
}
ReactDOM.render(<Validation />, document.getElementById('fileupload'));


{% endraw %}