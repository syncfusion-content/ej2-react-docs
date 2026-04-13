

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';

function App() {
    let position = { X: 'Center' };
    let toastInstance:ToastComponent;
    function onBeforeClose(e: any):void {
        if (e.type === "swipe") {
            e.cancel = true;
        }
    }
    function toastCreated() {
        toastInstance.show();
    }
    function toastShow() {
        toastInstance.show();
    }
    return (<div>
      <ButtonComponent cssClass="e-primary" onClick={toastShow.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent ref={toast => toastInstance = toast} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" position={position} beforeClose={onBeforeClose.bind(this)} created={toastCreated.bind(this)} />
    </div>);
}
export default App;



