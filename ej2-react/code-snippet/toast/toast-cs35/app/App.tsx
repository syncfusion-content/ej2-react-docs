

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastClickEventArgs, ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public toastLeftInstance: ToastComponent;
  public timeOutDelay: number = 600;
  public position = { X: 'Right', Y: 'Bottom' };
  public leftPosition = { X: 'Right', };

  public toastCreated(): void {
    this.toastShow(this.toastInstance);
    this.toastShow(this.toastLeftInstance);
  }

  public toastShow(toastObj: ToastComponent) {
    setTimeout(
      () => {
        toastObj.show();
      }, this.timeOutDelay);
  }

  public btnClick(): void {
    this.toastShow(this.toastInstance);
  }

  public btnToastClick(): void {
    this.toastShow(this.toastLeftInstance);
  }

  public onClick(e: ToastClickEventArgs): void {
    e.clickToClose = true;
  }

  public render() {
    return (
      <div id='multiToast'>
        <div><ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Bottom Position Toast</ButtonComponent></div>
        <div><ButtonComponent cssClass="e-primary" onClick={this.btnToastClick = this.btnToastClick.bind(this)}> Show Top Position Toast</ButtonComponent></div>
        <ToastComponent click={this.onClick = this.onClick.bind(this)} ref={toast => this.toastInstance = toast!}
        title='Warning !' content='There was a problem with your network connection.' position={this.position} created={this.toastCreated = this.toastCreated.bind(this)} />
        <ToastComponent click={this.onClick = this.onClick.bind(this)} ref={toast => this.toastLeftInstance = toast!}
        title='Warning !' content='There was a problem with your network connection.' position={this.leftPosition} created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
};
export default App;



