

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App(){
  let toastInstance: ToastComponent;
  let position: any;
  let target: any;
  let width: any;
  let position = { X: 'Right', Y: 'Bottom' };
  let template = (document.getElementById("template_toast_ele") as HTMLElement).innerHTML;

  function toastCreated(): void {
    toastInstance.show();
  }

  function toastShow() {
    toastInstance.show();
  }

  return (
    <div>
      <ButtonComponent cssClass="e-primary" id='template_toast' onClick={toastShow = toastShow.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent id='template_toast' ref={toast => toastInstance = toast!} template={template} position={position} extendedTimeout={0} timeOut={120000} created={toastCreated = toastCreated.bind(this)} />
    </div>
  );
}
export default App;



