import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
function App() {
    let toastInstance;
    let toasts = [
        { title: 'Warning !', content: 'There was a problem with your network connection.' },
        { title: 'Success !', content: 'Your message has been sent successfully.' },
        { title: 'Error !', content: 'A problem has been occurred while submitting your data.' },
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
    function onBeforeOpen(e) {
        if (maxCount === toastInstance.element.childElementCount) {
            e.cancel = true;
        }
        else {
            e.cancel = false;
        }
    }
    return (<div>
      <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent ref={toast => toastInstance = toast} position={position} beforeOpen={onBeforeOpen.bind(this)} created={toastCreated.bind(this)}/>
    </div>);
}
export default App;
