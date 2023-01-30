import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import { useRef } from 'react';
function App() {
    const toastInstance = useRef(null);
    function toastCreated() {
        toastInstance.current.show();
    }
    return (<div id='#toast_target'/>
        ,
            <ToastComponent id="toast_target" ref={toastInstance} title="Sample Toast Title" content="Sample Toast Content" created={toastCreated}/>);
    div >
    ;
    ;
}
export default App;
