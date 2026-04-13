


import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {
  let toastInstance: ToastComponent;

  function toastCreated(): void {
    toastInstance.show();
  }

  return (
    <div>
      <div id='#toast_target' />
      <ToastComponent id='toast_target' ref={toast => toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={toastCreated.bind(this)} />
    </div>
  );
  
};
export default App;



