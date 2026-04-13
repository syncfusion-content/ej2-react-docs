import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';
function App() {
    let toastInstance;
    let timeOutDelay = 600;
    let position = { X: 'Right', Y: 'Bottom' };
    function toastCreated() {
        toastInstance.show();
    }
    function toastShow() {
        const audio = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
        audio.play();
        setTimeout(() => {
            toastInstance.show();
        }, timeOutDelay);
    }
    function btnClick() {
        toastShow();
    }
    return (<div>
      <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent ref={toast => toastInstance = toast} title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' position={position} created={toastCreated.bind(this)}/>
    </div>);
}
export default App;
