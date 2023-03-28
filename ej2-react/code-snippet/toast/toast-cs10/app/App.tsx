

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    let toastInstance: ToastComponent;
    let position = { X: 'Center' };
  
    function toastCreated(): void {
      toastShow();
    }
  
    function toastShow() {
      setTimeout(
        () => {
          toastInstance.show();
        }, 600);
    }
  
    return (
        <div>
            <ButtonComponent cssClass="e-primary" onClick={toastShow.bind(this)}> Show Toast </ButtonComponent>
            <ToastComponent ref={toast => toastInstance = toast!} title="File Downloading" content="<div class='progress'><span style='width: 80%'></span></div>" position={position} showCloseButton={true} target="#toast_target" newestOnTop={true} showProgressBar={true} progressDirection='Ltr' created={toastCreated.bind(this)} />
        </div>
    );
}
export default App;



