import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
function App() {
    let toastInstance;
    let toasts = [
        { title: 'Warning !', content: 'There was a problem with your network connection.', isOpen: false },
        { title: 'Success !', content: 'Your message has been sent successfully.', isOpen: false },
        { title: 'Error !', content: 'A problem has been occurred while submitting your data.', isOpen: false }
    ];
    let toastFlag = 0;
    let timeOutDelay = 600;
    let position = { X: 'Center' };
    function toastCreated() {
        toastInstance.show(toasts[toastFlag]);
        ++toastFlag;
    }
    function onClose(e) {
        for (let i = 0; i < toasts.length; i++) {
            if (toasts[i].title === e.options.title) {
                toasts[i].isOpen = false;
            }
        }
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
        if (preventDuplicate(e)) {
            e.cancel = true;
        }
    }
    function preventDuplicate(e) {
        for (let i = 0; i < toasts.length; i++) {
            if (toasts[i].title === e.options.title && !toasts[i].isOpen) {
                toasts[i].isOpen = true;
                return false;
            }
        }
        return true;
    }
    return (<div>
        <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => toastInstance = toast} position={position} beforeOpen={onBeforeOpen.bind(this)} created={toastCreated.bind(this)} close={onClose.bind(this)}/>
      </div>);
}
;
export default App;
