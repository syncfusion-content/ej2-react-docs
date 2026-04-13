

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

function App(){
  let toastInstance: ToastComponent;
  let toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning' },
    { title: 'Success !', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success' },
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger' },
    { title: 'Information !', content: 'Please read the comments carefully.', cssClass: 'e-toast-info' }
  ];
  let timeOutDelay: number = 600;
  let toastFlag: number = 0;
  let position = { X: 'Right', Y: 'Bottom' };

  function toastCreated(): void {
    toastInstance.show(toasts[toastFlag]);
    ++toastFlag;
  }

  function toastShow() {
    setTimeout(
      () => {
        toastInstance.show(toasts[toastFlag]);
        ++toastFlag;
        if (toastFlag === (toasts.length)) {
          toastFlag = 0;
        }
      }, timeOutDelay);
  }

  function btnClick(): void {
    toastShow()
  }

  return (
    <div>
      <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent ref={toast => toastInstance = toast!} position={position} created={toastCreated.bind(this)} />
    </div>
  );
};
export default App;



