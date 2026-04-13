

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastBeforeOpenArgs, ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

function App(){
  let toastInstance: ToastComponent;
  let toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.', isOpen: false },
    { title: 'Success !', content: 'Your message has been sent successfully.', isOpen: false },
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.', isOpen: false }
  ];
  let toastFlag: number = 0;  
  let timeOutDelay: number = 600;
  let position = { X: 'Center' };

  function toastCreated(): void {
    toastInstance.show(toasts[toastFlag]);
    ++toastFlag;
  }

  function onClose(e: any): void {
    for (let i: number = 0; i < toasts.length; i++) {
      if (toasts[i].title === e.options.title) {
          toasts[i].isOpen = false;
      }
    }
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
    if (preventDuplicate(e)) {
      e.cancel = true;
    }
  }
  function preventDuplicate(e: ToastBeforeOpenArgs): boolean {
    for (let i: number = 0; i < toasts.length; i++) {
      if (toasts[i].title === e.options.title && !toasts[i].isOpen) {
        toasts[i].isOpen = true;
        return false;
      }
    }
    return true;
  }

    return (
      <div>
        <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => toastInstance = toast!} position={position} beforeOpen={onBeforeOpen.bind(this)} created={toastCreated.bind(this)} close={onClose.bind(this)} />
      </div>
    );
};
export default App;



