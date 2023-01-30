

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastClickEventArgs, ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public toasts = [
    { template: '2 Mail has received' },
    { template: 'User Guest Logged in' },
    { template: 'Logging in as Guest' },
    { template: 'Ticket has reserved ' },
    { template: '#templateToast' }
  ];
  public toastFlag: number = 0;
  public maxCount: number = 3;
  public timeOutDelay: number = 600;
  public position = { X: 'Right', Y: 'Bottom' };

  public toastCreated(): void {
    this.toastInstance.show(this.toasts[this.toastFlag]);
    ++this.toastFlag;
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
    this.toastShow();
  }

  public onClick(e: ToastClickEventArgs): void {
    e.clickToClose = true;
  }

  public render() {
    return (
      <div>
        <div><ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Bottom Position Toast</ButtonComponent></div>
        <ToastComponent click={this.onClick = this.onClick.bind(this)} ref={toast => this.toastInstance = toast!} position={this.position} created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
};
export default App;



