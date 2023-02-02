import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
function App() {
    let toastInstance;
    let toasts = [
        { template: '2 Mail has received' },
        { template: 'User Guest Logged in' },
        { template: 'Logging in as Guest' },
        { template: 'Ticket has reserved ' },
        { template: '#templateToast' }
    ];
    let toastFlag = 0;
    let maxCount = 3;
    let timeOutDelay = 600;
    let position = { X: 'Right', Y: 'Bottom' };
    function toastCreated() {
        toastInstance.show(toasts[toastFlag]);
        ++toastFlag;
    }
    function toastShow() {
        setTimeout(() => {
            toastInstance.show(toasts[toastFlag]);
            ++toastFlag;
            if (toastFlag === (toasts.length)) {
                toastFlag = 0;
            }
        }, timeOutDelay);
    }
    function btnClick() {
        toastShow();
    }
    function onClick(e) {
        e.clickToClose = true;
    }
    return (<div>
      <div><ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Bottom Position Toast</ButtonComponent></div>
      <ToastComponent click={onClick.bind(this)} ref={toast => toastInstance = toast} position={position} created={toastCreated.bind(this)}/>
    </div>);
}
export default App;
