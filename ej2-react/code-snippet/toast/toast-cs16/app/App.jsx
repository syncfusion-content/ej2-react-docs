import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
function App() {
    let toastInstance;
    function toastCreated() {
        toastInstance.show();
    }
    return (<ToastComponent ref={toast => toastInstance = toast} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" created={toastCreated.bind(this)}/>);
}
;
export default App;
