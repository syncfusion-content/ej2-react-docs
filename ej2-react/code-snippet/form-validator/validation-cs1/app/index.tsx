

import { select } from '@syncfusion/ej2-base';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Validation extends React.Component<{}, {}> {
public dialogInstance: DialogComponent;
public formObject: FormValidator;
private animationSettings: object = { effect: 'Zoom' };
public floatFocus(args: any): void {
  args.target.parentElement.classList.add('e-input-focus');
}
public floatBlur(args: any): void {
  args.target.parentElement.classList.remove('e-input-focus');
}
  // Dialog will be closed, while clicking on overlay
  public onOverlayClick() {
        this.dialogInstance.hide();
  }
  public componentDidMount(): void {
        const options: FormValidatorModel = {
          // add the rules for validation
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
        }
      };
      // initialize the form validator
      this.formObject = new FormValidator('#form1', options);
  }

  public onSubmitClick(): void {
  if(this.formObject.validate()) {
    this.formObject.element.reset();
    this.dialogInstance.show();
      }
  }

public render(): JSX.Element {
  return (    <div className = 'control-pane'>
    <div className='control-section col-lg-12'>
      <h4 className="form-title">Validation Support</h4>
      <div className='validation_wrapper'>
        <div className="control_wrapper" id="control_wrapper">
          <form id="form1"  method="post">
            <div className="form-group" >
              <div className="e-float-input">
                <input type="text" id="name" name="name" onFocus= {this.floatFocus} onBlur= {this.floatBlur}  data-msg-containerid="nameError" />
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
          </form>
          <br/>
          <br/>
          <div className="submitBtn">
            <button className="submit-btn e-btn" onClick={this.onSubmitClick = this.onSubmitClick.bind(this)} id="submit-btn">Submit</button>
          </div>
          <div id="confirmationDialog"/> </div>
        </div>
      </div>
      <DialogComponent id="defaultdialog" isModal={true} visible ={false} content = 'Your details has been updated successfully, Thank you' animationSettings={this.animationSettings} width={'50%'}  ref={dialog => this.dialogInstance = dialog!}
      target={'.control-section'} overlayClick={this.onOverlayClick=this.onOverlayClick.bind(this)} />
    </div>) }
}

ReactDOM.render(<Validation />, document.getElementById('validation'));


