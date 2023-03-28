import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
function App() {
    let toastInstance;
    let timeOutDelay = 600;
    let position = { X: 'Right', Y: 'Bottom' };
    function toastCreated() {
        toastShow(toastInstance);
    }
    function toastShow(toastObj) {
        setTimeout(() => {
            toastObj.show();
        }, timeOutDelay);
    }
    function btnClick() {
        toastShow(toastInstance);
    }
    function onClick(e) {
        e.clickToClose = true;
    }
    return (<div>
      <div><ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Bottom Position Toast</ButtonComponent></div>
      <ToastComponent click={onClick.bind(this)} ref={toast => toastInstance = toast} title='Warning !' content='There was a problem with your network connection.' position={position} created={toastCreated.bind(this)}/>
    </div>);
}
export default App;
