

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastBeforeOpenArgs, ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

function App() {
  let toastInstance: ToastComponent;
  let toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.' },
    { title: 'Success !', content: 'Your message has been sent successfully.' },
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.' },];
  let toastFlag: number = 0;
  let maxCount: number = 3;
  let timeOutDelay: number = 600;
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
  function onBeforeOpen(e: ToastBeforeOpenArgs): void {
    if (maxCount === toastInstance.element.childElementCount) {
      e.cancel = true;
    } else {
      e.cancel = false;
    }
  }

  return (
    <div>
      <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent ref={toast => toastInstance = toast!} position={position}
      beforeOpen={onBeforeOpen.bind(this)} created={toastCreated.bind(this)} />
    </div>
  );
}
export default App;



