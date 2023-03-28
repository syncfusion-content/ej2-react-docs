

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastBeforeOpenArgs, ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public timeOutDelay: number = 600;
  public position = { X: 'Right', Y: 'Bottom' };
  public style = { paddingTop: '20px' };
  public dropDownInstance: DropDownListComponent;
  public progressBarColor = ['Red', 'Cyan', 'Blue', 'Yellow', 'Pink'];

  public toastCreated(): void {
    this.toastInstance.show();
  }

  public toastShow() {
    setTimeout(
      () => {
        this.toastInstance.show();
      }, this.timeOutDelay);
  }

  public btnClick(): void {
    this.toastShow()
  }

  public onBeforeOpen(e: ToastBeforeOpenArgs): void {
    const progress: HTMLElement = e.element.querySelector('.e-toast-progress') as HTMLElement;
    progress.style.height = ((document.getElementById('progressHeight') as HTMLInputElement).value + 'px').toString();
    progress.style.backgroundColor = this.dropDownInstance.value.toString();
  }

  public valueChange(): void {
    const progressElements: NodeList = this.toastInstance.element.querySelectorAll('.e-toast-progress');
    progressElements.forEach((ele: HTMLElement) => {
      ele.style.backgroundColor = this.dropDownInstance.value.toString();
    })
  }

  public render() {
    return (
      <div>
        <ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Toast </ButtonComponent>
        <div className='e-row' style={this.style}>
          <div className='e-float-input'>
            <input type='text' className='e-input' id='progressHeight' defaultValue={'4'} required={true} />
            <span className='e-float-line' />
            <label className="e-float-text">ProgressBar Height</label>
          </div>
        </div>
        <div className='e-row' style={this.style}>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label>Progress Bar</label>
          </div>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <DropDownListComponent ref={drop => this.dropDownInstance = drop!} dataSource={this.progressBarColor} placeholder="Select a ProgressBar Color" change={this.valueChange = this.valueChange.bind(this)} index={0} />
          </div>
        </div>
        <ToastComponent ref={toast => this.toastInstance = toast!} showProgressBar={true} title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' position={this.position} beforeOpen={this.onBeforeOpen = this.onBeforeOpen.bind(this)} created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
};
export default App;


