

import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { useRef } from 'react';

function App() {
  const toastInstance = useRef<ToastComponent>(null);

  function toastCreated() {
    toastInstance.current.show();
  }

  return (
    <div>
      <ToastComponent
        ref={toastInstance}
        title="Matt sent you a friend request"
        content="Hey, wanna dress up as wizards and ride our hoverboards?"
        created={toastCreated}
      />
    </div>
  );
}

export default App;



