import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';
function App() {
    let toastInstance;
    let position = { X: 'Center' };
    function toastCreated() {
        toastInstance.show();
    }
    function toastShow() {
        toastInstance.show();
    }
    return (<div>
        <ButtonComponent cssClass="e-primary" onClick={toastShow.bind(this)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => toastInstance = toast} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" position={position} created={toastCreated.bind(this)}/>
      </div>);
}
export default App;
