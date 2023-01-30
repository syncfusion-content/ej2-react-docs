

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent, ToastUtility } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
let toastObj;
function App() {
  function toastShow() {
    toastObj = ToastUtility.show({
        title: 'Toast Title',
        content: 'Toast shown using utility function with ToastModel',
        timeOut: 20000,
        position: { X: 'Right', Y: 'Bottom' },
        showCloseButton: true,
        click: toastClick.bind(this),
        buttons:  [{
            model: { content: 'Close' }, click: toastClose.bind(this)
        }]
    });
  }

  function toastClick() {
    console.log('Toast click event triggered');
  }

  function toastClose() {
    toastObj.hide('All');
  }

  return (
    <div>
      <div className="toastUtility">
        <ButtonComponent cssClass="e-btn e-control" onClick={toastShow.bind(this)}> Show Toast </ButtonComponent>
      </div>
    </div>
  );
}
export default App;



