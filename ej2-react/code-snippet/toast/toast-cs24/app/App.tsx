

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastBeforeOpenArgs, ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

function App() {
  let toastInstance: ToastComponent;
  let timeOutDelay: number = 600;
  let position = { X: 'Right', Y: 'Bottom' };
  let style = { paddingTop: '20px' };
  let dropDownInstance: DropDownListComponent;
  let progressBarColor = ['Red', 'Cyan', 'Blue', 'Yellow', 'Pink'];

  function toastCreated(): void {
    toastInstance.show();
  }

  function toastShow() {
    setTimeout(
      () => {
        toastInstance.show();
      }, timeOutDelay);
  }

  function btnClick(): void {
    toastShow()
  }

  function onBeforeOpen(e: ToastBeforeOpenArgs): void {
    const progress: HTMLElement = e.element.querySelector('.e-toast-progress') as HTMLElement;
    progress.style.height = ((document.getElementById('progressHeight') as HTMLInputElement).value + 'px').toString();
    progress.style.backgroundColor = dropDownInstance.value.toString();
  }

  function valueChange(): void {
    const progressElements: NodeList = toastInstance.element.querySelectorAll('.e-toast-progress');
    progressElements.forEach((ele: HTMLElement) => {
      ele.style.backgroundColor = dropDownInstance.value.toString();
    })
  }

    return (
      <div>
        <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast </ButtonComponent>
        <div className='e-row' style={style}>
          <div className='e-float-input'>
            <input type='text' className='e-input' id='progressHeight' defaultValue={'4'} required={true} />
            <span className='e-float-line' />
            <label className="e-float-text">ProgressBar Height</label>
          </div>
        </div>
        <div className='e-row' style={style}>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label>Progress Bar</label>
          </div>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <DropDownListComponent ref={drop => dropDownInstance = drop!} dataSource={progressBarColor} placeholder="Select a ProgressBar Color" change={valueChange.bind(this)} index={0} />
          </div>
        </div>
        <ToastComponent ref={toast => toastInstance = toast!} showProgressBar={true} title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' position={position} beforeOpen={onBeforeOpen.bind(this)} created={toastCreated.bind(this)} />
      </div>
    );
}
export default App;



