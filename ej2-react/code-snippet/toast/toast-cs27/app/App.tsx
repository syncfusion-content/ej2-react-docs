

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastBeforeOpenArgs, ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public toasts = [
    { title: 'Warning !', content: 'There was a problem with your network connection.', isOpen: false },
    { title: 'Success !', content: 'Your message has been sent successfully.', isOpen: false },
    { title: 'Error !', content: 'A problem has been occurred while submitting your data.', isOpen: false }
  ];
  public toastFlag: number = 0;  
  public timeOutDelay: number = 600;
  public position = { X: 'Center' };

  public toastCreated(): void {
    this.toastInstance.show(this.toasts[this.toastFlag]);
    ++this.toastFlag;
  }

  public onClose(e: any): void {
    for (let i: number = 0; i < this.toasts.length; i++) {
      if (this.toasts[i].title === e.options.title) {
          this.toasts[i].isOpen = false;
      }
    }
  }

  public toastShow() {
    setTimeout(
      () => {
        this.toastInstance.show(this.toasts[this.toastFlag]);
        ++this.toastFlag;
        if (this.toastFlag === (this.toasts.length)) {
          this.toastFlag = 0;
        }
      }, this.timeOutDelay);
  }

  public btnClick(): void {
    this.toastShow()
  }
  public onBeforeOpen(e: ToastBeforeOpenArgs): void {
    if (this.preventDuplicate(e)) {
      e.cancel = true;
    }
  }
  public preventDuplicate(e: ToastBeforeOpenArgs): boolean {
    for (let i: number = 0; i < this.toasts.length; i++) {
      if (this.toasts[i].title === e.options.title && !this.toasts[i].isOpen) {
        this.toasts[i].isOpen = true;
        return false;
      }
    }
    return true;
  }

  public render() {
    return (
      <div>
        <ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast!} position={this.position} beforeOpen={this.onBeforeOpen = this.onBeforeOpen.bind(this)} created={this.toastCreated = this.toastCreated.bind(this)} close={this.onClose = this.onClose.bind(this)} />
      </div>
    );
  }
};
export default App;


