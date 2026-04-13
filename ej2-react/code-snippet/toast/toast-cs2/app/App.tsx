


import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {
    let toastInstance:ToastComponent;
    function toastCreated() {
      toastInstance.show();
    }
    return (
      <ToastComponent ref={ toast => toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={toastCreated.bind(this)} />
    );
};
export default App;



