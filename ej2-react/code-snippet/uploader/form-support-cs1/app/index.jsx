{% raw %}
import { select } from '@syncfusion/ej2-base';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class Validation extends React.Component {
    uploadObj;
    dialogInstance;
    formObject;
    animationSettings = { effect: 'Zoom' };
    floatFocus(args) {
        args.target.parentElement.classList.add('e-input-focus');
    }
    floatBlur(args) {
        args.target.parentElement.classList.remove('e-input-focus');
    }
    // Dialog will be closed, while clicking on overlay
    onOverlayClick() {
        this.dialogInstance.hide();
    }
    componentDidMount() {
        const options = {
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
        this.formObject = new FormValidator('#form1', options);
    }
    onClick(args) {
        const wrapperEle = select('.e-file-select-wrap button', document);
        wrapperEle.click();
        args.preventDefault();
    }
    onSubmitClick() {
        if (this.formObject.validate()) {
            this.formObject.element.reset();
            this.dialogInstance.show();
        }
    }
    onFileSelected(args) {
        const inputElement = document.getElementById('upload');
        inputElement.value = args.filesData[0].name;
    }
    render() {
        return (<div className='control-pane'>
  <div className='control-section col-lg-12 uploadpreview'>
  <h4 className="form-title">Photo Contest</h4>
      <div className='upload_wrapper'>
      <div className="control_wrapper" id="control_wrapper">
        <form id="form1" method="post">
        <div className="form-group">
        <div className="e-float-input">
  <input type="text" id="name" name="name" onFocus={this.floatFocus} onBlur={this.floatBlur} data-msg-containerid="nameError"/>
  <span className="e-float-line"/>
  <label className="e-float-text e-label-top" htmlFor="name">Name</label>
        </div>
        <div id="nameError"/>
        </div>
        <div className="form-group">
        <div className="e-float-input">
        <input type="email" id="Email" name="email" data-msg-containerid="mailError"/>
  <span className="e-float-line"/>
  <label className="e-float-text e-label-top" htmlFor="email">Email</label>
        </div>
        <div id="mailError"/>
        </div>
        <div className="form-group">
  <div className="e-float-input">
      <input type="text" id="mobileno" name="mobile" data-msg-containerid="noError"/>
      <span className="e-float-line"/>
      <label className="e-float-text e-label-top" htmlFor="mobile">Mobile no</label>
  </div>
  <div id="noError"/>
        </div>
        <div className="form-group">
  <div className="e-float-input upload-area">
      <input type="text" readOnly={true} id="upload" name="upload" data-msg-containerid="uploadError"/>
      <button id="browse" className="e-control e-btn e-info" onClick={this.onClick}>Browse..</button>
      <span className="e-float-line"/>
      <label className="e-float-text e-label-top">Choose a file</label>
  </div>
  <div id="uploadError"/>
      <UploaderComponent id='fileUpload' type='file' ref={upload => { this.uploadObj = upload; }} selected={this.onFileSelected = this.onFileSelected.bind(this)} autoUpload={false} allowedExtensions='image/*'/>
        </div>
        <div className="form-group">
  <div className="e-float-input">
      <textarea className="address-field" id="Address" name="Address"/>
      <span className="e-float-line"/>
      <label className="e-float-text e-label-top">Address</label>
  </div>
        </div>
        </form>
    <div className="submitBtn">
          <button className="submit-btn e-btn" onClick={this.onSubmitClick = this.onSubmitClick.bind(this)} id="submit-btn">Submit</button>
      </div>
  <div id="confirmationDialog"/> </div>
        </div>
        </div>
  <DialogComponent id="defaultdialog" isModal={true} visible={false} content='Your details has been updated successfully, Thank you' animationSettings={this.animationSettings} width={'50%'} ref={dialog => this.dialogInstance = dialog} target={'.control-section'} overlayClick={this.onOverlayClick = this.onOverlayClick.bind(this)}/>
    </div>);
    }
}
ReactDOM.render(<Validation />, document.getElementById('fileupload'));
{% endraw %}