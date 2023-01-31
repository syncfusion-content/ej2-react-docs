

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public position = { X: "Right", Y: "Bottom" };
  private buttons: object[] = [
    { model: { content: "Ignore" } },
    { model: { content: "reply" } }
  ];

  public toastCreated(): void {
    this.toastShow();
  }

  public toastShow() {
    const value: number = parseInt((document.getElementById('timeOut') as HTMLInputElement).value, 0);
    this.toastInstance.show({ timeOut: value });
  }

  public contentTemplate() {
    return <p><img src='./laura.png'/></p>;
  }

  public render() {
    return (
      <div>
        <div className='e-float-input'>
          <input type='text' className='e-input' id='timeOut' defaultValue={'0'} required={true} />
          <span className='e-float-line' />
          <label className="e-float-text">TimeOut</label>
        </div>
        <ButtonComponent cssClass="e-primary" onClick={this.toastShow = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent id="elementToastTime" ref={toast => this.toastInstance = toast!} title="Anjolie Stokes" content={this.contentTemplate} position={this.position} width={230} height={250} buttons={this.buttons} showProgressBar={true} created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
};
export default App;


