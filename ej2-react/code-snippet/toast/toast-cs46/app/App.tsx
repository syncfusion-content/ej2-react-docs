

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent, ToastUtility } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
let toastObj;
function App(){
  function infoShow() {
    toastObj = ToastUtility.show('Please read the comments carefully', 'Information', 20000);
  }
  function successShow() {
    toastObj = ToastUtility.show('Your message has been sent successfully', 'Success', 20000);
  }
  function warningShow() {
    toastObj = ToastUtility.show('There was a problem with your network connection', 'Warning', 20000);
  }
  function dangerShow() {
    toastObj = ToastUtility.show('A problem has been occurred while submitting the data', 'Error', 20000);
  }

  function hideToast() {
    toastObj.hide('All');
  }

  return (
    <div>
      <div>
        <ButtonComponent cssClass="e-btn e-control e-info" onClick={infoShow.bind(this)}> Info Message </ButtonComponent>
        <ButtonComponent cssClass="e-btn e-control e-success" onClick={successShow.bind(this)}> Success Message </ButtonComponent>
        <ButtonComponent cssClass="e-btn e-control e-warning" onClick={warningShow.bind(this)}> Warning Message </ButtonComponent>
        <ButtonComponent cssClass="e-btn e-control e-danger" onClick={dangerShow.bind(this)}> Danger Message </ButtonComponent>
      </div>
      <br/>
      <div className="toastUtility">
        <ButtonComponent cssClass="e-btn e-control" onClick={hideToast.bind(this)}> Hide All </ButtonComponent>
      </div>
    </div>
  );
}
export default App;



