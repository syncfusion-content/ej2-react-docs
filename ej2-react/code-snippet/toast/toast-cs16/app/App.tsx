

import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';

function App() {
  let toastInstance:ToastComponent;
  function toastCreated(): void {
    toastInstance.show();
  }

  return (
    <ToastComponent ref={toast => toastInstance = toast!} title="Matt sent you a friend request" content="Hey, wanna dress up as wizards and ride our hoverboards?" created={toastCreated.bind(this)} />
  );

};
export default App;



