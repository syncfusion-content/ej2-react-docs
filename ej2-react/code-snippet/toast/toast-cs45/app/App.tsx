

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent, ToastUtility } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
const toastObj;
class App extends React.Component<{}, {}> {
  public infoShow() {
    toastObj = ToastUtility.show('Please read the comments carefully', 'Information', 20000);
  }
  public successShow() {
    toastObj = ToastUtility.show('Your message has been sent successfully', 'Success', 20000);
  }
  public warningShow() {
    toastObj = ToastUtility.show('There was a problem with your network connection', 'Warning', 20000);
  }
  public dangerShow() {
    toastObj = ToastUtility.show('A problem has been occurred while submitting the data', 'Error', 20000);
  }

  public hideToast() {
    toastObj.hide('All');
  }

  public render() {
    return (
      <div>
        <div>
          <ButtonComponent cssClass="e-btn e-control e-info" onClick={this.infoShow = this.infoShow.bind(this)}> Info Message </ButtonComponent>
          <ButtonComponent cssClass="e-btn e-control e-success" onClick={this.successShow = this.successShow.bind(this)}> Success Message </ButtonComponent>
          <ButtonComponent cssClass="e-btn e-control e-warning" onClick={this.warningShow = this.warningShow.bind(this)}> Warning Message </ButtonComponent>
          <ButtonComponent cssClass="e-btn e-control e-danger" onClick={this.dangerShow = this.dangerShow.bind(this)}> Danger Message </ButtonComponent>
        </div>
        <br/>
        <div className="toastUtility">
          <ButtonComponent cssClass="e-btn e-control" onClick={this.hideToast = this.hideToast.bind(this)}> Hide All </ButtonComponent>
        </div>
      </div>
    );
  }
};
export default App;


